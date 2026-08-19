import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Dashboard from './components/Dashboard'
import Loader from './components/Loader'
import { projects, education, personal_information } from './Utils/masterData'

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const preloadImages = async () => {
            const imageUrls = [
                personal_information.photo,
                ...projects.map((p) => p.image).filter(Boolean),
                ...education.map((e) => e.logo).filter(Boolean),
                process.env.PUBLIC_URL + '/LOGO.jpeg'
            ];

            const promises = imageUrls.map((src) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = resolve; // don't block forever if one image fails
                });
            });

            // Minimum 1.5 seconds loading screen time for aesthetic purposes
            const minimumDelay = new Promise(resolve => setTimeout(resolve, 1500));
            
            await Promise.all([...promises, minimumDelay]);
            setLoading(false);
        };

        preloadImages();
    }, [])

    return (
        <Router>
            <AnimatePresence>
                {loading ? (
                    <motion.div
                        key="loader"
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Loader />
                    </motion.div>
                ) : (
                    <motion.div
                        key="app"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Dashboard />
                    </motion.div>
                )}
            </AnimatePresence>
        </Router>
    )
}

export default App
