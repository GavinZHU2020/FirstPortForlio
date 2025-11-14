import { useEffect, useRef } from 'react';
import './AboutPage.css';
import PageHeader from '../../components/PageHeader';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/animation';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reactlogo from '../../assets/wenkai.jpg';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    "React.js", "TypeScript", "JavaScript (ES6+)",
    "HTML5 & CSS3", "Node.js", "Framer Motion",
    "GSAP Animation", "Git & GitHub", "Responsive Design",
    "Agile/Scrum", "UI/UX Principles", "REST APIs"
];

const AboutPage = () => {
    const imageRef = useRef<HTMLImageElement>(null);
    const textSectionRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(imageRef.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1, x: 0, duration: 1,
                    scrollTrigger: { trigger: imageRef.current, start: "top 80%" }
                }
            );

            gsap.fromTo(textSectionRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 1, delay: 0.2,
                    scrollTrigger: { trigger: textSectionRef.current, start: "top 80%" }
                }
            );

            gsap.to(marqueeRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: "linear"
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <Container maxWidth="lg" sx={{ paddingY: '4rem' }}>
            <PageHeader
                title="About Me"
                intro="Code enthusiast, problem solver, and lifelong learner."
            />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 5 }}>
                        <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
                            <img src={reactlogo} alt="Profile" ref={imageRef} className="about-image" />
                        </motion.div>
                    </Grid>

                    <Grid size={{ xs: 12, md: 7 }}>
                        <motion.div
                            variants={fadeIn('left', 'tween', 0.4, 1)}
                            ref={textSectionRef}
                        >
                            <Typography variant="h4" component="h2" gutterBottom className="about-heading">
                                Designing the Future, <br/>
                                <span className="about-heading-highlight">One Line of Code at a Time</span>
                            </Typography>

                            <Typography variant="body1" component="p" className="about-body-text">
                                Hello, I'm Wenkai Zhu. My journey into software engineering has always been about more than just
                                writing code — it's been about building solutions that make a difference. I specialize in developing
                                <strong> strong and reliable front-end applications</strong> that combine clean design with seamless performance.
                            </Typography>

                            <Typography variant="body1" component="p" className="about-body-text">
                                Currently pursuing my MSc at the University of Limerick, I am diving deep into advanced
                                software patterns and modern web technologies. I believe that great software is born at the
                                intersection of <strong>clean code</strong>, <strong>user-centric design</strong>, and <strong>creative innovation</strong>.
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>

                <Box className="about-skills-section">
                    <Typography variant="h6" className="about-skills-title">
                        My Tech Stack & Skills
                    </Typography>

                    <Box className="marquee-container">
                        <div className="marquee-track" ref={marqueeRef}>
                            {[...skills, ...skills].map((skill, index) => (
                                <Paper key={index} elevation={0} className="skill-card">
                                    {skill}
                                </Paper>
                            ))}
                        </div>
                    </Box>
                </Box>

            </motion.div>
        </Container>
    );
};

export default AboutPage;
