/**
 * BlogPage Component
 * Fetches and displays a list of blog posts from a Firestore database.
 * Features:
 * - Fetches blog post summaries from the 'blog' collection in Firestore.
 * - Displays loading and error states.
 * - Links to individual blog post pages.
 * @returns {JSX.Element} The rendered Blog page with a list of posts.
 */
import { Link } from 'react-router-dom';
import './BlogPage.css';

import { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animation';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


import { db } from '../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";


interface BlogPost {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    slug: string;
}

const BlogPage = () => {

    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                setError(null);


                const querySnapshot = await getDocs(collection(db, "blog"));

                const fetchedPosts: BlogPost[] = [];
                querySnapshot.forEach((doc) => {

                    const data = doc.data();
                    fetchedPosts.push({
                        id: doc.id,
                        title: data.title,
                        date: data.date,
                        excerpt: data.excerpt,
                        slug: data.slug,
                    });
                });



                setPosts(fetchedPosts);

            } catch (err) {
                console.error(err);
                setError("Failed to load blog posts.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <Container maxWidth="lg" className="blog-page-container">

            <PageHeader
                title="Blog"
                intro="Random thoughts, coding struggles, and life as an international student."
            />


            {loading && (
                <Box className="blog-status-indicator">
                    <CircularProgress size={60} />
                </Box>
            )}

            {error && (
                <Box className="blog-status-indicator">
                    <p className="blog-error-text">{error}</p>
                </Box>
            )}

            {!loading && !error && (
                <motion.div
                    className="blog-content"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >

                    {posts.length === 0 ? (
                        <p>No blog posts found.</p>
                    ) : (
                        posts.map(post => (
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
                        ))
                    )}
                </motion.div>
            )}
        </Container>
    );
};

export default BlogPage;