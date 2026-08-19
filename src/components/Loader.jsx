import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { personal_information } from '../Utils/masterData';

export default function Loader() {
    // Generate random geometry
    const shapes = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 60 + 20,
        x: Math.random() * 100, // viewport percentage
        y: Math.random() * 100, // viewport percentage
        duration: Math.random() * 5 + 3,
        delay: Math.random() * 2
    }));

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: '#0a0a0a',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999999,
                color: 'var(--highlightText)',
                overflow: 'hidden'
            }}
        >
            {/* Background Floating Geometry */}
            {shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    initial={{ opacity: 0, y: `${shape.y}vh`, x: `${shape.x}vw` }}
                    animate={{
                        opacity: [0, 0.15, 0.15, 0],
                        y: [`${shape.y}vh`, `${shape.y - 20}vh`],
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: shape.duration,
                        delay: shape.delay,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                    style={{
                        position: 'absolute',
                        width: shape.size,
                        height: shape.size,
                        border: '1px solid var(--highlightText)',
                        borderRadius: shape.id % 2 === 0 ? '50%' : '10%', // mix circles and squares
                        zIndex: 0
                    }}
                />
            ))}

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '24px',
                    zIndex: 1
                }}
            >
                {/* Logo with pulsing effect */}
                <Box sx={{ position: 'relative', width: 120, height: 120 }}>
                    {/* Outer glowing rings */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            border: '2px dashed var(--highlightText)',
                            borderRadius: '50%',
                            opacity: 0.5
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    />
                    <motion.div
                        style={{
                            position: 'absolute',
                            width: '120%',
                            height: '120%',
                            top: '-10%',
                            left: '-10%',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '50%',
                        }}
                        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    />
                    
                    <Avatar
                        src={process.env.PUBLIC_URL + '/LOGO.jpeg'}
                        alt="Logo"
                        sx={{
                            width: '100%',
                            height: '100%',
                            border: '3px solid var(--highlightText)',
                            boxShadow: '0 0 30px rgba(241, 109, 21, 0.4)',
                        }}
                    />
                </Box>
                
                {/* Techy typing text */}
                <Typography sx={{ fontFamily: "'Inter', monospace", letterSpacing: 4, fontWeight: 500 }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        LOADING ASSETS 
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
