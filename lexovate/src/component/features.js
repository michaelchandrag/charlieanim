"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "/icons/builder-icon.png",
    title: "No-Code Agent Builder",
    desc: "Create DeFi agents with an intuitive drag-and-drop interface & prebuilt strategy templates (DCA, LP, arbitrage)"
  },
  {
    icon: "/icons/chain-icon.png",
    title: "Cross-Chain Operability",
    desc: "Interact with 150+ blockchains seamlessly using AI-driven execution"
  },
  {
    icon: "/icons/library-icon.png",
    title: "Custom Strategy Library",
    desc: "Optimize trading & yield farming with pre-trained AI models and real-time data feeds"
  },
  {
    icon: "/icons/shield-icon.png",
    title: "Advanced Verifiability ",
    desc: "Ensure secure execution with zkML and Trusted Execution Environments (TEEs)"
  },
  {
    icon: "/icons/marketplace-icon.png",
    title: "Agent Marketplace",
    desc: "Share, monetize, and discover AI-powered strategies with tokenized royalties"
  },
  {
    icon: "/icons/simulation-icon.png",
    title: "Smart Simulation",
    desc: "Test and backtest strategies in a real-time DeFi environment before live deployment"
  },
  {
    icon: "/icons/dashboard-icon.png",
    title: "Monitoring Dashboard",
    desc: "Track performance across chains with AI-powered insights and analytics."
  }
]

export default function Features() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  return (
    <section ref={ref} id="features" aria-labelledby="features" className="relative bg-background z-5 overflow-hidden">
      <motion.img src="/media/features-bg.jpeg" className="absolute inset-0 h-full w-full object-cover z-0" style={{ scale }} />
      <div className="absolute inset-0 bg-black/70 z-1"></div>
      <div className="relative py-32 px-16 grid grid-cols-2 gap-16 z-2">
        <div>
          <FadeInView><h2 className="font-extrabold" delay={0.2}>Our Core Feature</h2></FadeInView>
          <FadeInView delay={0.3}>
            <p className="text-2xl font-medium mt-6">
              Empowering Users to Build, Deploy, and Optimize Autonomous DeFi Agents with No-Code Tools, AI-Driven Strategies, and Cross-Chain Compatibility
            </p>
          </FadeInView>
        </div>
        {features.map(feat =>
          <FadeInView key={feat.title} fadeUp hover>
            <div className="flex flex-col gap-6" >
              <img src={feat.icon} height={60} width={60} />
              <p className="text-2xl leading-7 font-semibold">{feat.title}</p>
              <p className="text-xl leading-6 font-medium">{feat.desc}</p>
            </div>
          </FadeInView>
        )}
      </div>
    </section>
  );
}

export function FadeInView({ children, delay, fadeUp, hover }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: fadeUp ? 50 : 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      whileHover={hover ? { y: -5, scale: 1.05, transition: { duration: 0.3 } } : undefined}
    >
      {children}
    </motion.div>
  );
}
