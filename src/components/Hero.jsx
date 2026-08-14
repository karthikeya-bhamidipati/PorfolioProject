import React from 'react';
import { Box, Typography, Button, Avatar, Link } from '@mui/material';
import { Download } from '@mui/icons-material';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { personal_information, IntrestedSubjects } from '../Utils/masterData';
import { FacebookRounded, GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material';

const SOCIAL_LINKS = [
    { icon: <Instagram fontSize="inherit" />, link: 'https://www.instagram.com/karthikeya_bhamidipati/' },
    { icon: <FacebookRounded fontSize="inherit" />, link: 'https://www.facebook.com/karthikeya.bhamidipati.005/' },
    { icon: <LinkedIn fontSize="inherit" />, link: personal_information.linkedin },
    { icon: <GitHub fontSize="inherit" />, link: personal_information.github },
    { icon: <Mail fontSize="inherit" />, link: `mailto:${personal_information.email}` },
];

export default function Hero() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/Karthikeya_Bhamidipati_Resume.pdf`;
        link.download = 'Karthikeya_Bhamidipati_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box
            id="hero"
            component="section"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: { xs: 2, md: 8 },
                pt: { xs: 12, md: 10 },
                overflow: 'hidden'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: { xs: 4, md: 8 },
                    width: '100%',
                    maxWidth: 1200,
                }}
            >
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' },
                        gap: 2,
                        flex: 1,
                        width: '100%'
                    }}
                >
                    <Typography variant="h6" sx={{ color: 'var(--text-secondary)', fontWeight: 500, letterSpacing: 3, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                        HELLO THERE, I AM
                    </Typography>
                    
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2.2rem', sm: '3.5rem', md: '4.5rem' },
                            fontWeight: 800,
                            lineHeight: 1.1,
                            background: 'linear-gradient(45deg, #fff, var(--highlightText))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {personal_information.name}
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{ 
                            fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' }, 
                            fontWeight: 400, 
                            mt: 1, 
                            display: 'flex', 
                            flexWrap: { xs: 'wrap', md: 'nowrap' }, 
                            justifyContent: {xs: 'center', md: 'flex-start'}, 
                            alignItems: 'center',
                            gap: 1,
                            width: '100%'
                        }}
                    >
                        AND I AM INTO
                        <Box component="span" sx={{ 
                            color: 'var(--highlightText)', 
                            fontWeight: 600, 
                            whiteSpace: 'nowrap',
                            display: 'inline-block',
                            minWidth: { xs: '200px', sm: '300px', md: '400px' }, // Fixed width prevents layout shift
                            textAlign: 'left'
                        }}>
                            <Typewriter
                                options={{
                                    strings: IntrestedSubjects,
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 80
                                }}
                            />
                        </Box>
                    </Typography>

                    <Button
                        variant="contained"
                        startIcon={<Download />}
                        onClick={handleDownload}
                        sx={{
                            mt: 3,
                            backgroundColor: 'var(--highlightText)',
                            color: '#fff',
                            fontWeight: 600,
                            borderRadius: '30px',
                            px: 4,
                            py: 1.5,
                            textTransform: 'none',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            boxShadow: '0 8px 20px rgba(241, 109, 21, 0.3)',
                            transition: 'all 0.3s',
                            '&:hover': {
                                backgroundColor: '#d15d11',
                                transform: 'translateY(-3px)',
                                boxShadow: '0 12px 25px rgba(241, 109, 21, 0.4)',
                            },
                        }}
                    >
                        Download Resume
                    </Button>

                    <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, mt: { xs: 3, md: 4 } }}>
                        {SOCIAL_LINKS.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    fontSize: { xs: '1.8rem', md: '2rem' },
                                    color: 'var(--text-secondary)',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        color: 'var(--highlightText)',
                                        transform: 'translateY(-3px)',
                                    },
                                }}
                            >
                                {data.icon}
                            </Link>
                        ))}
                    </Box>
                </Box>

                <Box
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: { xs: 200, sm: 250, md: 400 },
                            height: { xs: 200, sm: 250, md: 400 },
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: '50%',
                                border: '2px solid var(--highlightText)',
                                filter: 'blur(10px)',
                                opacity: 0.5,
                            }}
                        />
                        <Avatar
                            alt={personal_information.name}
                            src={personal_information.photo}
                            sx={{
                                width: '100%',
                                height: '100%',
                                border: '4px solid var(--highlightText)',
                                boxShadow: '0 0 30px rgba(241, 109, 21, 0.2)',
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
