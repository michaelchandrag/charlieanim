"use client";
import { AnimatePresence, motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero({ caKey }) {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    navigator.clipboard.writeText(caKey || '');
    setTimeout(() => setShowToast(false), 500);
  };

  const { scrollY } = useScroll();
  const yPosition = useTransform(scrollY, [0, 300], [0, 150]);
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
        transition: { duration: 0.5, ease: [0.2, 0, 0.2, 1] },
      });

      await controls.start({
        scale: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        transition: { duration: 0.5, ease: "easeIn" },
      });
    };
    sequence();
  }, [controls]);
  // useEffect(() => {
  //   const updateVh = () => {
  //     document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  //   };
  //   updateVh();
  //   window.addEventListener('resize', updateVh);
  //   return () => window.removeEventListener('resize', updateVh);
  // }, []);

  return (
    <section id="home" aria-labelledby="hero" className="full-height h-screen w-full flex flex-col items-center justify-end relative">
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
            <p className="text-sm px-4 py-3 min-w-48 font-jost truncate">{caKey}</p>
            <div>
              <motion.button
                whileHover="hover"
                className="relative overflow-hidden px-4 py-3 bg-white/15 rounded-r-lg"
                onClick={handleClick}
              >
                <motion.div
                  variants={{
                    hover: { x: "100%" }
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute inset-0 bg-[linear-gradient(90deg,transparent,#fff,transparent)]"
                  style={{
                    x: "-100%"
                  }}
                />
                <span className="relative z-10 flex gap-2.5 items-center font-jost">
                  <img src="/icons/copy-icon.svg" />
                  <span>Copy CA</span>
                </span>
              </motion.button>
              <AnimatePresence>
                {showToast && (
                  <motion.div
                    className="absolute top-[-50px] bg-white/15 px-4 py-2 rounded-md shadow-lg text-center font-jost"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    Copied To Clipboard
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </motion.div>
        <motion.div
          initial={{ scale: 0.5, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
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
