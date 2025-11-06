import { useState } from 'react';
import './SkillsPage.css';
import "../ProjectsPage/ProjectsPage.css"; // Keep for .main-layout-container styles
import PageHeader from "../../components/PageHeader";
import { skillsData } from '../../data/skills';
import Container from '@mui/material/Container'; // MUI container
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animation';

const SkillsPage = () => {
    const [activeSkill, setActiveSkill] = useState(skillsData[0]);

    return (
        <Container maxWidth="lg" sx={{ paddingY: '3rem' }}>
            <PageHeader
                title={"Skills"}
                intro={"Technologies I'm currently working with and learning."}
            />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="main-layout-container"
            >
                <motion.main
                    className="main-content skills-container"
                    variants={fadeInUp} // Animate children
                >
                    <div className="skills-display-area">
                        <h2>{activeSkill.name}</h2>
                        <p>{activeSkill.description}</p>
                    </div>
                </motion.main>

                <motion.aside
                    className="sidebar-sticky"
                    variants={fadeInUp} // Animate children
                >
                    <div className="sidebar-widget">
                        <h4>My Tech Stack</h4>
                        <div className="skills-nav">
                            {skillsData.map(skill => (
                                <button
                                    key={skill.id}
                                    className={`skill-tab ${activeSkill.id === skill.id ? 'active' : ''}`}
                                    onClick={() => setActiveSkill(skill)}
                                >
                                    {skill.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.aside>
            </motion.div>
        </Container>
    );
};
export default SkillsPage;