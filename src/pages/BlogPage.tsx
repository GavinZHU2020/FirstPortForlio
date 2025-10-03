import { Link } from 'react-router-dom';
import './BlogPage.css';

const blogPosts = [
  {
    id: 1,
    title: 'That First Coffee Shop Disaster',
    date: 'Oct 1, 2025',
    excerpt: 'My first attempt at ordering coffee here was... memorable. Between the accent and my nerves, I somehow ended up with three espressos instead of one latte.',
    slug: 'coffee-shop-disaster'
  },
  {
    id: 2,
    title: 'The Semicolon That Almost Ended Me',
    date: 'Sep 25, 2025',
    excerpt: 'Spent 6 hours debugging what turned out to be a missing semicolon. The victory dance was probably more embarrassing than the initial failure.',
    slug: 'semicolon-story'
  },
];

const BlogPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <nav className="subpage-nav">
          <Link to="/">← Home</Link>
        </nav>
        <h1>Blog</h1>
        <p className="page-intro">
          Random thoughts, coding struggles, and life as an international student.
        </p>
      </div>

      <div className="blog-content">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-post">
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
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;