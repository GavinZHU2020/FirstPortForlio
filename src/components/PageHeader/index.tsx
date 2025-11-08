import { Link } from 'react-router-dom';
import './PageHeader.css';
import type { PageHeaderProps } from '../../types';
//Provide a unified header area layout for subpages

const PageHeader: React.FC<PageHeaderProps> = ({ title, intro }) => {
    return (
        <header className="page-header-container">
            <nav className="subpage-nav">
                <Link to="/">← Back to Home</Link>
            </nav>
            <h1>{title}</h1>
            <p className="page-intro">{intro}</p>
        </header>
    );
};

export default PageHeader;