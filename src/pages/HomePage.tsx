import { Link } from 'react-router-dom';
import reactlogo from '../assets/wenkai.jpg';
import '../App.css';

// 1. main home page component
const HomePage = () => {
  return (
    <div className="portfolio-container">
      {/* 2. left sidebar (navigation area) */}
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
         {/* Welcome Section */}
        <section id="welcome" className="content-section">
          <h2>Welcome to My First Assignment</h2>
          <p>
            This portfolio showcases my journey as a software engineering student, detailing my projects, skills, and professional aspirations.
          </p>
        </section>

        {/* About Me Summary */}
        <section id="about-summary" className="content-section">
          <h2>About Me</h2>
          <p>
            I am a postgraduaate software engineering student at the University of Limerick with a focus on web development and building user-friendly applications.
          </p>
          <Link to="/about" style={{ fontWeight: 'bold', marginTop: '1rem', display: 'inline-block' }}>Read More About Me →</Link>
        </section>

        {/* Featured Project */}
        <section id="featured-project" className="content-section">
          <h2>Featured Project</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>First Portfolio</h3>
              <p>This is my first assignment, which consists of five pages including my profile, my project portfolio, my contact information, and more.</p>
              <Link to="/projects" style={{ fontWeight: 'bold', marginTop: '1rem', display: 'inline-block' }}>View All Projects →</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;