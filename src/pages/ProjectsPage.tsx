
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

// 1. main component definition
const ProjectsPage = () => {
  return (
    <div className="page-wrapper">
      
      {/* 2. top header area */}
      <header className="page-header-container">
        <nav className="subpage-nav">
          <Link to="/">← Back to Home</Link>
        </nav>
        <h1>Projects</h1>
        <p className="page-intro">
          Here are some of the projects I've worked on. Each project presented an interesting experience.
        </p>
      </header>

      {/* 4. main content and sidebar container */}
      <div className="main-layout-container">

        {/* 5. left main content scrollable*/}
        <main className="main-content">
          <div className="project-card-full">
            <h3>First Portfolio</h3>
            <p>This is my first assignment, which consists of five pages including my profile, my project portfolio, my contact information, and more.</p>
            <div className="project-tech-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS Flexbox</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link">Live Demo</a>
              <a href="#" className="project-link">Source Code</a>
            </div>
          </div>

          <div className="project-card-full">
            <h3>Next Portfolio</h3>
            <p>This is my second assignment, including my requirements analysis, code, packages, readme, and more.</p>
            <div className="project-tech-stack">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link disabled">In Progress</a>
            </div>
          </div>

        </main>

        {/* 6. right sidebar*/}
        <aside className="sidebar-sticky">
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
        </aside>

      </div>
    </div>
  );
};

export default ProjectsPage;