
import { Link } from 'react-router-dom';
import './AboutPage.css';
import yourProfileImage from '../assets/wenkai.jpg';
import galleryImage2 from '../assets/444.jpg';

const AboutPage = () => {
  return (
    <div className="subpage-container">
      <nav className="subpage-nav">
        <Link to="/">← Back to Home</Link>
      </nav>

      <div className="about-page-content">
        <div className="about-left-panel">
          <img src={yourProfileImage} alt="WENKAI ZHU" className="about-page-photo" />
          <h1>About Me</h1>
          <p className="about-subtitle">Software Engineer | Lifelong Learner</p>
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
          </div>
        </div>
        <div className="about-right-panel">
          <img src={galleryImage2} alt="A personal photo" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;