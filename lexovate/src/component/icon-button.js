"use client";

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export default function HoverButton({iconImgProps, children, buttonProps, buttonClass}) {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      y: [0, 30, -30, 0],
      opacity: [1, 0, 0, 1],
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    setHovered(true);
  };

  const handleHoverEnd = () => setHovered(false);

  return (
    <motion.button
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className={`relative overflow-hidden ${buttonClass}`}
      {...buttonProps}
    >
      {children}
      <motion.img
        animate={controls}
        {...iconImgProps}
      />
    </motion.button>
  );
}
