import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Phone as WhatsApp } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const SOCIALS = [
  { name: "Github", icon: Github, link: "https://github.com" },
  { name: "Twitter", icon: Twitter, link: "https://x.com/RockStardedev" },
  { name: "Linkedin", icon: Linkedin, link: "https://www.linkedin.com/in/sunday-emmanuel-52373330a" },
  { name: "WhatsApp", icon: WhatsApp, link: "https://wa.me/2349116254779" }
];

const FACTS = [
  { label: "Origin", value: "Otukpo, Benue State" },
  { label: "Specialization", value: "Systems & Marketing" },
  { label: "Availability", value: "Q2 2024 / Open" },
  { label: "Philosophy", value: "Clarity Over Complexity" }
];

export default function Profile() {
  return (
    <section id="profile" className="py-40 p-8 md:p-16 bg-muted/20 border-t border-ink/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        {/* Left Column - Image/Portrait */}
        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-muted relative overflow-hidden rounded-none shadow-sm"
          >
            <img 
              src={profileImg} 
              alt="Sunday Emmanuel" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 ease-out"
            />
          </motion.div>
          
          <div className="mt-12 flex justify-between items-start">
            <div>
              <span className="micro-label opacity-40">The Professional</span>
              <h3 className="font-serif text-4xl mt-3 tracking-tighter">Sunday Emmanuel</h3>
            </div>
            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <a 
                  key={social.name} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-ink/5 flex items-center justify-center hover:bg-ink hover:text-bg transition-all duration-500"
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-7 flex flex-col justify-between py-4">
          <div className="max-w-xl">
            <span className="micro-label mb-10 block opacity-40">02 — Mission Statement</span>
            <p className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tighter mb-12 text-ink/90">
              Transforming complex business challenges into <span className="italic">seamless</span> digital experiences.
            </p>
            <p className="text-xl text-ink/60 leading-relaxed font-light mb-16 tracking-tight">
              My work exists at the intersection of data-driven marketing and technical precision. I build systems that prioritize performance without compromising on the human experience. Whether it's a management platform or a growth strategy, I focus on measurable results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 border-t border-ink/10 pt-16">
            {FACTS.map((fact) => (
              <div key={fact.label} className="group">
                <span className="micro-label block mb-3 opacity-30 group-hover:opacity-60 transition-opacity">{fact.label}</span>
                <span className="text-sm font-medium tracking-tight">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
