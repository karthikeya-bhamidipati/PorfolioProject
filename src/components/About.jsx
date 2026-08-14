import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { career_objectives } from '../Utils/masterData';

export default function About() {
    return (
        <Box
            id="about"
            component="section"
            sx={{
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                padding: { xs: 3, md: 8 },
            }}
        >
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                sx={{
                    maxWidth: 1000,
                    margin: '0 auto',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 4,
                    padding: { xs: 4, md: 6 },
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, color: 'var(--highlightText)' }}>
                    About Me
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: '1.1rem', md: '1.2rem' },
                        lineHeight: 1.8,
                        color: 'var(--text-secondary)',
                        fontWeight: 300
                    }}
                >
                    {career_objectives}
                </Typography>
            </Box>
        </Box>
    );
}
