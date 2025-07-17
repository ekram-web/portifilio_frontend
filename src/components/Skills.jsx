import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#61DAFB" strokeWidth="3" /><ellipse cx="20" cy="20" rx="10" ry="18" stroke="#61DAFB" strokeWidth="3" /><ellipse cx="20" cy="20" rx="18" ry="10" stroke="#61DAFB" strokeWidth="3" /><circle cx="20" cy="20" r="3" fill="#61DAFB" /></svg>
  ) },
  { name: 'Node.js', icon: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none"><polygon points="20,5 35,13 35,27 20,35 5,27 5,13" fill="#3C873A" /></svg>
  ) },
  { name: 'Tailwind', icon: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none"><path d="M10 25c0-5 5-10 10-10s10 5 10 10" stroke="#38BDF8" strokeWidth="3" /><path d="M10 30c0-3 3-6 6-6s6 3 6 6" stroke="#38BDF8" strokeWidth="3" /></svg>
  ) },
  { name: 'GSAP', icon: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#88CE02" strokeWidth="3" /><path d="M10 30 L30 10" stroke="#88CE02" strokeWidth="3" /></svg>
  ) },
  { name: 'Framer Motion', icon: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none"><rect x="10" y="10" width="20" height="20" fill="#fff" stroke="#0055FF" strokeWidth="3" /><path d="M10 10 L30 30" stroke="#0055FF" strokeWidth="3" /></svg>
  ) },
  { name: 'Firebase', icon: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none"><polygon points="10,30 20,10 30,30" fill="#FFA000" /><polygon points="15,30 20,20 25,30" fill="#FFC400" /></svg>
  ) },
  { name: 'MongoDB', icon: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none"><path d="M20 35 Q20 20 10 10 Q20 25 30 10 Q20 20 20 35" fill="#47A248" /></svg>
  ) },
  { name: 'Next.js', icon: (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#fff" strokeWidth="3" /><path d="M10 30 L30 10" stroke="#fff" strokeWidth="3" /></svg>
  ) },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 bg-gradient-to-b from-[#232526] to-[#1a1a2e] flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center bg-[#232526]/80 rounded-xl p-6 shadow-lg hover:scale-110 transition-transform border border-white/10 hover:border-blue-400 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
            viewport={{ once: false }}
          >
            <span className="mb-2 group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.7)] transition-all">{skill.icon}</span>
            <span className="text-white text-lg font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 