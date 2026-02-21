"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({ children, className }) {
  return (
    <motion.section
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
