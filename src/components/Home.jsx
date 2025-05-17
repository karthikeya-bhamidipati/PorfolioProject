import { Avatar, Box, Button, Link, Typography } from '@mui/material'
import Typewriter from 'typewriter-effect'
import {
    IntrestedSubjects,
    SOCIAL_PROFILES,
    userProfileDefaultData,
} from '../Utils/Constants'
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
        <Box
            component="section"
            sx={{
                width: '100%',
                minHeight: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: { xs: 4, md: 8 },
                    width: '100%',
                }}
            >
                <Avatar
                    alt={userName}
                    src={userImage}
                    sx={{
                        width: { xs: 120, sm: 200, md: 300 },
                        height: { xs: 120, sm: 200, md: 300 },
                        border: '4px solid var(--highlightText)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' },
                        gap: 2,
                        color: 'white',
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ fontSize: { xs: 22, sm: 30, md: 38 } }}
                    >
                        HEY,
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ fontSize: { xs: 22, sm: 30, md: 38 } }}
                    >
                        I AM
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 28, sm: 38, md: 48 },
                            color: 'var(--highlightText)',
                            fontWeight: 'bold',
                        }}
                    >
                        {userName.toUpperCase()}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ fontSize: { xs: 18, sm: 26, md: 32 } }}
                    >
                        AND I AM INTO{' '}
                        <Box
                            component="span"
                            sx={{
                                color: 'var(--highlightText)',
                                fontWeight: 500,
                            }}
                        >
                            <Typewriter
                                options={{
                                    cursor: '_',
                                    deleteSpeed: 50,
                                    loop: true,
                                    strings: IntrestedSubjects,
                                    autoStart: true,
                                }}
                            />
                        </Box>
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<Download />}
                        onClick={handleDownload}
                        sx={{
                            mt: 2,
                            backgroundColor: 'var(--highlightText)',
                            color: '#000',
                            fontWeight: 'bold',
                            px: 3,
                            py: 1,
                            fontSize: { xs: 14, sm: 16 },
                            '&:hover': {
                                backgroundColor: '#ffa726',
                            },
                        }}
                    >
                        Download Resume
                    </Button>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: '1rem', md: '3rem' },
                        }}
                    >
                        {SOCIAL_PROFILES.map((data, index) => (
                            <Link
                                rel="noopener noreferrer"
                                target="_blank"
                                style={{ textDecoration: 'none' }}
                                href={data.link}
                            >
                                <Box
                                    sx={{
                                        fontSize: { xs: '2rem', md: '3rem' },
                                        color: 'rgb(241, 109, 21)',
                                    }}
                                >
                                    {data.icon}
                                </Box>
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
