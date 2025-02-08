"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const desc = "Lexovate is a decentralized, no-code platform that democratizes access to advanced DeFi strategies. Our mission is to enable anyone—from crypto enthusiasts to seasoned investors—to create, deploy, and manage AI-powered DeFi agents effortlessly. By leveraging cutting-edge artificial intelligence and multi-chain compatibility, Lexovate redefines how users interact with decentralized finance, making it simpler, smarter, and more profitable."

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const descRef = useRef(null);
  const isDescInView = useInView(descRef, { once: true });
  const variants = {
    hidden: { opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.005 },
    }),
  };
  const letters = desc.split('');
  return (
    <section id="mission" aria-labelledby="mission" className="bg-white text-background py-24 px-11 z-10">
      <motion.h2 id="mission-title" className="font-extrabold" ref={ref}
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
        animate={isInView ? { clipPath: "inset(0 0% 0 0)", opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
      >OUR <br /> MISSION</motion.h2>
      <StaggerText text={desc} className="mt-6 text-3xl indent-mission-section text-justify"/>
    </section>

  );
}

export function StaggerText({ text, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = {
    hidden: { opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.005 },
    }),
  };
  const letters = text.split('');
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? 'show' : ''}
      variants={variants}
      viewport={{ once: true }}
      ref={ref} className={className}
    >
      {letters.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}