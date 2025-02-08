"use client"
import { StaggerText } from "@/component/mission";
import Modal from "@/component/modal";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })
  const y = useTransform(scrollYProgress, [0.5, 1], [150, 0]);
  return (
    <section ref={ref} aria-labelledby="contact-title" className="px-20 bg-background flex flex-col">

      <h3 className="max-w-[505px] font-bold mt-24 mb-24">
        <StaggerText text={"Try It Yourself:"} />
        <StaggerText text={"Interactive Walkthroughs of Our DeFi Platform"} />
      </h3>
      <motion.div
        style={{ y }}
        className="self-center mb-52 max-w-[612px]"
      >
        <p className="text-[2rem] leading-9 mb-16">
          The beta demo is launching soon! Join our early access program to be the first to experience the future of DeFi strategy-building.
        </p>
        <motion.button
          whileHover="hover"
          className="border border-text-primary rounded-full font-semibold text-xl py-4 px-6 flex items-center gap-4"
          onClick={()=>setIsModalOpen(true)}
        >
          <motion.span
            className="block"
            variants={{
              hover: { x: 5 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Join Beta Version
          </motion.span>
          <motion.img
            src="/icons/arrow-icon.svg"
            variants={{
              hover: { rotate: 45 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.button>
      </motion.div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>

  );
}