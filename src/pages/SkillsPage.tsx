import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillsPage.css';

const skillsData = [
  { 
    id: 'react', 
    name: 'React', 
    description: 'Been working with React for my frontend projects. Still getting the hang of hooks and state management, but can build functional components and handle basic routing.' 
  },
  { 
    id: 'typescript', 
    name: 'TypeScript', 
    description: 'Learning TypeScript alongside React. Appreciate the type safety, though sometimes the compiler errors are a bit confusing. Getting better at defining proper interfaces.' 
  },
  { 
    id: 'java', 
    name: 'Java', 
    description: 'Used Java for university coursework. Comfortable with OOP concepts and building console applications. Still exploring Spring Boot for web development.' 
  },
  { 
    id: 'python', 
    name: 'Python', 
    description: 'Mostly used for scripting and small automation tasks. Love how readable it is. Working on building more substantial projects with Django or Flask.' 
  },
];

const SkillsPage = () => {
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);

  return (
    <div className="page-wrapper">
      <header className="page-header">
        <nav className="subpage-nav">
          <Link to="/">← Home</Link>
        </nav>
        <h1>Skills & Technologies</h1>
        <p className="page-intro">
          Technologies I'm currently working with and learning. Each one comes with its own challenges and rewards.
        </p>
      </header>

      <div className="main-layout">
        <main className="main-content skills-container">
          <h2>{activeSkill.name}</h2>
          <p>{activeSkill.description}</p>
        </main>
        
        <aside className="sidebar">
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
        </aside>
      </div>
    </div>
  );
};

export default SkillsPage;