import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function Loader() {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: '#000',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999999,
                color: 'var(--highlightText)'
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px'
                }}
            >
                {/* Minimal geometric spinner */}
                <Box sx={{ position: 'relative', width: 60, height: 60 }}>
                    <motion.div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            border: '3px solid transparent',
                            borderTop: '3px solid var(--highlightText)',
                            borderRight: '3px solid var(--highlightText)',
                            borderRadius: '50%',
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    />
                    <motion.div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            border: '3px solid transparent',
                            borderBottom: '3px solid #fff',
                            borderLeft: '3px solid #fff',
                            borderRadius: '50%',
                        }}
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                </Box>
                
                {/* Techy typing text */}
                <Typography sx={{ fontFamily: "'Inter', monospace", letterSpacing: 4, fontWeight: 500 }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        INITIATING 
                    </motion.span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        _
                    </motion.span>
                </Typography>
            </motion.div>
        </Box>
    );
}
