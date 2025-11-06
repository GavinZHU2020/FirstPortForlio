import './ContactPage.css';
import PageHeader from '../../components/PageHeader';
import Container from '@mui/material/Container'; // MUI container
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animation';

const ContactPage = () => {
    return (
        <Container maxWidth="lg" sx={{ paddingY: '3rem' }}>

            <PageHeader
                title="Get In Touch"
                intro="I'm available for freelance work or full-time opportunities. If you have a project in mind or just want to say hello, feel free to reach out."
            />

            <motion.div
                className="contact-page-layout"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
            >
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
                    {/* Contact info here, e.g., email, LinkedIn */}
                </aside>
            </motion.div>
        </Container>
    );
};

export default ContactPage;