"use client"
import Link from "next/link";
import { FadeInView } from "./features";

export default function Footer() {
  return (
    <footer className="bg-background relative">
      <div className="flex justify-between items-center pt-20 pb-36 px-16">
        <FadeInView><img src="/logo.png"
          alt="Lexovate" height={77} /></FadeInView>
        <FadeInView delay={0.2}><div className="flex flex-col items-center">
          <p className="text-text-secondary text-sm">Smarter DeFi Agents -</p>
          <p className="font-semibold">Without Writing a Single Line of Code</p>
        </div></FadeInView>
        <FadeInView delay={0.4}> <div className="flex flex-col items-center">
          <p className="text-text-secondary text-sm">Follow Us on X</p>
          <Link href={"https://x.com/lexovateAI"} className="font-semibold underline">@lexovateAI</Link>
        </div></FadeInView>
      </div>
      <div className="flex justify-center border-t border-text-primary py-8">
        <FadeInView><p className="font-medium"> Copyright © 2024-25 ShardspireAI</p></FadeInView>
      </div>
    </footer>
  );
}
