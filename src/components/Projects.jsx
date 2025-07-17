import { motion } from 'framer-motion';

const projects = [
  { title: 'AI Chatbot', desc: 'A smart chatbot powered by GPT-4.', img: 'https://placehold.co/400x200', link: '#' },
  { title: 'Portfolio Website', desc: 'A modern, animated portfolio.', img: 'https://placehold.co/400x200', link: '#' },
  { title: 'E-commerce Platform', desc: 'A scalable online store.', img: 'https://placehold.co/400x200', link: '#' },
];

export default function Projects() {
  return (
    <section id="portfolio" className="w-full py-20 bg-gradient-to-b from-[#1a1a2e] to-[#232526] flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Projects</h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden w-80 hover:scale-105 transition-transform flex flex-col border border-white/10 hover:border-blue-400 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
            viewport={{ once: false }}
          >
            <img src={project.img} alt={project.title} className="w-full h-40 object-cover group-hover:blur-[1px] transition-all" />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-1">{project.desc}</p>
              <span className="text-blue-400 font-semibold group-hover:text-blue-300 transition">View Project →</span>
            </div>
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              initial={{ boxShadow: '0 0 0px 0px #38bdf8' }}
              whileHover={{ boxShadow: '0 0 32px 8px #38bdf8' }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
} 