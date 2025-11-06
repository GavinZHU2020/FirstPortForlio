import { motion,type Variants } from 'framer-motion';
import './WelcomeSplash.css';


const splashVariants: Variants = {

    initial: {
        opacity: 0,
    },

    animate: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
        },
    },

    exit: {
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
        },
    },
};

const WelcomeSplash = () => {
    return (
        <motion.div
            className="welcome-splash-container"
            variants={splashVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <h1>Welcome</h1>
        </motion.div>
    );
};

export default WelcomeSplash;