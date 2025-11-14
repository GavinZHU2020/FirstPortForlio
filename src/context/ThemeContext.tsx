import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

/**
 * Defines the shape of the theme context, including the current theme
 * and a function to toggle it.
 */
interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

/**
 * React Context for managing the application's color theme.
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Provides the theme state and toggle functionality to its children.
 * It also handles applying the theme class to the document body.
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        // Check for saved theme in local storage or user's OS preference
        const savedTheme = localStorage.getItem('theme');
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return (savedTheme as 'light' | 'dark') || (userPrefersDark ? 'dark' : 'light');
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

/**
 * Custom hook to easily access the theme context.
 * Throws an error if used outside of a ThemeProvider.
 */
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
