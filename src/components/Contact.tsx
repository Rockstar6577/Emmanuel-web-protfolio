import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-40 p-16 text-center overflow-hidden relative border-t border-ink/5">
      <span className="micro-label mb-12 block">Project Inquiry</span>
      
      <h2 className="font-serif text-[12vw] tracking-tighter leading-none mb-16">
        Let's create <br />
        <span className="italic">Something</span> New
      </h2>
      
      <motion.a 
        href="https://wa.me/2349116254779" // Replace with your actual WhatsApp number (e.g., https://wa.me/234...)
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-4 bg-ink text-bg px-16 py-8 rounded-full font-serif italic text-2xl tracking-tight hover:opacity-90 transition-all"
      >
        Get in touch
        <ArrowRight size={24} />
      </motion.a>
      
      <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-8 text-ink/40 max-w-4xl mx-auto border-t border-ink/5 pt-10">
        <a href="https://wa.me/2349116254779" target="_blank" rel="noopener noreferrer" className="micro-label hover:text-ink transition-colors">WhatsApp</a>
        <a href="https://x.com/RockStardedev" target="_blank" rel="noopener noreferrer" className="micro-label hover:text-ink transition-colors">Twitter (X)</a>
        <a href="https://www.linkedin.com/in/sunday-emmanuel-52373330a" target="_blank" rel="noopener noreferrer" className="micro-label hover:text-ink transition-colors">LinkedIn</a>
        <a href="#" className="micro-label hover:text-ink transition-colors">Read.CV</a>
      </div>
    </section>
  );
}
