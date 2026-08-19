import React from 'react'
import { Box, Typography, Button, Avatar, Link } from '@mui/material'
import { Download } from '@mui/icons-material'
import Typewriter from 'typewriter-effect'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'
import { personal_information, IntrestedSubjects } from '../Utils/masterData'
import {
    FacebookRounded,
    GitHub,
    Instagram,
    LinkedIn,
    Mail,
} from '@mui/icons-material'

const SOCIAL_LINKS = [
    {
        icon: <Instagram fontSize="inherit" />,
        link: 'https://www.instagram.com/karthikeya_bhamidipati/',
    },
    {
        icon: <FacebookRounded fontSize="inherit" />,
        link: 'https://www.facebook.com/karthikeya.bhamidipati.005/',
    },
    {
        icon: <LinkedIn fontSize="inherit" />,
        link: personal_information.linkedin,
    },
    { icon: <GitHub fontSize="inherit" />, link: personal_information.github },
    {
        icon: <Mail fontSize="inherit" />,
        link: `mailto:${personal_information.email}`,
    },
]

export default function Hero() {
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = `${process.env.PUBLIC_URL}/Karthikeya_Bhamidipati_Resume.pdf`
        link.download = 'Karthikeya_Bhamidipati_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Box
            id="hero"
            component="section"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: { xs: 2, md: 8 },
                pt: { xs: 12, md: 10 },
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: { xs: 8, md: 20 },
                    width: '100%',
                    maxWidth: 1200,
                }}
            >
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' },
                        gap: 2,
                        flex: 1,
                        width: '100%',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'var(--text-secondary)',
                            fontWeight: 500,
                            letterSpacing: 3,
                            fontSize: { xs: '1.2rem', md: '1.5rem' },
                        }}
                    >
                        HELLO THERE, I AM
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: {
                                xs: '2.2rem',
                                sm: '3.5rem',
                                md: '4.5rem',
                            },
                            fontWeight: 800,
                            lineHeight: 1.1,
                            background:
                                'linear-gradient(45deg, #fff, var(--highlightText))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {personal_information.name}
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            color: 'var(--text-secondary)',
                            fontWeight: 500,
                            letterSpacing: 3,
                            fontSize: { xs: '1.2rem', md: '1.5rem' },
                        }}
                    >
                        AND I AM INTO
                        <Box
                            component="span"
                            sx={{
                                color: 'var(--highlightText)',
                                fontWeight: 600,
                                whiteSpace: 'nowrap',
                                display: 'inline-block',
                                width: {
                                    xs: '250px',
                                    sm: '350px',
                                    md: '500px',
                                }, // Strict fixed width prevents layout shift when typing long words
                                textAlign: 'left',
                                ml: 1 // Add a tiny margin between "INTO" and the typewriter text
                            }}
                        >
                            <Typewriter
                                options={{
                                    strings: IntrestedSubjects,
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 80,
                                }}
                            />
                        </Box>
                    </Typography>

                    <Button
                        variant="contained"
                        startIcon={<Download />}
                        onClick={handleDownload}
                        sx={{
                            mt: 3,
                            backgroundColor: 'var(--highlightText)',
                            color: '#fff',
                            fontWeight: 600,
                            borderRadius: '30px',
                            px: 4,
                            py: 1.5,
                            textTransform: 'none',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            boxShadow: '0 8px 20px rgba(241, 109, 21, 0.3)',
                            transition: 'all 0.3s',
                            '&:hover': {
                                backgroundColor: '#d15d11',
                                transform: 'translateY(-3px)',
                                boxShadow:
                                    '0 12px 25px rgba(241, 109, 21, 0.4)',
                            },
                        }}
                    >
                        Download Resume
                    </Button>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: 2, md: 3 },
                            mt: { xs: 3, md: 4 },
                        }}
                    >
                        {SOCIAL_LINKS.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    fontSize: { xs: '1.8rem', md: '2rem' },
                                    color: 'var(--text-secondary)',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        color: 'var(--highlightText)',
                                        transform: 'translateY(-3px)',
                                    },
                                }}
                            >
                                {data.icon}
                            </Link>
                        ))}
                    </Box>
                </Box>

                <Box
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: { xs: 200, sm: 250, md: 400 },
                            height: { xs: 200, sm: 250, md: 400 },
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: '50%',
                                border: '2px solid var(--highlightText)',
                                filter: 'blur(10px)',
                                opacity: 0.5,
                            }}
                        />
                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} style={{ height: '100%' }}>
                        <Avatar
                            alt={personal_information.name}
                            src={personal_information.photo}
                            sx={{
                                width: '100%',
                                height: '100%',
                                border: '4px solid var(--highlightText)',
                                boxShadow: '0 0 30px rgba(241, 109, 21, 0.2)',
                            }}
                            />
                        </Tilt>
                    </Box>
                </Box>
            </Box>

            {/* Scroll Indicator Guider */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: { xs: 20, md: 40 },
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            >
                <Box
                    component={motion.div}
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: 'easeInOut',
                    }}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                        opacity: 0.7,
                    }}
                >
                <Typography
                    sx={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.8rem',
                        letterSpacing: 2,
                        textTransform: 'uppercase',
                    }}
                >
                    Scroll
                </Typography>
                <Box
                    sx={{
                        width: 24,
                        height: 40,
                        border: '2px solid var(--text-secondary)',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'center',
                        pt: 0.5,
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: 'easeInOut',
                        }}
                        style={{
                            width: 4,
                            height: 6,
                            backgroundColor: 'var(--highlightText)',
                            borderRadius: '2px',
                        }}
                    />
                </Box>
                </Box>
            </Box>
        </Box>
    )
}
