import { Avatar, Button, Typography } from '@mui/material'
import React from 'react'
import Typewriter from 'typewriter-effect'
import '../resources/css/home.css'
import { IntrestedSubjects, userProfileDefaultData } from '../Utils/Constants'
import { Download } from '@mui/icons-material'

export default function Home() {
    const userName = userProfileDefaultData.Name
    const userImage = userProfileDefaultData.Photo
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = `${process.env.PUBLIC_URL}/Karthikeya_Bhamidipati_Resume.pdf`
        link.download = 'Karthikeya_Bhamidipati_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
    return (
        <div className="hero">
            <div className="heroText">
                <Typography
                    variant="h5"
                    sx={{ fontSize: { xs: '1rem', sm: '3rem' } }}
                >
                    HEY,
                </Typography>
                <Typography
                    variant="h4"
                    sx={{ fontSize: { xs: '1.5rem', sm: '4rem' } }}
                >
                    I AM
                </Typography>
                <Typography
                    className="name"
                    variant="h3"
                    sx={{ fontSize: { xs: '2rem', sm: '5rem' } }}
                >
                    {userName.toUpperCase()}
                </Typography>
                <Typography
                    variant="h5"
                    sx={{ fontSize: { xs: '1rem', sm: '2.5rem' } }}
                >
                    {'AND I AM INTO '}
                    <div className="type-text">
                        <Typewriter
                            options={{
                                cursor: '_',
                                className: 'typed-text',
                                deleteSpeed: 50,
                                loop: true,
                                strings: IntrestedSubjects,
                                autoStart: true,
                            }}
                        />
                    </div>
                </Typography>
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<Download />}
                    sx={{
                        backgroundColor: 'var(--highlightText)',
                        color: 'black',
                        fontWeight: 'bold',
                        marginTop: '1rem',
                        fontSize: { xs: '0.8rem', sm: '1rem' },
                    }}
                    onClick={handleDownload}
                >
                    Download Resume
                </Button>
            </div>
            <Avatar
                alt={userName}
                src={userImage}
                sx={{
                    alignSelf: 'center',
                    border: '3px solid var(--highlightText)',
                    height: { xs: '15vh', sm: '40vh' },
                    width: { xs: '15vh', sm: '40vh' },
                }}
            />
        </div>
    )
}
