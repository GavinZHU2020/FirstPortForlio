/**
 * ProjectsPage Component
 * Displays a list of projects fetched from a local JSON file.
 * Features:
 * - Search functionality to filter projects by title or description.
 * - Category buttons to filter projects by technology stack.
 * - Responsive grid layout using Framer Motion for animations.
 * @returns {JSX.Element} The rendered Projects page.
 */
import { useState, useMemo, useEffect } from 'react';
import './ProjectsPage.css';
import PageHeader from '../../components/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animation';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import type { Project } from '../../types';

const ProjectsPage = () => {
    // State for data fetching
    const [projectsData, setProjectsData] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // State for filtering
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTech, setSelectedTech] = useState('All');

    // Fetch data on component mount
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${import.meta.env.BASE_URL}data/projects.json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Project[] = await response.json();
                setProjectsData(data);
            } catch (e) {
                setError('Failed to fetch projects.');
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const allTechs = useMemo(() => {
        if (projectsData.length === 0) return ['All'];
        return ['All', ...Array.from(new Set(projectsData.flatMap(p => p.techStack)))];
    }, [projectsData]);

    const filteredProjects = useMemo(() => {
        return projectsData.filter(project => {
            const matchesSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesTech =
                selectedTech === 'All' ||
                project.techStack.includes(selectedTech);

            return matchesSearch && matchesTech;
        });
    }, [projectsData, searchQuery, selectedTech]);

    const renderContent = () => {
        if (loading) {
            return <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}><CircularProgress /></Box>;
        }

        if (error) {
            return <Box sx={{ textAlign: 'center', my: 5, color: 'red' }}>{error}</Box>;
        }

        return (
            <AnimatePresence mode='popLayout'>
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            className="project-card-full"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, scale: 0.9 }}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech-stack">
                                {project.techStack.map(tech => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.inProgress ? (
                                    <a href="#" className="project-link disabled" onClick={e => e.preventDefault()}>In Progress</a>
                                ) : (
                                    <>
                                        {project.liveLink && (
                                            <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                                Live Demo
                                            </a>
                                        )}
                                        {project.repoLink && (
                                            <a href={project.repoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                                Source Code
                                            </a>
                                        )}
                                    </>
                                )}
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <motion.p variants={fadeInUp}>No projects found matching your criteria.</motion.p>
                )}
            </AnimatePresence>
        );
    };

    return (
        <Container maxWidth="lg" className="projects-page-container">
            <PageHeader
                title="Projects"
                intro="Here are some of the projects I've worked on..."
            />

            <Box className="projects-filter-bar">
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center" justifyContent="space-between">
                    <TextField
                        label="Search Projects..."
                        variant="outlined"
                        size="small"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="projects-search-field"
                        disabled={loading || !!error}
                    />
                    <Stack direction="row" spacing={1} className="projects-tech-filters">
                        {allTechs.map(tech => (
                            <Button
                                key={tech}
                                variant={selectedTech === tech ? "contained" : "outlined"}
                                onClick={() => setSelectedTech(tech)}
                                size="small"
                                className="projects-tech-filter-button"
                                disabled={loading || !!error}
                            >
                                {tech}
                            </Button>
                        ))}
                    </Stack>
                </Stack>
            </Box>

            <div className="main-layout-container">
                <motion.main
                    className="main-content"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {renderContent()}
                </motion.main>

                <motion.aside
                    className="sidebar-sticky"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                >
                    <div className="sidebar-widget">
                        <h4>Core Technologies</h4>
                        <ul className="sidebar-list">
                            <li>React & TypeScript</li>
                            <li>HTML5 & CSS3</li>
                            <li>Node.js</li>
                            <li>Agile & Scrum</li>
                            <li>Git Version Control</li>
                        </ul>
                    </div>
                    <div className="sidebar-widget">
                        <h4>Design Principles</h4>
                        <ul className="sidebar-list">
                            <li>Responsive Layouts</li>
                            <li>Clean Code</li>
                            <li>User-Centric Design</li>
                        </ul>
                    </div>
                </motion.aside>
            </div>
        </Container>
    );
};

export default ProjectsPage;