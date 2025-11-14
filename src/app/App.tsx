import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {useState, useEffect, lazy, Suspense} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Toaster } from 'react-hot-toast';

import type { Transition } from "framer-motion";

// Lazy load all components
const WelcomeSplash = lazy(() => import('../components/WelcomeSplash'));
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const SkillsPage = lazy(() => import('../pages/SkillsPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage'));
const BlogPostPage = lazy(() => import('../pages/BlogPage/BlogPostPage'));

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
    ease: "easeInOut",
    duration: 0.5
};
const LoadingFallback = () => (
    <Box className="app-loading-fallback">
        <CircularProgress size={40} />
    </Box>
);

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
        <>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: 'var(--background-tertiary)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-primary)',
                    },
                }}
            />
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <Suspense fallback={<LoadingFallback />}>
                        <WelcomeSplash key="splash" />
                    </Suspense>
                ) : (
                    <Suspense fallback={<LoadingFallback />}>
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
                    </Suspense>
                )}
            </AnimatePresence>
        </>
    );
}

export default App;