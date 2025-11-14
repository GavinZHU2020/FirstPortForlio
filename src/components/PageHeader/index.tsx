import { Link } from 'react-router-dom';
import './PageHeader.css';
import type { PageHeaderProps } from '../../types';
import { useTheme } from '../../context/ThemeContext';

/**
 * Renders a standardized header for sub-pages, including a title,
 * introduction, a navigation link, and a theme toggle button.
 */
const PageHeader: React.FC<PageHeaderProps> = ({ title, intro }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="page-header-container">
            <button
                className="theme-toggle-button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <nav className="subpage-nav">
                <Link to="/">← Back to Home</Link>
            </nav>
            <h1>{title}</h1>
            <p className="page-intro">{intro}</p>
        </header>
    );
};

export default PageHeader;