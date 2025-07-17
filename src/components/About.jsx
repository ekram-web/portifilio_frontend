import { motion } from 'framer-motion';

const highlights = [
  { year: '2024', text: 'Started building amazing web apps.' },
  { year: '2023', text: 'Graduated with a degree in Computer Science.' },
  { year: '2022', text: 'Completed Fullstack Engineering certification.' },
];

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-gradient-to-b from-[#1a1a2e] to-[#232526] flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">About Me</h2>
      <div className="max-w-2xl text-gray-200 text-lg text-center mb-10">
        I am a passionate developer who loves building beautiful, animated, and high-performance web applications. Always ready to innovate and learn new things!
      </div>
      <div className="flex flex-col gap-6 w-full max-w-xl">
        {highlights.map((item, i) => (
          <motion.div
            key={item.year}
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
            viewport={{ once: false }}
          >
            <div className="bg-blue-400 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow-lg">{item.year}</div>
            <div className="text-white text-lg">{item.text}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 