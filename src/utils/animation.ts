import {stagger, type Variants} from 'framer-motion';

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
        delayChildren:stagger(0.1),
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Creates variants for a fade-in animation with a specified direction.
 *
 * @param direction - The direction from which the element should enter ('left', 'right', 'up', 'down').
 * @param type - The type of transition (e.g., 'tween', 'spring').
 * @param delay - The delay before the animation starts.
 * @param duration - The duration of the animation.
 * @returns A Framer Motion Variants object for the fade-in effect.
 */
export const fadeIn = (direction: string, type: 'tween' | 'spring' | 'inertia', delay: number, duration: number): Variants => {
    return {
        hidden: {
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0,
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    };
};