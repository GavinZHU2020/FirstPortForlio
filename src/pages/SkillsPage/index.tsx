/**
 * SkillsPage Component
 * Fetches and displays a list of skills from a local JSON file.
 * Features:
 * - Fetches skill data from `data/skills.json`.
 * - An interactive sidebar to select a skill.
 * - A main content area that displays the description of the selected skill.
 * - Framer Motion for animations.
 * @returns {JSX.Element} The rendered Skills page.
 */
import { useState, useEffect } from 'react';
import './SkillsPage.css';
import PageHeader from "../../components/PageHeader";
import Container from '@mui/material/Container';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animation';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface Skill {
    id: string;
    name: string;
    description: string;
}

const SkillsPage = () => {
    const [skillsData, setSkillsData] = useState<Skill[]>([]);
    const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                setLoading(true);

                const response = await fetch(`${import.meta.env.BASE_URL}data/skills.json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Skill[] = await response.json();
                setSkillsData(data);
                if (data.length > 0) {
                    setActiveSkill(data[0]); // Set initial active skill
                }
            } catch (e) {
                setError('Failed to fetch skills.');
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchSkills();
    }, []);

    const renderContent = () => {
        if (loading) {
            return <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}><CircularProgress /></Box>;
        }

        if (error) {
            return <Box sx={{ textAlign: 'center', my: 5, color: 'red' }}>{error}</Box>;
        }

        if (!activeSkill) {
            return <p>No skills to display.</p>;
        }

        return (
            <>
                <motion.main
                    className="main-content skills-container"
                    variants={fadeInUp}
                >
                    <div className="skills-display-area">
                        {/* Use a key to force re-render on activeSkill change for animation */}
                        <motion.div key={activeSkill.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                            <h2>{activeSkill.name}</h2>
                            <p>{activeSkill.description}</p>
                        </motion.div>
                    </div>
                </motion.main>

                <motion.aside
                    className="sidebar-sticky"
                    variants={fadeInUp}
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
            </>
        );
    };

    return (
        <Container maxWidth="lg" className="skills-page-container">
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
                {renderContent()}
            </motion.div>
        </Container>
    );
};
export default SkillsPage;