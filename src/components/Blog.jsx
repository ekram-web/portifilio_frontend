import { motion } from "framer-motion";
import { FiArrowRight, FiClock, FiCalendar, FiTag } from "react-icons/fi";

const posts = [
  {
    title: "How to Build Animated Portfolios",
    date: "July 1, 2024",
    desc: "A step-by-step guide to creating stunning, high-performance animated portfolios using React, Framer Motion, and Tailwind CSS.",
    link: "#",
    category: "Tutorial",
    readTime: "5 min read",
  },
  {
    title: "Mastering Framer Motion",
    date: "June 15, 2024",
    desc: "Deep dive into layout animations, shared layout transitions, and complex gesture handling in React applications.",
    link: "#",
    category: "Development",
    readTime: "8 min read",
  },
  {
    title: "Why Dark Mode Rocks",
    date: "May 20, 2024",
    desc: "Exploring the psychology of dark mode, contrast ratios, and how to implement a user-friendly dark theme switcher.",
    link: "#",
    category: "Design",
    readTime: "4 min read",
  },
  {
    title: "Why Dark Mode Rocks",
    date: "May 20, 2024",
    desc: "Exploring the psychology of dark mode, contrast ratios, and how to implement a user-friendly dark theme switcher.",
    link: "#",
    category: "Design",
    readTime: "4 min read",
  },
  {
    title: "Why Dark Mode Rocks",
    date: "May 20, 2024",
    desc: "Exploring the psychology of dark mode, contrast ratios, and how to implement a user-friendly dark theme switcher.",
    link: "#",
    category: "Design",
    readTime: "4 min read",
  },
];

// Animation variants for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Blog() {
  return (
    <section
      id="blog"
      className="w-full py-24 bg-[#0f0f14] relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Latest Articles
          </h2>
          <p className="text-gray-400 text-lg mt-3 max-w-2xl mx-auto">
            Insights on development, design, and the future of the web.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.link}
              variants={cardVariants}
              className="group relative flex flex-col bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="p-8 flex-1 flex flex-col">
                {/* Meta Header */}
                <div className="flex justify-between items-center mb-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  <div className="flex items-center gap-2 text-blue-400">
                    <FiTag />
                    <span>{post.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                  {post.desc}
                </p>

                {/* Footer / Read More */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                  <span className="flex items-center gap-2 text-gray-500 text-sm">
                    <FiCalendar /> {post.date}
                  </span>

                  <span className="flex items-center gap-1 text-white font-semibold group-hover:gap-2 transition-all duration-300">
                    Read Article <FiArrowRight className="text-blue-500" />
                  </span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
