import { Link } from 'react-router-dom';
import './BlogPage.css';
import { blogPosts } from '../../data/blog';
import PageHeader from '../../components/PageHeader';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animation';
import Container from '@mui/material/Container'; // MUI container

const BlogPage = () => {
    return (
        <Container maxWidth="lg" sx={{ paddingY: '3rem' }}>

            <PageHeader
                title="Blog"
                intro="Random thoughts, coding struggles, and life as an international student."

            />

            <motion.div
                className="blog-content"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {blogPosts.map(post => (
                    <motion.article
                        key={post.id}
                        className="blog-post"
                        variants={fadeInUp}
                    >
                        <h2>
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <div className="post-meta">
                            <time>{post.date}</time>
                        </div>
                        <p className="post-excerpt">{post.excerpt}</p>
                        <Link to={`/blog/${post.slug}`} className="read-more">
                            Continue reading →
                        </Link>
                    </motion.article>
                ))}
            </motion.div>
        </Container>
    );
};

export default BlogPage;