import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, InputBase } from '@mui/material';
import { personal_information, skills_and_certifications, IntrestedSubjects } from '../Utils/masterData';
import TerminalIcon from '@mui/icons-material/Terminal';

export default function Terminal() {
    const [history, setHistory] = useState([
        { 
            cmd: '', 
            output: (
                <Typography sx={{ color: 'var(--highlightText)', mb: 1, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem' }}>
                    Welcome to Karthikeya's Interactive Terminal v1.0.0
                    <br/>
                    Type 'help' to see available commands.
                </Typography>
            )
        }
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    useEffect(() => {
        // Only scroll the terminal container, not the entire page!
        if (bottomRef.current && bottomRef.current.parentNode) {
            bottomRef.current.parentNode.scrollTop = bottomRef.current.parentNode.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            let output = null;

            if (cmd === 'help') {
                output = (
                    <Box sx={{ pl: 2, color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem' }}>
                        <div>help    - show this message</div>
                        <div>whoami  - basic details about me</div>
                        <div>skills  - list my technical skills</div>
                        <div>goals   - show what fields I'm interested in</div>
                        <div>clear   - clear terminal output</div>
                        <div>sudo    - super user do (Easter egg)</div>
                    </Box>
                );
            } else if (cmd === 'whoami') {
                output = (
                    <Box sx={{ pl: 2, color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem' }}>
                        <div>Name: {personal_information.name}</div>
                        <div>Email: {personal_information.email}</div>
                        <div>Phone: {personal_information.phone}</div>
                        <div>LinkedIn: {personal_information.linkedin}</div>
                    </Box>
                );
            } else if (cmd === 'skills') {
                output = (
                    <Box sx={{ pl: 2, color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem' }}>
                        {Object.entries(skills_and_certifications.skills).map(([cat, skills]) => (
                            <div key={cat}><span style={{color: 'var(--highlightText)'}}>{cat}:</span> {skills.join(', ')}</div>
                        ))}
                    </Box>
                );
            } else if (cmd === 'goals') {
                output = (
                    <Box sx={{ pl: 2, color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem' }}>
                        <div>Analyzing target fields... Done.</div>
                        <br/>
                        <div>Current Focus Areas:</div>
                        {IntrestedSubjects.map((s, i) => (
                            <div key={i}>- {s}</div>
                        ))}
                        <br/>
                        <div>Status: Actively learning and building projects in these domains.</div>
                    </Box>
                );
            } else if (cmd === 'clear') {
                setHistory([]);
                setInput('');
                return;
            } else if (cmd === 'sudo' || cmd.startsWith('sudo ')) {
                output = (
                    <Box sx={{ color: 'var(--highlightText)', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem' }}>
                        <div>[=================================={'>'}] 100%</div>
                        <div>Security overridden. Root access granted.</div>
                        <br/>
                        <div>Fetching highly classified project files... ERROR!</div>
                        <div>System detects you are an awesome recruiter/collaborator.</div>
                        <div>To unlock the hidden files, please email me directly or connect on LinkedIn!</div>
                    </Box>
                );
            } else if (cmd === '') {
                output = null;
            } else {
                output = (
                    <Box sx={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem' }}>
                        Command not found: {cmd}. Type 'help' for a list of commands.
                    </Box>
                );
            }

            setHistory(prev => [...prev, { cmd, output }]);
            setInput('');
        }
    };

    return (
        <Box
            sx={{
                width: '100%',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--glass-border)',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                height: 400
            }}
        >
            {/* Terminal Header */}
            <Box sx={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                p: 1.5, 
                display: 'flex', 
                alignItems: 'center', 
                borderBottom: '1px solid var(--glass-border)' 
            }}>
                <Box sx={{ display: 'flex', gap: 1, ml: 1 }}>
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                    <TerminalIcon sx={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }} />
                    <Typography sx={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                        guest@karthikeya:~
                    </Typography>
                </Box>
            </Box>

            {/* Terminal Body */}
            <Box sx={{ 
                p: 3, 
                flex: 1,
                overflowY: 'auto',
                fontFamily: "'Inter', sans-serif",
                '&::-webkit-scrollbar': { width: '6px' },
                '&::-webkit-scrollbar-track': { background: 'transparent' },
                '&::-webkit-scrollbar-thumb': { background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }
            }}>
                {history.map((entry, i) => (
                    <Box key={i} sx={{ mb: 2 }}>
                        {entry.cmd && (
                            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                                <Typography sx={{ color: '#27c93f', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.95rem' }}>guest@karthikeya:~$</Typography>
                                <Typography sx={{ color: 'var(--text-primary)', fontFamily: 'inherit', fontSize: '0.95rem' }}>{entry.cmd}</Typography>
                            </Box>
                        )}
                        {entry.output}
                    </Box>
                ))}
                
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Typography sx={{ color: '#27c93f', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.95rem' }}>guest@karthikeya:~$</Typography>
                    <InputBase
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        sx={{ 
                            color: 'var(--text-primary)', 
                            flex: 1, 
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.95rem',
                            '& input': { p: 0 }
                        }}
                    />
                </Box>
                <div ref={bottomRef} />
            </Box>
        </Box>
    );
}
