import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    // Bypassing React state for mouse position completely eliminates lag!
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    
    // Very tight spring physics
    const springConfigOuter = { damping: 25, stiffness: 800, mass: 0.1 };
    const springConfigInner = { damping: 20, stiffness: 1200, mass: 0.05 };
    
    const outerX = useSpring(cursorX, springConfigOuter);
    const outerY = useSpring(cursorY, springConfigOuter);
    const innerX = useSpring(cursorX, springConfigInner);
    const innerY = useSpring(cursorY, springConfigInner);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
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
    }, [cursorX, cursorY]);

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
                    mixBlendMode: 'difference',
                    x: outerX,
                    y: outerY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'var(--highlightText)' : 'transparent',
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
                    x: innerX,
                    y: innerY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </>
    );
}
