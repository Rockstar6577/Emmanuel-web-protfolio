/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="p-10 text-center border-t border-ink/5">
        <p className="micro-label text-ink/40">
          © 2024 SUNDAY EMMANUEL • BUILT WITH PASSION & PIXELS
        </p>
      </footer>
    </div>
  );
}
