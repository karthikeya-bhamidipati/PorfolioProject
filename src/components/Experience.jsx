import React from 'react';
import { Box, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { experience } from '../Utils/masterData';

export default function Experience() {
    return (
        <Box id="experience" component="section" sx={{ padding: { xs: 3, md: 8 }, minHeight: '60vh' }}>
            <Box sx={{ maxWidth: 1000, margin: '0 auto' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, color: 'var(--highlightText)', textAlign: 'center' }}>
                    Experience
                </Typography>
                
                <Timeline position="right" sx={{ p: 0 }}>
                    {experience.map((exp, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot sx={{ backgroundColor: 'var(--highlightText)' }} />
                                {index < experience.length - 1 && <TimelineConnector sx={{ backgroundColor: 'var(--glass-border)' }} />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Box
                                    component={motion.div}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    sx={{
                                        background: 'var(--glass-bg)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: 3,
                                        padding: 3,
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                                    }}
                                >
                                    <Typography variant="h5" component="span" sx={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                                        {exp.title}
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: 'var(--highlightText)', mt: 1, fontSize: '1.1rem' }}>
                                        {exp.company}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'var(--text-secondary)', mb: 2, fontStyle: 'italic' }}>
                                        {exp.duration}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
                                        {exp.description}
                                    </Typography>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
        </Box>
    );
}
