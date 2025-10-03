import { Link } from 'react-router-dom';
import './GalleryPage.css'; 
import gallery1 from '../assets/dog1.jpg';
import gallery2 from '../assets/dog2.jpg';
import gallery3 from '../assets/dog3.jpg';  
import gallery4 from '../assets/dog4.jpg';

const GalleryPage = () => {
  return (
    <div className="page-wrapper">
      <header className="page-header-container">
        <nav className="subpage-nav">
          {/* navigation link back to the homepage */}
          <Link to="/">← Back to Home</Link>
        </nav>
        <h1>Pictures & Video Gallery</h1>
        <p className="page-intro">
          A collection of Picture and Video Comments.
        </p>
      </header>

      <main className="gallery-grid">
        {/* 1. image grid section */}
        <div className="gallery-item"><img src={gallery1} alt="Gallery item 1" /></div>
        <div className="gallery-item"><img src={gallery2} alt="Gallery item 2" /></div>
        <div className="gallery-item"><img src={gallery3} alt="Gallery item 3" /></div>
        <div className="gallery-item"><img src={gallery4} alt="Gallery item 4" /></div>

        {/* 3. embedded video section */}
        <div className="gallery-item video-item">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/LrFf71N-_KY?si=sBs2vXo-XflRf6fI" 
            title="youtube video player" 
         
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
          </div>
          <div className="gallery-item video-item">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/wTqCthvtL8k?si=bC3S3yVTHoISz23k" 
            title="youtube video player" 
         
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
          </div>
      </main>
    </div>
  );
};

export default GalleryPage;