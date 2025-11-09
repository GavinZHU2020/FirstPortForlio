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
        <Container maxWidth="lg" sx={{ paddingY: '3rem' }}>

            <PageHeader
                title="Blog"
                intro="Random thoughts, coding struggles, and life as an international student."
            />


            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginY: '5rem' }}>
                    <CircularProgress size={60} />
                </Box>
            )}

            {error && (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginY: '5rem' }}>
                    <p style={{ color: 'red' }}>{error}</p>
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