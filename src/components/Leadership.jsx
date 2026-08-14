import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { motion } from 'framer-motion';
import { leadership_and_activities, workshops_training_and_hackathons } from '../Utils/masterData';

export default function Leadership() {
    return (
        <Box id="leadership" component="section" sx={{ padding: { xs: 3, md: 8 }, minHeight: '80vh' }}>
            <Box sx={{ maxWidth: 1200, margin: '0 auto' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 8, color: 'var(--highlightText)', textAlign: 'center', fontSize: { xs: '2rem', md: '3rem' } }}>
                    Leadership & Workshops
                </Typography>

                {/* Workshops Section */}
                <Box sx={{ mb: 8 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4, justifyContent: 'center' }}>
                        <EmojiEventsIcon sx={{ fontSize: '2rem', color: 'var(--highlightText)' }} />
                        <Typography variant="h4" sx={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                            Workshops & Hackathons
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' }, gap: 4 }}>
                        {workshops_training_and_hackathons.map((workshop, index) => (
                            <Paper
                                key={index}
                                component={motion.div}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                sx={{
                                    background: 'var(--glass-bg)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: 4,
                                    p: 4,
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                                }}
                            >
                                <Typography variant="h5" sx={{ color: 'var(--highlightText)', fontWeight: 700, mb: 2 }}>
                                    {workshop.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.8 }}>
                                    {workshop.description}
                                </Typography>
                            </Paper>
                        ))}
                    </Box>
                </Box>

                {/* Leadership Section - Bento Box Style */}
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4, justifyContent: 'center' }}>
                        <GroupsIcon sx={{ fontSize: '2rem', color: 'var(--highlightText)' }} />
                        <Typography variant="h4" sx={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                            Leadership Roles
                        </Typography>
                    </Box>
                    <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, 
                        gap: 3,
                        gridAutoRows: 'minmax(150px, auto)'
                    }}>
                        {leadership_and_activities.map((activity, index) => (
                            <Paper
                                key={index}
                                component={motion.div}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                sx={{
                                    background: index % 3 === 0 
                                        ? 'linear-gradient(135deg, rgba(241,109,21,0.1) 0%, rgba(36,36,36,0.8) 100%)' 
                                        : 'var(--glass-bg)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid var(--glass-border)',
                                    borderTop: index % 3 === 0 ? '2px solid var(--highlightText)' : '1px solid var(--glass-border)',
                                    padding: 3,
                                    borderRadius: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 10px 25px rgba(241, 109, 21, 0.15)'
                                    }
                                }}
                            >
                                <Typography variant="h6" sx={{ color: 'var(--text-primary)', mb: 2, fontSize: '1.15rem', fontWeight: 600 }}>
                                    {activity.role}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6 }}>
                                    {activity.description}
                                </Typography>
                            </Paper>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
