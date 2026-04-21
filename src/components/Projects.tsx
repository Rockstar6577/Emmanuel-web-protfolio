import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    title: "IGA ICT SYSTEM",
    category: "Management Platform",
    year: "2024",
    image: "https://picsum.photos/seed/tech/1200/800",
    color: "#F27D26"
  },
  {
    id: "02",
    title: "MARKETING CAMPAIGNS",
    category: "Social Media & Strategy",
    year: "2023",
    image: "https://picsum.photos/seed/art/1200/800",
    color: "#A2C3A4"
  },
  {
    id: "03",
    title: "ADMIN AUTOMATION",
    category: "Digital Workflows",
    year: "2023",
    image: "https://picsum.photos/seed/space/1200/800",
    color: "#8E9299"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-40 p-8 md:p-16 border-t border-ink/5 bg-bg">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-4 mb-24">
          <span className="micro-label opacity-40">03 — Case Studies</span>
          <h2 className="font-serif text-6xl md:text-7xl tracking-tighter italic">Selected Fragments</h2>
        </div>

        <div className="flex flex-col border-t border-ink/10">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-1 md:grid-cols-[80px_2fr_1fr_100px] border-b border-ink/5 py-12 md:py-16 items-center hover:bg-muted/10 transition-all duration-700 cursor-pointer relative"
            >
              <span className="font-serif italic text-xl opacity-30 group-hover:opacity-100 transition-opacity group-hover:translate-x-2 duration-500">{project.id}</span>
              
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-4xl md:text-5xl tracking-tighter uppercase md:normal-case group-hover:italic transition-all duration-500">
                  {project.title}
                </h3>
                <span className="micro-label md:hidden opacity-40 mt-2">{project.category}</span>
              </div>

              <div className="hidden md:flex flex-col gap-1">
                <span className="micro-label opacity-40">Category</span>
                <span className="text-sm font-medium tracking-tight uppercase">{project.category}</span>
              </div>

              <div className="text-right flex flex-col items-end gap-1">
                <span className="micro-label opacity-40 hidden md:block">Year</span>
                <span className="font-serif italic text-xl opacity-40 group-hover:opacity-100 transition-opacity">{project.year}</span>
              </div>

              {/* Subtle hover indicator */}
              <div className="absolute left-0 bottom-0 h-[2px] bg-ink w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
            </motion.div>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center gap-8">
          <p className="micro-label opacity-40">End of Selected Works</p>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-6 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-ink group-hover:text-bg transition-all duration-500">
              <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <span className="font-serif italic text-xl tracking-tight underline-offset-8 decoration-ink/20 hover:decoration-ink transition-all">View Full Archive</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
