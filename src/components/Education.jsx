import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { education } from '../Utils/masterData';

export default function Education() {
    return (
        <Box id="education" component="section" sx={{ padding: { xs: 3, md: 8 }, minHeight: '80vh' }}>
            <Box sx={{ maxWidth: 1000, margin: '0 auto' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, color: 'var(--highlightText)', textAlign: 'center' }}>
                    Education
                </Typography>
                
                <Timeline position="right" sx={{ p: 0 }}>
                    {education.map((edu, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot sx={{ backgroundColor: 'var(--glass-bg)', p: 0 }}>
                                    {edu.logo && <Avatar src={edu.logo} sx={{ width: 40, height: 40 }} />}
                                </TimelineDot>
                                {index < education.length - 1 && <TimelineConnector sx={{ backgroundColor: 'var(--glass-border)' }} />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Box
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    sx={{
                                        background: 'var(--glass-bg)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: 3,
                                        padding: 3,
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                                    }}
                                >
                                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                                        {edu.degree}
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: 'var(--highlightText)', mt: 1, fontSize: '1.1rem' }}>
                                        {edu.institution}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, mb: 1, flexWrap: 'wrap' }}>
                                        <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>
                                            Score: {edu.score}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                                            {edu.duration}
                                        </Typography>
                                    </Box>
                                    {edu.relevant_coursework && (
                                        <Typography variant="body2" sx={{ color: 'var(--text-secondary)', mt: 1, fontWeight: 300 }}>
                                            <span style={{ color: 'var(--highlightText)', fontWeight: 500 }}>Relevant Coursework:</span> {edu.relevant_coursework}
                                        </Typography>
                                    )}
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
        </Box>
    );
}
