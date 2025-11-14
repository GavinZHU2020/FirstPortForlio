import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './WelcomeSplash.css';
import gsap from 'gsap';

const WelcomeSplash = () => {
    const textRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        /**
         * GSAP animation sequence for the welcome splash screen.
         * 1. Fades the background to a dark blue.
         * 2. Animates the welcome text (slides up, fades in, scales up).
         * 3. Fades out the entire splash screen after a delay.
         */
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(containerRef.current, {
            backgroundColor: '#0a192f',
            duration: 0.8
        })
            .fromTo(textRef.current,
                { y: 50, opacity: 0, scale: 0.8 },
                { y: 0, opacity: 1, scale: 1, duration: 1.2, delay: 0.2 },
                "<"
            )

            .to(containerRef.current, {
                opacity: 0,
                duration: 1.2,
                delay: 0.8,
                onComplete: () => {
                }
            });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <motion.div
            ref={containerRef}
            className="welcome-splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7 } }}
        >
            <motion.div
                ref={textRef}
                className="welcome-text"
            >
                Welcome to My Portfolio
            </motion.div>
        </motion.div>
    );
};

export default WelcomeSplash;