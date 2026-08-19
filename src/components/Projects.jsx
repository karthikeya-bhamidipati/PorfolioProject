import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Chip, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Tilt from 'react-parallax-tilt';
import { projects } from '../Utils/masterData';

export default function Projects() {
    return (
        <Box id="projects" component="section" sx={{ padding: { xs: 3, md: 8 }, minHeight: '100vh' }}>
            <Box sx={{ maxWidth: 1200, margin: '0 auto' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, color: 'var(--highlightText)', textAlign: 'center' }}>
                    Projects
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                    gap: 4
                }}>
                    {projects.map((project, index) => (
                        <Box
                            key={index}
                            component={motion.div}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} style={{ height: '100%' }}>
                                <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: 'var(--glass-bg)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: 4,
                                    color: 'var(--text-primary)',
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        border: '1px solid var(--highlightText)',
                                        boxShadow: '0 10px 30px rgba(241, 109, 21, 0.2)'
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={project.image || 'https://via.placeholder.com/400x200?text=Screenshot+Pending'}
                                    alt={project.title}
                                    sx={{ borderBottom: '1px solid var(--glass-border)' }}
                                />
                                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                            {project.title}
                                        </Typography>
                                        <IconButton 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            sx={{ color: 'var(--text-primary)', '&:hover': { color: 'var(--highlightText)' }, p: 0 }}
                                        >
                                            <GitHubIcon />
                                        </IconButton>
                                    </Box>

                                    {/* Render Iconify Avatars */}
                                    {project.avatar && project.avatar.length > 0 && (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 2, alignItems: 'center' }}>
                                            {project.avatar.map((av, i) => (
                                                <Icon key={i} icon={av} width="24" height="24" color="var(--text-secondary)" />
                                            ))}
                                        </Box>
                                    )}

                                    <Typography variant="body2" sx={{ color: 'var(--text-secondary)', mb: 3, flexGrow: 1, lineHeight: 1.6, fontWeight: 300 }}>
                                        {project.description}
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {project.tech_stack.map((tech, i) => (
                                            <Chip 
                                                key={i} 
                                                label={tech} 
                                                size="small"
                                                sx={{ 
                                                    backgroundColor: 'rgba(255,255,255,0.05)', 
                                                    color: 'var(--highlightText)',
                                                    border: '1px solid rgba(241, 109, 21, 0.3)',
                                                    fontWeight: 500
                                                }} 
                                            />
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                            </Tilt>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
