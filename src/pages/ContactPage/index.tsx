import { useState } from 'react';
import './ContactPage.css';
import PageHeader from '../../components/PageHeader';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animation';


const FORM_ENDPOINT = 'https://formspree.io/f/meovjkqq';

const ContactPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

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
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); // 清空表单
            } else {
                const data = await response.json();
                setErrorMessage(data.errors?.map((err: any) => err.message).join(', ') || 'Submission failed.');
                setStatus('error');
            }
        } catch (error) {
            setErrorMessage('Network error. Please try again.');
            setStatus('error');
        }
    };

    return (
        <Container maxWidth="lg" sx={{ paddingY: '3rem' }}>
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
                    className="contact-form-container"
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        backgroundColor: 'white',
                        padding: '2.5rem',
                        borderRadius: '8px',
                        border: '1px solid #e0e0e0',
                        flex: 2
                    }}
                >
                    <h4 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 600 }}>
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


                    <Box sx={{ position: 'relative', marginTop: '1rem' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            disabled={status === 'submitting'}
                            sx={{ paddingY: '0.8rem', fontSize: '1rem', fontWeight: 600 }}
                        >
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </Button>
                        {status === 'submitting' && (
                            <CircularProgress
                                size={24}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px',
                                    marginLeft: '-12px',
                                }}
                            />
                        )}
                    </Box>


                    {status === 'success' && (
                        <Alert severity="success" sx={{ marginTop: '1.5rem' }}>
                            Message sent successfully! Thank you.
                        </Alert>
                    )}
                    {status === 'error' && (
                        <Alert severity="error" sx={{ marginTop: '1.5rem' }}>
                            Error: {errorMessage}
                        </Alert>
                    )}
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