import { motion } from 'framer-motion';

const posts = [
  { title: 'How to Build Animated Portfolios', date: '2024-07-01', desc: 'A guide to creating stunning animated portfolios with React and Tailwind.', link: '#' },
  { title: 'Mastering Framer Motion', date: '2024-06-15', desc: 'Tips and tricks for advanced animations in React.', link: '#' },
  { title: 'Why Dark Mode Rocks', date: '2024-05-20', desc: 'The benefits of dark mode in modern web design.', link: '#' },
];

export default function Blog() {
  return (
    <section id="blog" className="w-full py-20 bg-gradient-to-b from-[#1a1a2e] to-[#232526] flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Blog</h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl">
        {posts.map((post, i) => (
          <motion.a
            key={post.title}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#232526] rounded-2xl shadow-xl overflow-hidden w-80 hover:scale-105 transition-transform flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
            viewport={{ once: false }}
          >
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
              <span className="text-gray-400 text-sm mb-2">{post.date}</span>
              <p className="text-gray-300 mb-4 flex-1">{post.desc}</p>
              <span className="text-blue-400 font-semibold">Read More →</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
} 