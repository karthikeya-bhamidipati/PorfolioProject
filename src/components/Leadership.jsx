import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { leadership_and_activities, workshops_training_and_hackathons } from '../Utils/masterData';

export default function Leadership() {
    return (
        <Box id="leadership" component="section" sx={{ padding: { xs: 3, md: 8 }, minHeight: '80vh' }}>
            <Box sx={{ maxWidth: 1000, margin: '0 auto' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, color: 'var(--highlightText)', textAlign: 'center' }}>
                    Leadership & Workshops
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <Box>
                        <Typography variant="h5" sx={{ mb: 4, color: 'var(--text-primary)', fontWeight: 600 }}>
                            Workshops & Hackathons
                        </Typography>
                        {workshops_training_and_hackathons.map((workshop, index) => (
                            <Box
                                key={index}
                                component={motion.div}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                sx={{ mb: 3 }}
                            >
                                <Accordion 
                                    sx={{ 
                                        background: 'var(--glass-bg)', 
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid var(--glass-border)',
                                        color: 'var(--text-primary)',
                                        borderRadius: '12px !important',
                                        '&:before': { display: 'none' }
                                    }}
                                >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'var(--highlightText)' }} />}>
                                        <Typography sx={{ fontWeight: 600, fontSize: '1.1rem' }}>{workshop.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography sx={{ color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.7 }}>
                                            {workshop.description}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        ))}
                    </Box>

                    <Box>
                        <Typography variant="h5" sx={{ mb: 4, color: 'var(--text-primary)', fontWeight: 600 }}>
                            Leadership Activities
                        </Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
                            {leadership_and_activities.map((activity, index) => (
                                <Box
                                    key={index}
                                    component={motion.div}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    sx={{
                                        background: 'var(--glass-bg)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid var(--glass-border)',
                                        padding: 3,
                                        borderRadius: 3,
                                        borderLeft: '4px solid var(--highlightText)',
                                    }}
                                >
                                    <Typography variant="h6" sx={{ color: 'var(--text-primary)', mb: 1, fontSize: '1.1rem' }}>
                                        {activity.role}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6 }}>
                                        {activity.description}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
