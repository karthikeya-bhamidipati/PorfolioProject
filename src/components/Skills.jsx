import React from 'react';
import { Box, Typography, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { skills_and_certifications } from '../Utils/masterData';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Skills() {
    return (
        <Box id="skills" component="section" sx={{ padding: { xs: 3, md: 8 }, minHeight: '100vh' }}>
            <Box sx={{ maxWidth: 1200, margin: '0 auto' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 8, color: 'var(--highlightText)', textAlign: 'center', fontSize: { xs: '2rem', md: '3rem' } }}>
                    Skills & Certifications
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {/* Skills Section Grid */}
                    <Box>
                        <Typography variant="h4" sx={{ mb: 5, color: 'var(--text-primary)', fontWeight: 600, textAlign: 'center' }}>
                            Technical Arsenal
                        </Typography>
                        <Box sx={{ 
                            display: 'grid', 
                            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, 
                            gap: 4 
                        }}>
                            {Object.entries(skills_and_certifications.skills).map(([category, skills], index) => (
                                <Box 
                                    key={category}
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    sx={{
                                        background: 'var(--glass-bg)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: 4,
                                        p: 4,
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 30px rgba(241, 109, 21, 0.15)',
                                            border: '1px solid rgba(241, 109, 21, 0.5)',
                                        }
                                    }}
                                >
                                    <Typography variant="h6" sx={{ color: 'var(--highlightText)', mb: 3, fontSize: '1.2rem', fontWeight: 600, borderBottom: '1px solid var(--glass-border)', pb: 1 }}>
                                        {category}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                                        {skills.map((skill, i) => (
                                            <Chip 
                                                key={i} 
                                                label={skill} 
                                                sx={{ 
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    color: 'var(--text-primary)',
                                                    fontSize: '0.9rem',
                                                    px: 1,
                                                    py: 2,
                                                    fontWeight: 500,
                                                    transition: 'all 0.3s',
                                                    '&:hover': {
                                                        borderColor: 'var(--highlightText)',
                                                        backgroundColor: 'rgba(241, 109, 21, 0.2)',
                                                        transform: 'scale(1.05)'
                                                    }
                                                }} 
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Certifications Section Grid */}
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h4" sx={{ mb: 5, color: 'var(--text-primary)', fontWeight: 600, textAlign: 'center' }}>
                            Certifications
                        </Typography>
                        <Box sx={{ 
                            display: 'grid', 
                            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, 
                            gap: 3 
                        }}>
                            {skills_and_certifications.certifications.map((cert, index) => (
                                <Paper 
                                    key={index}
                                    component={motion.div}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    sx={{
                                        background: 'linear-gradient(135deg, rgba(36,36,36,0.6) 0%, rgba(20,20,20,0.8) 100%)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid var(--glass-border)',
                                        padding: 3,
                                        borderRadius: 3,
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 2,
                                        transition: 'all 0.3s',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&:hover': {
                                            borderColor: 'var(--highlightText)',
                                            boxShadow: '0 8px 20px rgba(241, 109, 21, 0.2)',
                                            transform: 'translateY(-3px)'
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '4px',
                                            height: '100%',
                                            backgroundColor: 'var(--highlightText)'
                                        }
                                    }}
                                >
                                    <CheckCircleOutlineIcon sx={{ color: 'var(--highlightText)', mt: 0.2, fontSize: '1.5rem' }} />
                                    <Typography variant="body1" sx={{ color: 'var(--text-primary)', fontWeight: 400, lineHeight: 1.5, fontSize: '0.95rem' }}>
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
