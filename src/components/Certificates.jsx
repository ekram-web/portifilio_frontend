import { motion } from 'framer-motion';

const certificates = [
  { title: 'React Developer', org: 'Meta', year: 2023 },
  { title: 'Fullstack Engineer', org: 'Coursera', year: 2022 },
  { title: 'AI Specialist', org: 'Google', year: 2024 },
];

export default function Certificates() {
  return (
    <section id="certificates" className="w-full py-20 bg-gradient-to-b from-[#232526] to-[#1a1a2e] flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Certificates</h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.title}
            className="bg-[#232526] rounded-xl p-8 shadow-lg w-72 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-bold text-blue-300 mb-2">{cert.title}</h3>
            <p className="text-white mb-1">{cert.org}</p>
            <span className="text-gray-400 text-sm">{cert.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 