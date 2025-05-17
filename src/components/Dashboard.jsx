import * as React from 'react'
import { Box } from '@mui/material'

// importing resources
import '../resources/css/dashboard.css'
import '../resources/css/shared.css'

// importing components
import Projects from './Projects'
import Home from './Home'
import { useEffect } from 'react'

export default function Dashboard() {
    useEffect(() => {
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
        <Box className="HomeContainer">
            <Box component="main" sx={{ flexGrow: 1 }}>
                <div className="MainComponent">
                    <Home />
                    <Projects />
                </div>
            </Box>
        </Box>
    )
}
