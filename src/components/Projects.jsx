import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiFirebase, SiVercel, SiNetlify } from "react-icons/si";
import { FiExternalLink, FiChevronRight } from "react-icons/fi";

import appleImg from "../assets/project/apple.png";
import amazonImg from "../assets/project/Amazon-clone.png";
import evangadiImg from "../assets/project/evangadi_fourm.png";
import netflixImg from "../assets/project/netflix.png";
import besiraImg from "../assets/project/besira.png";
import adminBesiraImg from "../assets/project/admin_besira.png";
import akadmin from "../assets/project/ak-admin.png";
import akweb from "../assets/project/ak-web.png";

const techIcons = {
  react: <FaReact className="w-6 h-6" />,
  node: <FaNodeJs className="w-6 h-6" />,
  javascript: <SiJavascript className="w-6 h-6" />,
  html: <FaHtml5 className="w-6 h-6" />,
  css: <FaCss3Alt className="w-6 h-6" />,
  firebase: <SiFirebase className="w-6 h-6" />,
  vercel: <SiVercel className="w-6 h-6" />,
  netlify: <SiNetlify className="w-6 h-6" />,
};

const projects = [
  {
    title: "Besira TV",
    desc: "A comprehensive streaming platform and content management system for Besira TV, featuring modern UI/UX, responsive design, and advanced content organization.",
    img: besiraImg,
    link: "https://basirahtv.com/",
    tech: ["react", "javascript", "html", "css"],
    category: "Full Stack Development",
  },
  {
    title: "Admin Besira",
    desc: "Administrative dashboard and content management system for Besira TV, providing comprehensive control over content, users, and platform management.",
    img: adminBesiraImg,
    link: null,
    tech: ["react", "javascript", "html", "css"],
    category: "Full Stack Development",
  },
  {
    title: "Ak-vision website",
    desc: "A comprehensive streaming platform and content management system for Besira TV, featuring modern UI/UX, responsive design, and advanced content organization.",
    img: akweb,
    link: "https://website.akvision.net/",
    tech: ["react", "javascript", "html", "css"],
    category: "Full Stack Development",
  },
  {
    title: "ak-vision Admin",
    desc: "Administrative dashboard and content management system for ak-vision website, providing comprehensive control over content, users, and platform management.",
    img: akadmin,
    link: null,
    tech: ["react", "javascript", "html", "css"],
    category: "Full Stack Development",
  },

  {
    title: "Apple Clone",
    desc: "A responsive Apple website clone with modern design, featuring product showcases, navigation, and interactive elements.",
    img: appleImg,
    link: "https://ekram-web.netlify.app/apple-responsive-staring-base-code/",
    tech: ["html", "css", "javascript"],
    category: "Frontend Development",
  },
  {
    title: "Amazon Clone",
    desc: "A full-featured e-commerce platform clone with product listings, shopping cart, user authentication, and payment integration.",
    img: amazonImg,
    link: "https://full-clone-amazon.netlify.app/",
    tech: ["react", "node", "firebase"],
    category: "Full Stack Development",
  },
  {
    title: "Evangadi Forum",
    desc: "A community forum platform with user registration, discussions, real-time messaging, and content management system.",
    img: evangadiImg,
    link: "https://evangadi-forum-beta7.vercel.app/",
    tech: ["react", "node", "firebase", "vercel"],
    category: "Full Stack Development",
  },
  {
    title: "Netflix Clone",
    desc: "A streaming platform clone with movie browsing, video player, user profiles, and recommendation system.",
    img: netflixImg,
    link: "https://calm-maamoul-1c6497.netlify.app/",
    tech: ["react", "javascript", "netlify"],
    category: "Frontend Development",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 bg-gradient-to-b from-[#1a1a2e] to-[#232526]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work and technical expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                {/* Project Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.img}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-lg"
                        title={tech}
                        aria-hidden="true"
                      >
                        {techIcons[tech] || null}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 flex items-center gap-2"
                      >
                        Live Demo
                        <FiExternalLink className="inline-block" />
                      </a>
                    ) : (
                      <span className="text-gray-500 font-medium flex items-center gap-2">
                        No Live Demo
                        <FiExternalLink className="inline-block opacity-40" />
                      </span>
                    )}
                    <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2">
                      Details
                      <FiChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Let's work together
          </h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
            <FiChevronRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
