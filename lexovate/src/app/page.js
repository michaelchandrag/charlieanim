"use client"
import Contact from "@/component/contact";
import Features from "@/component/features";
import Hero from "@/component/hero";
import Mission from "@/component/mission";
import Modal from "@/component/modal";
import Navbar from "@/component/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main >
        <Hero />
        <div className="bg-background relative">
          <Mission/>
          <Features/>
          <Contact/>
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
