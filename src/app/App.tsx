import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';


import type { Transition } from "framer-motion";
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import SkillsPage from '../pages/SkillsPage';
import ContactPage from '../pages/ContactPage';
import BlogPage from '../pages/BlogPage';
import GalleryPage from '../pages/GalleryPage';

import WelcomeSplash from '../components/WelcomeSplash';

import BlogPostPage from '../pages/BlogPage/BlogPostPage';

const pageVariants = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    }
};

const pageTransition: Transition = {
    type: "tween",
    ease: "easeInOut", // A smoother ease for fade
    duration: 0.5
};

function App() {
    const location = useLocation();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 900);


        return () => clearTimeout(timer);
    }, []);

    return (

        <AnimatePresence mode="wait">
            {isLoading ? (
                <WelcomeSplash key="splash" />
            ) : (

                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <HomePage />
                        </motion.div>
                    } />
                    <Route path="/about" element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <AboutPage />
                        </motion.div>
                    } />
                    <Route path="/projects" element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <ProjectsPage />
                        </motion.div>
                    } />
                    <Route path="/skills" element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <SkillsPage />
                        </motion.div>
                    } />
                    <Route path="/contact" element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <ContactPage />
                        </motion.div>
                    } />
                    <Route path="/blog" element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <BlogPage />
                        </motion.div>
                    } />
                    <Route path="/blog/:slug" element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <BlogPostPage />
                        </motion.div>
                    } />
                    <Route path="/gallery" element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <GalleryPage />
                        </motion.div>
                    } />
                </Routes>
            )}
        </AnimatePresence>
    );
}

export default App;