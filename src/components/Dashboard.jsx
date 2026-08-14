import React, { useEffect } from 'react';
import { Box } from '@mui/material';

// importing components
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Leadership from './Leadership';

export default function Dashboard() {
    useEffect(() => {
        // Keeping original reload logic just in case it's needed
        sessionStorage.setItem('isPageReloaded', 'false')

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                const isReloading = sessionStorage.getItem('isPageReloaded')
                if (isReloading === 'false') {
                    localStorage.clear()
                }
            }
        }

        const handleBeforeUnload = () => {
            sessionStorage.setItem('isPageReloaded', 'true')
        }

        document.addEventListener('visibilitychange', handleVisibilityChange)
        window.addEventListener('beforeunload', handleBeforeUnload)

        return () => {
            document.removeEventListener(
                'visibilitychange',
                handleVisibilityChange
            )
            window.removeEventListener('beforeunload', handleBeforeUnload)
        }
    }, [])

    return (
        <Box sx={{ width: '100%', minHeight: '100vh' }}>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Leadership />
            
            <Box component="footer" sx={{ py: 4, textAlign: 'center', borderTop: '1px solid var(--glass-border)', backgroundColor: 'var(--glass-bg)', backdropFilter: 'blur(10px)' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Karthikeya Bhamidipati. Built with React & Framer Motion.
                </p>
            </Box>
        </Box>
    );
}
