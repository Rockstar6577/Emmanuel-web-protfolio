import { motion } from "motion/react";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen p-8 md:p-16 pt-40 flex flex-col justify-between relative overflow-hidden bg-bg">
      {/* Structural Decorative Elements */}
      <div className="absolute top-0 left-[65%] w-[1px] h-full bg-ink/[0.04] -z-10" />
      <div className="absolute top-[30%] left-0 w-full h-[1px] bg-ink/[0.02] -z-10" />

      <main className="relative flex flex-col items-start gap-12 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col -space-y-4 md:-space-y-8">
          <motion.div
             initial={{ x: -40, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-serif text-[16vw] md:text-[14vw] leading-[0.85] font-normal tracking-tighter select-none">
              Strategic
            </h1>
          </motion.div>
          <motion.div
             initial={{ x: 40, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
             className="ml-12 md:ml-48"
          >
            <h1 className="font-serif text-[16vw] md:text-[14vw] leading-[0.85] italic font-normal tracking-tighter select-none">
              Execution
            </h1>
          </motion.div>
        </div>

        {/* Floating Profile Teaser - Refined */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block cursor-pointer group z-20"
          onClick={() => document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-56 h-[400px] bg-muted rounded-none overflow-hidden border border-ink/5 flex items-center justify-center relative shadow-2xl">
            <img 
              src={profileImg} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              alt="Sunday Emmanuel"
            />
            <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-700" />
            <div className="absolute bottom-6 left-6 text-bg mix-blend-difference group-hover:opacity-0 transition-opacity">
               <p className="font-serif italic text-sm tracking-widest uppercase">Profile</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 cursor-pointer group"
            onClick={() => document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="micro-label block mb-6 group-hover:text-ink transition-colors opacity-40">01 — Introduction</span>
            <p className="text-xl md:text-2xl leading-tight text-ink/80 font-light tracking-tight group-hover:text-ink transition-colors max-w-md">
              Bridging marketing intelligence with high-performance web engineering to build digital tools that actually work.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-7 flex flex-wrap gap-x-20 gap-y-8"
          >
            <div className="flex flex-col gap-3">
              <span className="micro-label opacity-40">Expertise</span>
              <ul className="text-sm font-medium space-y-1">
                <li>Marketing Intelligence</li>
                <li>Digital Architecture</li>
                <li>Strategic Growth</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <span className="micro-label opacity-40">Location</span>
              <p className="text-sm font-medium">Otukpo, Benue State</p>
              <p className="text-sm font-light opacity-60 italic leading-none mt-1">NIGERIA — GMT+1</p>
            </div>
          </motion.div>
        </div>
      </main>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 flex items-center gap-6"
      >
        <div className="w-12 h-px bg-ink/20" />
        <span className="micro-label tracking-[0.5em] text-[8px] animate-pulse">Engaging Exploration Mode</span>
      </motion.div>
    </section>
  );
}
