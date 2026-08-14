import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { motion } from 'framer-motion';
import { experience } from '../Utils/masterData';

export default function Experience() {
    // Assuming there's only one experience based on the data, 
    // we make it a prominent feature card rather than an empty timeline.
    const exp = experience[0];

    return (
        <Box id="experience" component="section" sx={{ padding: { xs: 3, md: 8 }, minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ maxWidth: 1000, margin: '0 auto', width: '100%' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, color: 'var(--highlightText)', textAlign: 'center', fontSize: { xs: '2rem', md: '3rem' } }}>
                    Experience
                </Typography>
                
                <Paper
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    sx={{
                        background: 'var(--glass-bg)',
                        backdropFilter: 'blur(15px)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: 4,
                        padding: { xs: 4, md: 6 },
                        boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '4px',
                            background: 'linear-gradient(90deg, transparent, var(--highlightText), transparent)'
                        }
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Box sx={{ 
                            backgroundColor: 'rgba(241, 109, 21, 0.1)', 
                            p: 2, 
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <WorkOutlineIcon sx={{ color: 'var(--highlightText)', fontSize: '2.5rem' }} />
                        </Box>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                                {exp.title}
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'var(--highlightText)', mt: 0.5, fontWeight: 500 }}>
                                {exp.company}
                            </Typography>
                        </Box>
                    </Box>
                    
                    <Typography variant="subtitle1" sx={{ color: 'var(--text-secondary)', mb: 4, fontStyle: 'italic', borderBottom: '1px solid var(--glass-border)', pb: 2, display: 'inline-block' }}>
                        {exp.duration}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.1rem' }, fontWeight: 300 }}>
                        {exp.description}
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
}
