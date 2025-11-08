import { Link } from 'react-router-dom';
import reactlogo from '../../assets/wenkai.jpg';
import './HomePage.css';
import { motion, AnimatePresence } from 'framer-motion'; // Animation
import { useHover } from '../../hooks/useHover';

// Hoverable section
const HoverSection: React.FC<{ title: string; summary: string; linkTo: string; linkText: string; }> = ({ title, summary, linkTo, linkText }) => {
    const [hoverRef, isHovered] = useHover<HTMLElement>();

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <section
      id={title.toLowerCase().replace(/\s/g, '-')}
      className="content-section"
      ref={hoverRef}
    >
      <h2>{title}</h2>
      <p>{summary}</p>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            <Link to={linkTo} style={{ fontWeight: 'bold', marginTop: '1rem', display: 'inline-block' }}>
              {linkText} →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="portfolio-container">
      <aside className="left-column">
        <div className="left-content">
          <img src={reactlogo} alt="WENKAI ZHU" className="profile-photo" />
          <h1 className="main-name">WENKAI ZHU</h1>
          <p className="title">University of Limerick MSC</p>

          <nav className="main-nav">
            <Link to="/about">About Me</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact Me</Link>
          </nav>
        </div>
      </aside>

      <main className="right-column">
        <HoverSection
          title="Welcome to My Portfolio"
          summary="Discover my journey in software engineering, projects, and skills."
          linkTo="/about"
          linkText="Learn More"
        />

        <HoverSection
          title="About Me"
          summary="A postgraduate software engineering student at the University of Limerick."
          linkTo="/about"
          linkText="Read More About Me"
        />

        <HoverSection
          title="Skills"
          summary="My technical proficiencies: React, TypeScript, Node.js, and more."
          linkTo="/skills"
          linkText="View My Skills"
        />

        <HoverSection
          title="Featured Project"
          summary="My first assignment: a multi-page portfolio showcasing my work."
          linkTo="/projects"
          linkText="View All Projects"
        />

        <HoverSection
          title="Gallery"
          summary="A collection of personal photos and creative works."
          linkTo="/gallery"
          linkText="Explore Gallery"
        />

        <HoverSection
          title="Blog"
          summary="Random thoughts, coding struggles, and student life experiences."
          linkTo="/blog"
          linkText="Read My Blog"
        />

        <HoverSection
          title="Contact Me"
          summary="Available for freelance or full-time opportunities. Let's connect!"
          linkTo="/contact"
          linkText="Get In Touch"
        />
      </main>
    </div>
  );
};

export default HomePage;