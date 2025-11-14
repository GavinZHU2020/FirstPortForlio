import { useState } from 'react';
import './ContactPage.css';
import PageHeader from '../../components/PageHeader';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animation';
import { toast } from 'react-hot-toast';

const FORM_ENDPOINT = 'https://formspree.io/f/meovjkqq';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Form validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                toast.success('Message sent successfully! Thank you.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                const data = await response.json();
                const errorMessage = data.errors?.map((err: any) => err.message).join(', ') || 'Submission failed.';
                toast.error(errorMessage);
            }
        } catch (error) {
            toast.error('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container maxWidth="lg" className="contact-page-container">
            <PageHeader
                title="Get In Touch"
                intro="I'm available for freelance work or full-time opportunities. If you wanna contact me, feel free to reach out."
            />

            <motion.div
                className="contact-page-layout"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
            >
                <Box
                    className="contact-form-box"
                    component="form"
                    onSubmit={handleSubmit}
                >
                    <h4 className="contact-form-title">
                        Quickly And Directly Email Me !
                    </h4>

                    <TextField
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        required
                        multiline
                        rows={6}
                        margin="normal"
                    />

                    <Box className="contact-submit-button-wrapper">
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            disabled={isSubmitting}
                            className="contact-submit-button"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                        {isSubmitting && (
                            <CircularProgress
                                size={24}
                                className="contact-submit-progress"
                            />
                        )}
                    </Box>
                </Box>

                <aside className="contact-sidebar">
                    <div className="contact-widget">
                        <h4>Contact Info</h4>
                        <ul className="contact-list">
                            <li>
                                <strong>Email:</strong><br />
                                me.email@example.com
                            </li>
                            <li>
                                <strong>Phone:</strong><br />
                                +1 (555) 123-4567
                            </li>
                            <li>
                                <strong>Location:</strong><br />
                                Limerick, Ireland
                            </li>
                        </ul>
                    </div>
                </aside>
            </motion.div>
        </Container>
    );
};

export default ContactPage;