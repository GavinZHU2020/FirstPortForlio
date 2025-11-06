import './AboutPage.css';
import yourProfileImage from '../../assets/wenkai.jpg';
import PageHeader from '../../components/PageHeader';
import Container from '@mui/material/Container'; // MUI container
import { motion } from 'framer-motion'; // Animation
import { fadeInUp } from '../../utils/animation'; // Animation variants

const csImages = [
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

];

const AboutPage = () => {
    return (
        <Container maxWidth="lg" sx={{ paddingY: '3rem' }}>

            <PageHeader
                title="About Me"
                intro="Software Engineer | Lifelong Learner"
            />

            {/* Animate content */}
            <motion.div
                className="about-page-content"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <div className="about-left-panel">
                    <img src={yourProfileImage} alt="WENKAI ZHU" className="about-page-photo" />

                    <div className="about-text-body">
                        <p>
                            Wenkai Zhu is a student studying Software Engineering at the University of Limerick, currently working on his software evolution assignment. This is his Assignment 1.
                        </p>
                        <div className="about-subsection">
                            <h4>My Philosophy</h4>
                            <p>
                                Right now I'm diving deep into software evolution patterns and how to build
                                systems that stand the test of time. This assignment is helping me explore
                                those concepts hands-on.
                            </p>
                        </div>
                        <div className="about-subsection">
                            <h4>Education</h4>
                            <p>
                                <strong>MSc in Software Engineering</strong><br />
                                University of Limerick, 2025 - 2026
                            </p>
                        </div>
                        
                        {[...Array(5)].map((_, i) => (
                            <div className="about-subsection" key={i}>
                                <h4>Item {i + 1}</h4>
                                <p>Item content</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="about-right-panel">
                    {csImages.map((src, index) => (
                        <img key={index} src={src} alt={`Computer Science ${index + 1}`} />
                    ))}
                </div>
            </motion.div>
        </Container>
    );
};

export default AboutPage;