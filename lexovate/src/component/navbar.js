"use client"
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HoverButton from "./icon-button";
import XIcon from '@/assets/x-icon.svg';
import GithubIcon from '@/assets/github-icon.svg';

export default function Navbar({xLink, github}) {
  const activeSection = useActiveSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const isMission = activeSection == "mission"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`fixed top-0 z-10 w-full transition-colors duration-300 ${isScrolled ? "bg-black/15 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}>
      <nav className="relative flex items-center justify-between px-16 py-6">
        <div className="flex-shrink-0">
          <img src="/logo.png"
            alt="Lexovate" width={200} />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 font-medium">
          <a href="#home" className={`hover:text-primary ${activeSection == "home" ? "text-primary" : isMission ? "text-background" : ""} hover:-translate-y-[2px] transition-all duration-200`}>Home</a>
          <a href="#mission" className={`hover:text-primary ${activeSection == "mission" ? "text-primary" : isMission ? "text-background" : ""} hover:-translate-y-[2px] transition-all duration-200`}>Our Mission</a>
          <a href="#features" className={`hover:text-primary ${activeSection == "features" ? "text-primary" : isMission ? "text-background" : ""} hover:-translate-y-[2px] transition-all duration-200`}>Features</a>
        </div>
        <div className="flex items-center gap-4">
          <a href={xLink || ""}>
            <HoverButton
              buttonClass={`border ${ isMission ? "border-background" : "border-text-primary"} transition-colors rounded-lg p-2`}
              icon={<XIcon alt="x" className={`${isMission ? "text-background" : ""} transition-colors`}/>}
              />
          </a>
          <a href={github || ""}>
            <HoverButton
              buttonClass={`border ${ isMission ? "border-background" : "border-text-primary"} transition-colors rounded-lg p-2`}
              icon={<GithubIcon alt="github" className={`${isMission ? "text-background" : ""} transition-colors`}/>}
              />
          </a>
        </div>
      </nav>
    </header>
  );
}

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionsRef = useRef();

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll("section");
    requestAnimationFrame(() => {
      const initialScrollY = window.scrollY;
      updateActiveSection(initialScrollY);
    });
  }, []);

  const { scrollY } = useScroll();

  const updateActiveSection = (scrollPosition) => {
    sectionsRef.current?.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + rect.height
      ) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    return scrollY.onChange(updateActiveSection);
  }, [scrollY]);
  return activeSection;
};