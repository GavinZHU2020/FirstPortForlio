import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../../../firebaseConfig';
import { collection, query, where, getDocs, type DocumentData } from 'firebase/firestore';
import type {BlogPost} from '../../../types';

import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import PageHeader from '../../../components/PageHeader';

import '../BlogPage.css';
import './BlogPostPage.css';

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();

    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return;

            setLoading(true);
            setError(null);

            try {
                const blogCollection = collection(db, "blog");
                const q = query(blogCollection, where("slug", "==", slug));

                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    setError("Blog post not found.");
                } else {
                    const doc = querySnapshot.docs[0];
                    const data = doc.data() as DocumentData;

                    setPost({
                        id: doc.id,
                        title: data.title,
                        date: data.date,
                        slug: data.slug,
                        excerpt: data.excerpt,
                        content: data.content,
                    });
                }
            } catch (err) {
                console.error(err);
                setError("Failed to load the post.");
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <Container maxWidth="md" sx={{ paddingY: '5rem', textAlign: 'center' }}>
                <CircularProgress size={60} />
            </Container>
        );
    }

    if (error) {
        return (
            <Container maxWidth="md" sx={{ paddingY: '3rem', textAlign: 'center' }}>
                <PageHeader title="Error" intro={error} />
                <Link to="/blog">← Back to Blog List</Link>
            </Container>
        );
    }

    if (!post) {
        return (
            <Container maxWidth="md" sx={{ paddingY: '3rem', textAlign: 'center' }}>
                <PageHeader title="Not Found" intro="Could not find the requested post." />
                <Link to="/blog">← Back to Blog List</Link>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ paddingY: '3rem' }}>
            <header className="page-header-container">
                <nav className="subpage-nav">
                    <Link to="/blog">← Back to Blog List</Link>
                </nav>
                <h1>{post.title}</h1>
                <p className="page-intro" style={{ fontSize: '1.1rem', color: '#7f8c8d' }}>
                    Published on <time>{post.date}</time>
                </p>
            </header>

            <div className="blog-content-area">
                <article className="post-full-content">
                    <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
                </article>
            </div>
        </Container>
    );
};

export default BlogPostPage;