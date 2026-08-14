import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, InputBase } from '@mui/material';
import { motion } from 'framer-motion';
import { personal_information, skills_and_certifications, IntrestedSubjects } from '../Utils/masterData';
import TerminalIcon from '@mui/icons-material/Terminal';

export default function Terminal() {
    const [history, setHistory] = useState([
        { 
            cmd: '', 
            output: (
                <Typography sx={{ color: 'var(--highlightText)', mb: 1, fontFamily: '"Fira Code", monospace' }}>
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
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            let output = null;

            if (cmd === 'help') {
                output = (
                    <Box sx={{ pl: 2, color: 'var(--text-secondary)', fontFamily: '"Fira Code", monospace' }}>
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
                    <Box sx={{ pl: 2, color: 'var(--text-secondary)', fontFamily: '"Fira Code", monospace' }}>
                        <div>Name: {personal_information.name}</div>
                        <div>Email: {personal_information.email}</div>
                        <div>Phone: {personal_information.phone}</div>
                        <div>LinkedIn: {personal_information.linkedin}</div>
                    </Box>
                );
            } else if (cmd === 'skills') {
                output = (
                    <Box sx={{ pl: 2, color: 'var(--text-secondary)', fontFamily: '"Fira Code", monospace' }}>
                        {Object.entries(skills_and_certifications.skills).map(([cat, skills]) => (
                            <div key={cat}><span style={{color: 'var(--highlightText)'}}>{cat}:</span> {skills.join(', ')}</div>
                        ))}
                    </Box>
                );
            } else if (cmd === 'goals') {
                output = (
                    <Box sx={{ pl: 2, color: 'var(--text-secondary)', fontFamily: '"Fira Code", monospace' }}>
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
                    <Box sx={{ color: 'error.main', fontFamily: '"Fira Code", monospace' }}>
                        karthikeya is not in the sudoers file. This incident will be reported.
                    </Box>
                );
            } else if (cmd === '') {
                output = null;
            } else {
                output = (
                    <Box sx={{ color: 'var(--text-secondary)', fontFamily: '"Fira Code", monospace' }}>
                        Command not found: {cmd}. Type 'help' for a list of commands.
                    </Box>
                );
            }

            setHistory(prev => [...prev, { cmd, output }]);
            setInput('');
        }
    };

    return (
        <Box id="terminal" component="section" sx={{ padding: { xs: 3, md: 8 }, py: 6, display: 'flex', justifyContent: 'center' }}>
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                sx={{
                    width: '100%',
                    maxWidth: 900,
                    background: 'rgba(10, 10, 10, 0.85)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                }}
            >
                {/* Terminal Header */}
                <Box sx={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
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
                        <Typography sx={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: '"Fira Code", monospace' }}>
                            guest@karthikeya-portfolio:~
                        </Typography>
                    </Box>
                </Box>

                {/* Terminal Body */}
                <Box sx={{ 
                    p: 3, 
                    height: 400, 
                    overflowY: 'auto',
                    fontFamily: '"Fira Code", monospace',
                    '&::-webkit-scrollbar': { width: '8px' },
                    '&::-webkit-scrollbar-track': { background: 'transparent' },
                    '&::-webkit-scrollbar-thumb': { background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }
                }}>
                    {history.map((entry, i) => (
                        <Box key={i} sx={{ mb: 2 }}>
                            {entry.cmd && (
                                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                                    <Typography sx={{ color: '#27c93f', fontFamily: 'inherit', fontWeight: 600 }}>guest@karthikeya:~$</Typography>
                                    <Typography sx={{ color: 'var(--text-primary)', fontFamily: 'inherit' }}>{entry.cmd}</Typography>
                                </Box>
                            )}
                            {entry.output}
                        </Box>
                    ))}
                    
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <Typography sx={{ color: '#27c93f', fontFamily: '"Fira Code", monospace', fontWeight: 600 }}>guest@karthikeya:~$</Typography>
                        <InputBase
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleCommand}
                            sx={{ 
                                color: 'var(--text-primary)', 
                                flex: 1, 
                                fontFamily: '"Fira Code", monospace',
                                fontSize: '1rem',
                                '& input': { p: 0 }
                            }}
                        />
                    </Box>
                    <div ref={bottomRef} />
                </Box>
            </Box>
        </Box>
    );
}
