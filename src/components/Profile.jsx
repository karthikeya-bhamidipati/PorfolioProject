import React from 'react'
import { SOCIAL_PROFILES } from '../Utils/Constants'
import '../resources/css/profile.css'
import { Typography } from '@mui/material'
import AspectRatio from '@mui/joy/AspectRatio'
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'
import CardActions from '@mui/joy/CardActions'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import { Link } from '@mui/joy'

function Profile() {
    return (
        <div className="profiles">
            {SOCIAL_PROFILES.map((data, index) => (
                <Card
                    key={index}
                    data-resizable
                    sx={{
                        boxShadow: '5px 5px 5px rgba(255, 255, 255, 0.6)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        textAlign: 'center',
                        alignItems: 'center',
                        width: '30%',
                        maxWidth: '250px',
                        minHeight: '400px',
                        '--icon-size': '100px',
                        marginBottom: '20px',
                        backgroundColor: 'black',
                        color: 'white',
                    }}
                >
                    <CardOverflow variant="solid" color="warning">
                        <AspectRatio
                            variant="outlined"
                            color="warning"
                            ratio="1"
                            sx={{
                                m: 'auto',
                                transform: 'translateY(50%)',
                                borderRadius: '50%',
                                width: 'var(--icon-size)',
                                boxShadow: '1px 5px 15px var(--highlightText)',
                                bgcolor: 'black',
                                position: 'relative',
                            }}
                        >
                            <div className="social-icon">{data.icon}</div>
                        </AspectRatio>
                    </CardOverflow>
                    <Typography
                        level="title-lg"
                        sx={{ mt: 'calc(var(--icon-size) / 2)' }}
                    >
                        {data.username}
                    </Typography>
                    <CardContent
                        sx={{
                            maxWidth: '40ch',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: '100px',
                        }}
                    >
                        {data.tagLine}
                    </CardContent>
                    <CardActions
                        orientation="vertical"
                        buttonFlex={1}
                        sx={{
                            '--Button-radius': '40px',
                            width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
                        }}
                    >
                        <Link
                            className="social-links"
                            rel="noopener noreferrer"
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                            href={data.link}
                        >
                            <Button variant="solid" color="warning">
                                Connect
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Profile
