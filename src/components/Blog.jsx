import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiClock,
  FiCalendar,
  FiCpu,
  FiCode,
  FiZap,
} from "react-icons/fi";

const posts = [
  {
    title: "Building Animated Portfolios",
    date: "July 1, 2024",
    desc: "Create stunning, high-performance web experiences using Framer Motion and React.",
    link: "#",
    category: "Frontend",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Cyberpunk city
    icon: <FiZap />,
  },
  {
    title: "The Future of React Server Components",
    date: "June 15, 2024",
    desc: "Understanding how RSCs change the way we ship JavaScript to the browser.",
    link: "#",
    category: "Architecture",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop", // AI/Abstract
    icon: <FiCpu />,
  },
  {
    title: "Mastering Dark Mode UX",
    date: "May 20, 2024",
    desc: "Why dark mode is more than just flipping colors—contrast, depth, and accessibility.",
    link: "#",
    category: "Design",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop", // Retro Tech
    icon: <FiCode />,
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="w-full py-32 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* === COOL BACKGROUND EFFECT === */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Insights
              </span>
            </h2>
            <p className="text-gray-400 text-lg mt-4 max-w-lg">
              Deep dives into code, design, and the future of digital
              experiences.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors"
          >
            View All Posts <FiArrowRight />
          </motion.button>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.link}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col h-full bg-[#121218] border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                {/* The Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-transparent to-transparent opacity-90" />

                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-semibold text-blue-300 uppercase tracking-wider">
                    {post.icon} {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow relative">
                {/* Date & Time */}
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="text-blue-500" /> {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span className="flex items-center gap-1.5">
                    <FiClock className="text-purple-500" /> {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.desc}
                </p>

                {/* "Read More" Link */}
                <div className="mt-auto flex items-center text-white font-semibold group/link">
                  <span className="relative overflow-hidden pb-1">
                    Read Article
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform -translate-x-full group-hover/link:translate-x-0 transition-transform duration-300"></span>
                  </span>
                  <FiArrowRight className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Glow Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-3xl pointer-events-none transition-colors duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Mobile View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex md:hidden justify-center mt-12"
        >
          <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg">
            View All Posts <FiArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
