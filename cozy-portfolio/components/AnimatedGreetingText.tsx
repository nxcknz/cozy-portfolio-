'use client';
import { motion } from "framer-motion";

export  default function AnimatedGreetingText() {
    return (
        <motion.div className="text=center max-w-md text-lg text-gray-800 front-medium"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, delay: 0.5}}>
            Hi there, I'm Nicole. Welcome to my library.
        </motion.div>
    );
}