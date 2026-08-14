import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { career_objectives } from '../Utils/masterData';
import Terminal from './Terminal';

export default function About() {
    return (
        <Box id="about" component="section" sx={{ padding: { xs: 3, md: 8 }, minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, color: 'var(--highlightText)', textAlign: 'center', fontSize: { xs: '2rem', md: '3rem' } }}>
                    About Me
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 6, alignItems: 'stretch' }}>
                    
                    {/* Left Side: Standard Bio */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        sx={{
                            flex: 1,
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: 4,
                            padding: { xs: 3, md: 5 },
                            boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography variant="h5" sx={{ color: 'var(--text-primary)', mb: 3, fontWeight: 600 }}>
                            The Story
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.1rem' }, fontWeight: 300 }}>
                            {career_objectives}
                        </Typography>
                    </Box>

                    {/* Right Side: Interactive Terminal */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Terminal />
                    </Box>
                    
                </Box>
            </Box>
        </Box>
    );
}
