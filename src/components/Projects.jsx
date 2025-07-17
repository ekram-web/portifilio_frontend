import { motion } from 'framer-motion';

// Demo tech stack icons (SVGs)
const techIcons = [
  <svg key="react" className="w-6 h-6" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#61DAFB" strokeWidth="3" /><ellipse cx="20" cy="20" rx="10" ry="18" stroke="#61DAFB" strokeWidth="3" /><ellipse cx="20" cy="20" rx="18" ry="10" stroke="#61DAFB" strokeWidth="3" /><circle cx="20" cy="20" r="3" fill="#61DAFB" /></svg>,
  <svg key="node" className="w-6 h-6" viewBox="0 0 40 40" fill="none"><polygon points="20,5 35,13 35,27 20,35 5,27 5,13" fill="#3C873A" /></svg>,
  <svg key="tailwind" className="w-6 h-6" viewBox="0 0 40 40" fill="none"><path d="M10 25c0-5 5-10 10-10s10 5 10 10" stroke="#38BDF8" strokeWidth="3" /><path d="M10 30c0-3 3-6 6-6s6 3 6 6" stroke="#38BDF8" strokeWidth="3" /></svg>,
];

const projects = [
  { title: 'AI Chatbot', desc: 'A smart chatbot powered by GPT-4.', img: 'https://placehold.co/400x200', link: '#', tech: [0,1,2] },
  { title: 'Portfolio Website', desc: 'A modern, animated portfolio.', img: 'https://placehold.co/400x200', link: '#', tech: [0,2] },
  { title: 'E-commerce Platform', desc: 'A scalable online store.', img: 'https://placehold.co/400x200', link: '#', tech: [1,2] },
];

export default function Projects() {
  return (
    <section id="portfolio" className="w-full py-20 bg-gradient-to-b from-[#1a1a2e] to-[#232526] flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Projects</h2>
      <div className="w-full max-w-6xl overflow-x-auto pb-4">
        <div className="flex gap-10 min-w-[700px] md:min-w-[1100px] px-4 md:px-0 snap-x snap-mandatory">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden w-80 min-w-[320px] flex-shrink-0 flex flex-col border-2 border-transparent hover:border-blue-400 group snap-center transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.045 }}
            >
              {/* Animated glowing border */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none z-10"
                initial={{ boxShadow: '0 0 0px 0px #7f5af0' }}
                whileHover={{ boxShadow: '0 0 32px 8px #7f5af0, 0 0 64px 16px #00c6fb' }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
              <img src={project.img} alt={project.title} className="w-full h-44 object-cover group-hover:blur-[2px] transition-all duration-300" />
              <div className="p-6 flex-1 flex flex-col z-20">
                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{project.desc}</p>
                <div className="flex gap-2 mb-4">
                  {project.tech.map(idx => techIcons[idx])}
                </div>
                <motion.span
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300 transition cursor-pointer mt-auto border-b-2 border-blue-400/0 group-hover:border-blue-400/80 pb-1"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  View Project
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </motion.span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 