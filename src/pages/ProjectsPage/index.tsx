import './ProjectsPage.css';
import PageHeader from '../../components/PageHeader';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animation'; // Animation variants
import Container from '@mui/material/Container'; // MUI container

const ProjectsPage = () => {
    return (
        <Container maxWidth="lg" sx={{ paddingY: '3rem' }}>

            <PageHeader
                title="Projects"
                intro="Here are some of the projects I've worked on..."
            />

            <div className="main-layout-container">

                <motion.main
                    className="main-content"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >

                    <motion.div
                        className="project-card-full"
                        variants={fadeInUp}
                    >
                        <h3>First Portfolio</h3>
                        <p>This is my first assignment, which consists of several pages including my profile, my project portfolio, my contact information, and more.</p>
                        <div className="project-tech-stack">
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>CSS Flexbox</span>
                        </div>
                        <div className="project-links">
                            <a
                                href="https://gavinzhu2020.github.io/FirstPortForlio/"
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                            </a>
                            <a
                                href="https://github.com/GavinZHU2020/FirstPortForlio"
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Source Code
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="project-card-full"
                        variants={fadeInUp}
                    >
                        <h3>Project2</h3>
                        <p>This is my project2, including my requirements analysis, code, packages, readme, and more.</p>
                        <div className="project-tech-stack">
                            <span>Node.js</span>
                            <span>Express</span>
                            <span>MongoDB</span>
                        </div>
                        <div className="project-links">
                            <a href="#" className="project-link disabled">In Progress</a>
                        </div>
                    </motion.div>

                </motion.main>

                {/* Animate sidebar */}
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