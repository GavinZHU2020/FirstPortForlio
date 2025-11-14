/**
 * GalleryPage Component
 * Displays a gallery of images and embedded YouTube videos.
 * Features:
 * - A grid layout for images and videos.
 * - Framer Motion for entry animations.
 * - Embedded YouTube videos using iframes.
 * @returns {JSX.Element} The rendered Gallery page.
 */
import './GalleryPage.css';
import gallery1 from '../../assets/dog1.jpg';
import gallery2 from '../../assets/dog2.jpg';
import gallery3 from '../../assets/dog3.jpg';
import gallery4 from '../../assets/dog4.jpg';
import PageHeader from '../../components/PageHeader';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animation';
import Container from '@mui/material/Container';

const GalleryPage = () => {
    return (
        <Container maxWidth="lg" className="gallery-page-container">

            <PageHeader
                title="Pictures & Video Gallery"
                intro="A collection of Picture and Video Comments."
            />

            <motion.main
                className="gallery-grid"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="gallery-item" variants={fadeInUp}>
                    <img src={gallery1} alt="Gallery item 1" />
                </motion.div>
                <motion.div className="gallery-item" variants={fadeInUp}>
                    <img src={gallery2} alt="Gallery item 2" />
                </motion.div>
                <motion.div className="gallery-item" variants={fadeInUp}>
                    <img src={gallery3} alt="Gallery item 3" />
                </motion.div>
                <motion.div className="gallery-item" variants={fadeInUp}>
                    <img src={gallery4} alt="Gallery item 4" />
                </motion.div>

                <motion.div className="gallery-item video-item" variants={fadeInUp}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/LrFf71N-_KY?si=sBs2vXo-XflRf6fI"
                        title="youtube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </motion.div>
                <motion.div className="gallery-item video-item" variants={fadeInUp}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/wTqCthvtL8k?si=bC3S3yVTHoISz23k"
                        title="youtube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </motion.div>
            </motion.main>
        </Container>
    );
};

export default GalleryPage;