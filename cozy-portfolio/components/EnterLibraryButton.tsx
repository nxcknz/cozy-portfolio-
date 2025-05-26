'use client';
import {motion } from "framer-motion";

export default function EnterLibraryButton() {
  return (
      <motion.button
        className="mt-6 px-6 text-white bg-orange-500 rounded-xl
        front-semibold shadow-lg hover:bg-amber-600 focus:outline-none"
        whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.95}}
        animate={{
          scale:[1, 1.03, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        >
        Enter the library
      </motion.button>
  );
}
