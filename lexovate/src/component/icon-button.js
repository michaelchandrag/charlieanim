"use client";

import { motion, useAnimation } from "framer-motion";

export default function HoverButton({ icon, children, buttonProps, buttonClass }) {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      y: [0, 30, -30, 0],
      opacity: [1, 0, 0, 1],
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  };

  return (
    <motion.button
      onHoverStart={handleHoverStart}
      className={`relative overflow-hidden ${buttonClass}`}
      {...buttonProps}
    >
      {children}
      <motion.div animate={controls}>
        {icon}
      </motion.div>
    </motion.button>
  );
}
