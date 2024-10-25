import React from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
} from '@mui/lab'
import { Eduction } from '../Utils/Constants'
import { Avatar, Typography } from '@mui/material'
import '../resources/css/academics.css'

export default function Academics() {
    return (
        <>
            <Typography variant="h2" className="main-head">
                ACADEMICS
            </Typography>
            <div className="academics-box">
                <Timeline position="alternate">
                    {Eduction.map((data, index) => (
                        <TimelineItem
                            key={index}
                            className="timeline-item"
                            sx={{
                                '&:hover': {
                                    scale: '1.2',
                                    transform:
                                        index % 2 !== 0
                                            ? 'translate(100px)'
                                            : 'translate(-100px)',
                                },
                            }}
                        >
                            <TimelineSeparator>
                                <TimelineDot>
                                    <Avatar
                                        src={data.logo}
                                        sx={{
                                            width: '4rem',
                                            height: '4rem',
                                            border: 'none',
                                        }}
                                    />
                                </TimelineDot>
                                {index < Eduction.length - 1 && (
                                    <TimelineConnector />
                                )}
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="eduText">
                                    <Typography
                                        variant="h4"
                                        className="sub-head-main"
                                    >
                                        {data.title}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        className="sub-head-sub"
                                    >
                                        {data.school}
                                    </Typography>
                                    <div
                                        className="description"
                                        style={{
                                            float: index % 2 ? 'right' : 'none',
                                        }}
                                    >
                                        {data.description}
                                    </div>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </>
    )
}
