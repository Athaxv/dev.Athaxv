"use client";

import { motion } from "motion/react";

export function ScrollFade({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
