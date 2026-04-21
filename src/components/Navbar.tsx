import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "py-4 px-8 md:px-16 bg-bg/80 backdrop-blur-md border-b border-ink/5" : "py-12 px-8 md:px-16 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col gap-0 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className={`micro-label transition-all duration-500 ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-40"}`}>
            Portfolio 2024
          </span>
          <span className={`font-serif italic transition-all duration-500 ${isScrolled ? "text-lg" : "text-xl"}`}>
            Sunday Emmanuel
          </span>
        </motion.div>

        <motion.div 
          className="hidden md:flex gap-10 items-center"
        >
          <button onClick={() => scrollTo("profile")} className="micro-label hover:opacity-100 transition-opacity cursor-pointer opacity-60">Profile</button>
          <button onClick={() => scrollTo("projects")} className="micro-label hover:opacity-100 transition-opacity cursor-pointer opacity-60">Work</button>
          <button onClick={() => scrollTo("about")} className="micro-label hover:opacity-100 transition-opacity cursor-pointer opacity-60">About</button>
          <button onClick={() => scrollTo("contact")} className="micro-label hover:opacity-100 transition-opacity cursor-pointer opacity-60">Contact</button>
        </motion.div>

        <motion.div 
          className={`flex flex-col text-right transition-all duration-500 ${isScrolled ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
        >
          <span className="micro-label opacity-40">Located In</span>
          <p className="text-sm font-medium uppercase tracking-tight">Otukpo, Benue State</p>
        </motion.div>
      </div>
    </nav>
  );
}
