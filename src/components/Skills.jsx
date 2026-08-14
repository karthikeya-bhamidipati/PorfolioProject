import React from 'react';
import { Box, Typography, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { skills_and_certifications } from '../Utils/masterData';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Skills() {
    return (
        <Box id="skills" component="section" sx={{ padding: { xs: 3, md: 8 }, minHeight: '100vh' }}>
            <Box sx={{ maxWidth: 1200, margin: '0 auto' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, color: 'var(--highlightText)', textAlign: 'center' }}>
                    Skills & Certifications
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 6 }}>
                    {/* Skills Section */}
                    <Box sx={{ flex: 2 }}>
                        <Typography variant="h5" sx={{ mb: 4, color: 'var(--text-primary)', fontWeight: 600 }}>
                            Technical Arsenal
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {Object.entries(skills_and_certifications.skills).map(([category, skills], index) => (
                                <Box 
                                    key={category}
                                    component={motion.div}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Typography variant="h6" sx={{ color: 'var(--text-secondary)', mb: 2, fontSize: '1rem', fontWeight: 500 }}>
                                        {category}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                                        {skills.map((skill, i) => (
                                            <Chip 
                                                key={i} 
                                                label={skill} 
                                                sx={{ 
                                                    background: 'var(--glass-bg)',
                                                    backdropFilter: 'blur(5px)',
                                                    border: '1px solid var(--glass-border)',
                                                    color: 'var(--text-primary)',
                                                    fontSize: '0.9rem',
                                                    px: 1,
                                                    py: 2.5,
                                                    transition: 'all 0.3s',
                                                    '&:hover': {
                                                        borderColor: 'var(--highlightText)',
                                                        backgroundColor: 'rgba(241, 109, 21, 0.1)',
                                                        transform: 'translateY(-2px)'
                                                    }
                                                }} 
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Certifications Section */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" sx={{ mb: 4, color: 'var(--text-primary)', fontWeight: 600 }}>
                            Certifications
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {skills_and_certifications.certifications.map((cert, index) => (
                                <Paper 
                                    key={index}
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    sx={{
                                        background: 'var(--glass-bg)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid var(--glass-border)',
                                        padding: 2.5,
                                        borderRadius: 3,
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 2,
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            borderLeft: '4px solid var(--highlightText)',
                                            transform: 'translateX(5px)'
                                        }
                                    }}
                                >
                                    <CheckCircleOutlineIcon sx={{ color: 'var(--highlightText)', mt: 0.2 }} />
                                    <Typography variant="body1" sx={{ color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.5 }}>
                                        {cert}
                                    </Typography>
                                </Paper>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
