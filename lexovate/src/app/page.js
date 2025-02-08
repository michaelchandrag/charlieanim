"use client"
import Modal from "@/component/modal";
import Navbar from "@/component/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Navbar/>
      <main className="">
        <section id="home" aria-labelledby="hero" className="h-screen w-full flex flex-col items-center justify-end">
          <video
            className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
            src={"https://s3-figma-videos-production-sig.figma.com/video/TEAM/1170563733121532378/fe1b78e8671705da2b9f93d8b3e7fd6d6c4edc14?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P0Ek6-wJK2ANP2XyymBJk5hPKY-kFflN7AxivUZfL5Z4~2gNcE-VIfzcASINkAd6cp0trWhQ9aR--oTHf0V6bY9I8BPkt9QAvyl~~TXNYRa99t5rYjruw3FBzFlqJfvN3M-jMwq21pDWc81vSPbjpKQs475q2knV9bA~szaswf2itO0penTmIhiaQTFvr0YIR1VAhDUZPFBmwqFjlELnNBneZlyTZgrr1Sj6N2glHjkflhPaAg1xS4FiTexb0bNu113Uvt97vrCFL8WofepyhjSwe82Znhuz-FA-kvwUe0DcEr9ORQMOWQdcy0T~Jp4SZY8KmibU93Rb6oPphZv31A__"}
            autoPlay muted loop>
          </video>
          <div className="text-center flex flex-col items-center px-4">
            <div className="rounded-lg flex items-center justify-between w-full max-w-[40rem] bg-white/15 mb-10">
              <p className="text-sm px-4 py-3">9kEcnFj9vwjUkjdsL89fGhKloP76qseTuv7</p>
              <div className="flex gap-2.5 rounded-r-lg items-center bg-white/15 px-4 py-3">
                <img src="/icons/copy-icon.svg" />
                <span>Copy CA</span>
              </div>
            </div>
            <h4 className="font-semibold mb-2">Empowering You to Build Smarter DeFi Agents -</h4>
            <h1 className="font-bold mb-14">Without Writing a Single Line of Code</h1>
          </div>
        </section>

        <section id="mission" aria-labelledby="mission" className="bg-white text-background py-24 px-11">
          <h2 id="mission-title" className="font-extrabold">OUR <br /> MISSION</h2>
          <p className="mt-6 text-3xl indent-mission-section">{"Lexovate is a decentralized, no-code platform that democratizes access to advanced DeFi strategies. Our mission is to enable anyone—from crypto enthusiasts to seasoned investors—to create, deploy, and manage AI-powered DeFi agents effortlessly. By leveraging cutting-edge artificial intelligence and multi-chain compatibility, Lexovate redefines how users interact with decentralized finance, making it simpler, smarter, and more profitable."}</p>
        </section>

        <section id="features" aria-labelledby="features" className="relative bg-background">
          <img src="/media/features-bg.jpeg" className="absolute inset-0 h-full object-cover z-0" />
          <div className="absolute inset-0 bg-black/70 z-1"></div>
          <div className="relative py-32 px-16 grid grid-cols-2 gap-16 z-2">
            <div>
              <h2 className="font-extrabold">Our Core Feature</h2>
              <p className="text-2xl font-medium mt-6">
                Empowering Users to Build, Deploy, and Optimize Autonomous DeFi Agents with No-Code Tools, AI-Driven Strategies, and Cross-Chain Compatibility
              </p>
            </div>
            {features.map(feat =>
              <div className="flex flex-col gap-6" key={feat.title}>
                <img src={feat.icon} height={60} width={60} />
                <p className="text-2xl leading-7 font-semibold">{feat.title}</p>
                <p className="text-xl leading-6 font-medium">{feat.desc}</p>
              </div>
            )}
          </div>
        </section>

        <section aria-labelledby="contact-title" className="px-20 bg-background flex flex-col">
          <h3 className="max-w-[505px] font-bold mt-24 mb-24">
            Try It Yourself:
            <br />
            Interactive Walkthroughs of Our DeFi Platform
          </h3>
          <div className="self-center mb-52 max-w-[612px]">
            <p className="text-[2rem] leading-9 mb-16">
              The beta demo is launching soon! Join our early access program to be the first to experience the future of DeFi strategy-building.
            </p>
            <button className="border border-text-primary rounded-full font-semibold text-xl py-4 px-6 flex items-center gap-4" onClick={() => setIsModalOpen(true)}>Join Beta Version <img src="/icons/arrow-icon.svg" /></button>
          </div>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </section>
      </main>
      <footer className="bg-background">
        <div className="flex justify-between items-center pt-20 pb-36 px-16">
          <img src="/logo.png"
            alt="Lexovate" height={77} />
          <div className="flex flex-col items-center">
            <p className="text-text-secondary text-sm">Smarter DeFi Agents -</p>
            <p className="font-semibold">Without Writing a Single Line of Code</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-text-secondary text-sm">Follow Us on X</p>
            <Link href={"https://x.com/lexovateAI"} className="font-semibold underline">@lexovateAI</Link>
          </div>
        </div>
        <div className="flex justify-center border-t border-text-primary py-8">
          <p className="font-medium"> Copyright © 2024-25 ShardspireAI</p>
        </div>
      </footer>
    </div>
  );
}
