"use client"
import Features from "@/component/features";
import Hero from "@/component/hero";
import Mission from "@/component/mission";
import Modal from "@/component/modal";
import Navbar from "@/component/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <main >
        <Hero />
        <div className="bg-background relative">
          <Mission/>
          <Features/>

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
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </section>
        </div>
      </main>
      <footer className="bg-background relative">
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
