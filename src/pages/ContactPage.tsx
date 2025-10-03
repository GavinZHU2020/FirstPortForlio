
import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="page-wrapper">
      <header className="page-header-container">
        <nav className="subpage-nav">
          <Link to="/">← Back to Home</Link>
        </nav>
        <h1>Get In Touch</h1>
        <p className="page-intro">
          I'm available for freelance work or full-time opportunities. If you have a project in mind or just want to say hello, feel free to reach out.
        </p>
      </header>

      <div className="contact-page-layout">
        <div className="contact-form-container">
     
          <h4 style={{marginTop: 0}}>Instant Message</h4>
          <form className="contact-form">
          
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        <aside className="contact-sidebar">
       
        </aside>
      </div>
    </div>
  );
};

export default ContactPage;