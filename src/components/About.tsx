import { motion } from "motion/react";

const EXPERIENCE = [
  {
    role: "Lead Developer & Admin",
    company: "IGA ICT LTD",
    period: "2024 — Present",
    description: "Developing and managing a comprehensive ICT management system using React, Vite, and Firebase. Handling digital infrastructure and client projects."
  },
  {
    role: "Marketing Assistant",
    company: "Various Projects",
    period: "2023 — 2024",
    description: "Developing marketing plans and strategies, conducting market research, and coordinating promotional activities to drive engagement and sales."
  },
  {
    role: "Admin Assistant",
    company: "Service Industry",
    period: "2022 — 2023",
    description: "Managing daily schedules, organizing electronic and physical filing systems, and improving office efficiency through digital scheduling tools."
  }
];

const SKILLS = [
  "React & TypeScript", "Firebase", "Web Development", "Marketing Strategy", 
  "Market Research", "Digital Systems", "Admin Management", "Social Media Campaigning"
];

export default function About() {
  return (
    <section id="about" className="py-40 p-16 bg-bg text-ink min-h-screen">
      {/* Page Header */}
      <div className="mb-32">
        <span className="micro-label mb-4 block">The Narrative</span>
        <h2 className="font-serif text-[12vw] leading-none tracking-tighter">About</h2>
      </div>

      {/* Professional Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
        <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
          <span className="micro-label">Profile</span>
          <h3 className="font-serif italic text-3xl mt-4">Blending marketing insight with digital craftsmanship.</h3>
        </div>
        <div className="lg:col-span-8">
          <p className="font-serif text-3xl md:text-4xl leading-snug tracking-tight mb-12">
            I am a professional based in Otukpo, Benue State, Nigeria, specializing in web development, marketing, and administration. I build digital tools and strategies that help businesses grow and streamline their operations.
          </p>
          <p className="text-lg text-ink/70 max-w-2xl leading-relaxed font-light">
            With a strong foundation in marketing and administrative management, I leverage modern web technologies like React and Firebase to solve real-world problems. My focus is on creating accessible, efficient, and user-friendly solutions.
          </p>
        </div>
      </div>

      <div className="line mb-20" />

      {/* Expertise / Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
        <div className="lg:col-span-4">
          <span className="micro-label">Expertise</span>
        </div>
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
            {SKILLS.map((skill, idx) => (
              <motion.div 
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="line mb-4 opacity-20" />
                <span className="font-medium uppercase text-xs tracking-widest">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="line mb-20" />

      {/* Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
        <div className="lg:col-span-4">
          <span className="micro-label">Experience</span>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-24">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6">
                <div>
                  <h4 className="font-serif text-4xl mb-1">{exp.role}</h4>
                  <span className="text-xl italic opacity-50">{exp.company}</span>
                </div>
                <span className="micro-label mt-4 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-ink/60 max-w-xl leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="line mb-20" />

      {/* Education */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <span className="micro-label">Education</span>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-12">
          <div>
            <h4 className="font-serif text-2xl">High School Graduate</h4>
            <div className="flex justify-between items-center mt-2">
              <span className="opacity-60 italic">Secondary Education</span>
              <span className="micro-label">NIGERIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
