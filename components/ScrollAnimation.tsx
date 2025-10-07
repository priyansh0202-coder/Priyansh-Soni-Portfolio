"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ScrollAnimationProps = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  once?: boolean;
};

export default function ScrollAnimation({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
}: ScrollAnimationProps) {
  const directionVariants = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionVariants[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
}