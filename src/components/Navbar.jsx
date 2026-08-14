import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 1000,
                    transition: 'all 0.3s ease',
                    backdropFilter: scrolled ? 'blur(15px)' : 'none',
                    backgroundColor: scrolled ? 'rgba(36, 36, 36, 0.6)' : 'transparent',
                    borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
                    padding: { xs: '1rem', md: '1rem 4rem' },
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'var(--highlightText)' }}>
                    KB.
                </Typography>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ cursor: 'pointer', color: 'var(--text-primary)', fontWeight: 500, fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}
                            activeClass="active-nav-link"
                            onSetActive={(to) => {
                                const elements = document.querySelectorAll(`a[href="#${to}"]`);
                            }}
                        >
                            <Box sx={{ '&:hover': { color: 'var(--highlightText)' } }}>
                                {item.name}
                            </Box>
                        </Link>
                    ))}
                </Box>

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: 'none' }, color: 'var(--highlightText)' }}
                >
                    <MenuIcon />
                </IconButton>
            </Box>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        backgroundColor: 'rgba(20, 20, 20, 0.95)',
                        color: 'white',
                        width: 250,
                    }
                }}
            >
                <List sx={{ mt: 5 }}>
                    {navItems.map((item) => (
                        <ListItem button key={item.name} onClick={handleDrawerToggle}>
                            <Link
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                style={{ width: '100%', textDecoration: 'none', color: 'white' }}
                            >
                                <ListItemText primary={item.name} primaryTypographyProps={{ sx: { fontWeight: 500 } }} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}
