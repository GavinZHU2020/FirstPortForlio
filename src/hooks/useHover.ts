import { useState, useRef, useEffect } from 'react';

/**
 * A custom hook that detects whether a referenced element is being hovered.
 *
 * @returns A tuple containing:
 *   - A ref to be attached to the DOM element.
 *   - A boolean state indicating if the element is hovered.
 */
export const useHover = <T extends HTMLElement>() => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<T>(null);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    useEffect(() => {
        const node = ref.current;
        if (node) {

            node.addEventListener('mouseenter', handleMouseEnter);
            node.addEventListener('mouseleave', handleMouseLeave);


            return () => {
                node.removeEventListener('mouseenter', handleMouseEnter);
                node.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return [ref, isHovered] as const;
};