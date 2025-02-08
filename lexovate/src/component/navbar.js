"use client"
import { useEffect, useState } from "react";
import HoverButton from "./icon-button";


export default function Navbar({xLink, github}) {
  const activeSection = useActiveSection();
  const [isScrolled, setIsScrolled] = useState(false);
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
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-sm font-medium">
          <a href="#home" className={`hover:text-primary ${activeSection == "home" ? "text-primary" : ""} hover:-translate-y-[2px] transition-all duration-200`}>Home</a>
          <a href="#mission" className={`hover:text-primary ${activeSection == "mission" ? "text-primary" : ""} hover:-translate-y-[2px] transition-all duration-200`}>Our Mission</a>
          <a href="#features" className={`hover:text-primary ${activeSection == "features" ? "text-primary" : ""} hover:-translate-y-[2px] transition-all duration-200`}>Features</a>
        </div>
        <div className="flex items-center gap-4">
          <a href={xLink || ""}>
            <HoverButton
              buttonClass={"border border-text-primary rounded-lg p-2"}
              iconImgProps={{
                src: "/icons/x-icon.svg",
                alt: "x",
                height: 20
              }} />
          </a>
          <a href={github || ""}>
            <HoverButton
              buttonClass={"border border-text-primary rounded-lg p-2"}
              iconImgProps={{
                src: "/icons/github-icon.svg",
                alt: "github",
                height: 20
              }} />
          </a>
        </div>
      </nav>
    </header>
  );
}


const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Adjust as needed
        rootMargin: "-30% 0px -70% 0px", // Offsets the viewport
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
};