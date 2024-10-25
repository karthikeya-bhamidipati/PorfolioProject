import * as React from 'react'
import {
    Avatar,
    BottomNavigation,
    BottomNavigationAction,
    Box,
    styled,
} from '@mui/material'

// Constants imports
import { DEFAULT_SIDE_MENU, userProfileDefaultData } from '../Utils/Constants'

// Routing imports
import { Link, Route, Routes } from 'react-router-dom'

// importing resources
import '../resources/css/dashboard.css'
import '../resources/css/shared.css'
import LOGO from '../resources/images/LOGO.jpeg'

// importing components
import Academics from './Academics'
import Projects from './Projects'
import Profile from './Profile'
import Home from './Home'
import PageNotFound from './PageNotFound'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setActiveBottomNavigation } from '../redux/slices/navSlice'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    marginRight: '1vw',
    marginBottom: '1vh',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
}))

export default function Dashboard() {
    const dispatch = useDispatch()
    const ActiveBottomNavigation = useSelector(
        (state) => state.navigation.ActiveBottomNavigation
    )

    const handleChange = (event, newValue) => {
        dispatch(
            setActiveBottomNavigation({ ActiveBottomNavigation: newValue })
        )
    }

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                document.title = 'Come back!! 😢'.toUpperCase()
            } else {
                document.title = userProfileDefaultData.Name.toUpperCase()
            }
        }
        document.addEventListener('visibilitychange', handleVisibilityChange)
        return () => {
            document.removeEventListener(
                'visibilitychange',
                handleVisibilityChange
            )
        }
    }, [])

    useEffect(() => {
        // Store a session timestamp to detect reloads
        sessionStorage.setItem('isPageReloaded', 'false')

        const handleVisibilityChange = () => {
            // When the page is hidden (i.e., tab close), check the visibility state
            if (document.visibilityState === 'hidden') {
                // Check if the session flag is 'false', meaning it is not a reload
                const isReloading = sessionStorage.getItem('isPageReloaded')
                if (isReloading === 'false') {
                    localStorage.clear()
                }
            }
        }

        const handleBeforeUnload = () => {
            // Set the reload flag to 'true' if the page is about to be reloaded
            sessionStorage.setItem('isPageReloaded', 'true')
        }

        // Listen for the visibility change
        document.addEventListener('visibilitychange', handleVisibilityChange)

        // Listen for beforeunload to detect reloads
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
            <BottomNavigation
                sx={{
                    backgroundColor: 'rgb(256,256,256,0.52)',
                    backdropFilter: 'blur(10px)',
                    position: 'fixed',
                    bottom: 20,
                    overflow: 'hidden',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderRadius: '15px',
                    width: '16%',
                    zIndex: 1000,
                }}
                value={ActiveBottomNavigation}
                onChange={handleChange}
            >
                {DEFAULT_SIDE_MENU.map((item, index) => (
                    <BottomNavigationAction
                        sx={{
                            minWidth: 0,
                            overflow: 'hidden',
                            display: 'flex',
                            gap: 0,
                            '&:hover': {
                                color: 'var(--highlightText)',
                            },
                            transition: 'color 0.5s, scale:0.5s',
                            color:
                                ActiveBottomNavigation === item.title
                                    ? 'var(--highlightText)'
                                    : 'black',
                            '&.Mui-selected': {
                                scale: '1.2',
                                color: 'var(--highlightText)',
                            },
                        }}
                        key={index}
                        label={item.title}
                        value={item.title}
                        icon={item.icon}
                        component={Link}
                        to={item.link}
                    />
                ))}
            </BottomNavigation>
            <Box component="main" sx={{ flexGrow: 1 }}>
                <DrawerHeader>
                    <Avatar
                        alt="KB"
                        src={LOGO}
                        sx={{
                            border: '3px solid var(--highlightText)',
                            height: '3rem',
                            width: 'auto',
                            position: 'fixed',
                            top: 85,
                            right: 50,
                            zIndex: 1000,
                            transition: 'scale 0.5s',
                            '&:hover': {
                                scale: 1.2,
                            },
                        }}
                    />
                </DrawerHeader>
                <div className="MainComponent">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/social-profile" element={<Profile />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/academics" element={<Academics />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </div>
            </Box>
        </Box>
    )
}
