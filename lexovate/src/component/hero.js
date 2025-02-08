"use client";

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const yPosition = useTransform(scrollY, [0, 400], [0, 100]);
  const initDelay = 1

  const controls = useAnimation();
  const videoRef = useRef(null);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: 0.5,
        y: '100%',
        clipPath: 'inset(20% 15% 20% 15%)',
        transition: { duration: 0.5, ease: "easeIn" },
      });

      await controls.start({
        y: 0,
        transition: { duration: 0.5, ease: [0.2, 0, 0.2, 1]},
      });

      await controls.start({
        scale: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        transition: { duration: 0.5, ease: "easeIn" },
      });
    };
    sequence();
  }, [controls]);


  return (
    <section id="home" aria-labelledby="hero" className="h-screen w-full flex flex-col items-center justify-end relative">
      <motion.video
      ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        src={"https://s3-figma-videos-production-sig.figma.com/video/TEAM/1170563733121532378/fe1b78e8671705da2b9f93d8b3e7fd6d6c4edc14?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P0Ek6-wJK2ANP2XyymBJk5hPKY-kFflN7AxivUZfL5Z4~2gNcE-VIfzcASINkAd6cp0trWhQ9aR--oTHf0V6bY9I8BPkt9QAvyl~~TXNYRa99t5rYjruw3FBzFlqJfvN3M-jMwq21pDWc81vSPbjpKQs475q2knV9bA~szaswf2itO0penTmIhiaQTFvr0YIR1VAhDUZPFBmwqFjlELnNBneZlyTZgrr1Sj6N2glHjkflhPaAg1xS4FiTexb0bNu113Uvt97vrCFL8WofepyhjSwe82Znhuz-FA-kvwUe0DcEr9ORQMOWQdcy0T~Jp4SZY8KmibU93Rb6oPphZv31A__"}
        autoPlay
        muted
        loop
        initial={{ scale: 0.5, y: '100%', clipPath: "inset(20% 15% 20% 15%)" }}
        animate={controls}
      />

      <motion.div className="text-center flex flex-col items-center px-4 fixed left-0 w-full"
        style={{ bottom: yPosition, zIndex: 0 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: initDelay + 0.15, duration: 0.7, ease: "easeOut" }}
        >
          <div className="rounded-lg flex items-center justify-between w-full max-w-[40rem] bg-white/15 mb-10">
            <p className="text-sm px-4 py-3">9kEcnFj9vwjUkjdsL89fGhKloP76qseTuv7</p>
            <div className="flex gap-2.5 rounded-r-lg items-center bg-white/15 px-4 py-3">
              <img src="/icons/copy-icon.svg" />
              <span>Copy CA</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.5,y: 30 ,opacity: 0 }}
          animate={{ scale: 1,y: 0, opacity: 1 }}
          transition={{ delay: initDelay, duration: 0.25, ease: "easeOut" }}
        >
          <h4 className="font-semibold mb-2">Empowering You to Build Smarter DeFi Agents -</h4>
        </motion.div>
        <motion.div
          initial={{ y: -50, scale: 0.8, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ delay: initDelay + 0.1, duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-bold mb-14">Without Writing a Single Line of Code</h1>
        </motion.div>
      </motion.div>
    </section>
  );
}
