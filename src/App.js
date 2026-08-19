import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Dashboard from './components/Dashboard'
import Loader from './components/Loader'

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Show loader for 1.5 seconds
        const timer = setTimeout(() => setLoading(false), 1500)
        return () => clearTimeout(timer)
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
