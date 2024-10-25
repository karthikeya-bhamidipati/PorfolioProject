import { AvatarGroup, Avatar } from '@mui/material'
import { Icon } from '@iconify/react'
import AspectRatio from '@mui/joy/AspectRatio'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Typography from '@mui/joy/Typography'
import '../resources/css/projects.css'

import { PROJECTS_DATA } from '../Utils/Constants'
import { Link } from '@mui/joy'

export default function Projects() {
    return (
        <div
            style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                height: '100%',
            }}
        >
            {PROJECTS_DATA.map((data, index) => (
                <Card
                    key={index}
                    variant="outlined"
                    sx={{
                        backgroundColor: 'rgb(256,256,256,0.52)',
                        backdropFilter: 'blur(5px)',
                        width: 320,
                        height: 350,
                        position: 'relative',
                        overflow: 'hidden',
                        transition:
                            'scale 0.5s ease-in-out, backgroundColor 0.5s ease-in-out',
                        '&:hover': {
                            zIndex: 1000,
                            scale: 1.2,
                            backgroundColor: 'rgb(256,256,256)',
                            '&.desc': {
                                fontWeight: 'bold',
                            },
                        },
                    }}
                >
                    <CardOverflow>
                        <AspectRatio ratio="2">
                            <img
                                src={data.image}
                                alt=""
                                style={{
                                    borderRadius: '8px 8px 0 0',
                                }}
                            />
                        </AspectRatio>
                        <AvatarGroup
                            sx={{
                                flexDirection: 'row',
                                '--AvatarGroup-gap': '-16px',
                                position: 'absolute',
                                zIndex: 2,
                                right: 2,
                                bottom: 2,
                                transform: 'translateY(50%)',
                                '& .MuiAvatar-root': {
                                    border: '.2px solid white',
                                    boxShadow: '0 2px 5px rgb(0, 0, 0)',
                                },
                            }}
                        >
                            {data.avatar.map((icon, ind) => (
                                <Avatar
                                    key={ind}
                                    sx={{ backgroundColor: 'white' }}
                                >
                                    <Icon
                                        icon={icon}
                                        style={{ fontSize: '30px' }}
                                    />
                                </Avatar>
                            ))}
                        </AvatarGroup>
                    </CardOverflow>
                    <CardContent>
                        <Typography
                            level="title-md"
                            sx={{ fontWeight: 'bold', mb: 1 }}
                        >
                            {data.name}
                        </Typography>
                        <Typography
                            level="body-sm"
                            color="text.secondary"
                            sx={{ display: 'flex', gap: 1 }}
                        >
                            {data.links.map((dt, inde) => (
                                <Link
                                    key={inde}
                                    href={dt.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontWeight: 'bold',
                                        textDecoration: 'none',
                                        color: 'var(--highlightText)',
                                    }}
                                >
                                    {dt.name}
                                </Link>
                            ))}
                        </Typography>
                        <Typography
                            level="body-sm"
                            className="desc"
                            sx={{
                                color: 'black',
                                maxHeight: '55%',
                                overflowY: 'auto',
                                '&::-webkit-scrollbar': {
                                    width: '0.2rem',
                                    '&-thumb': {
                                        backgroundColor: 'var(--highlightText)',
                                        width: '0.1rem',
                                        borderRadius: '1rem',
                                    },
                                },
                            }}
                        >
                            {data.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
