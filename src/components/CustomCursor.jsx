import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            const tag = e.target.tagName.toLowerCase();
            const isClickable = ['a', 'button', 'input', 'textarea', 'select'].includes(tag) || 
                                e.target.closest('a') || 
                                e.target.closest('button');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    border: '2px solid var(--highlightText)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
                animate={{
                    x: mousePosition.x - 15,
                    y: mousePosition.y - 15,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'var(--highlightText)' : 'transparent',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 800,
                    damping: 35,
                    mass: 0.1
                }}
            />
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: 'var(--highlightText)',
                    pointerEvents: 'none',
                    zIndex: 10000,
                }}
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 1500,
                    damping: 30,
                    mass: 0.05
                }}
            />
        </>
    );
}
