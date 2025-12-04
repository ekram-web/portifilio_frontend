import { motion } from "framer-motion";
import appleImg from "../assets/project/apple.png";
import amazonImg from "../assets/project/Amazon-clone.png";
import evangadiImg from "../assets/project/evangadi_fourm.png";
import netflixImg from "../assets/project/netflix.png";
import besiraImg from "../assets/project/besira.png";
import adminBesiraImg from "../assets/project/admin_besira.png";
import akadmin from "../assets/project/ak-admin.png";
import akweb from "../assets/project/ak-web.png";

// Tech stack icons (SVGs)
const techIcons = {
  react: (
    <svg key="react" className="w-6 h-6" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" stroke="#61DAFB" strokeWidth="3" />
      <ellipse
        cx="20"
        cy="20"
        rx="10"
        ry="18"
        stroke="#61DAFB"
        strokeWidth="3"
      />
      <ellipse
        cx="20"
        cy="20"
        rx="18"
        ry="10"
        stroke="#61DAFB"
        strokeWidth="3"
      />
      <circle cx="20" cy="20" r="3" fill="#61DAFB" />
    </svg>
  ),
  node: (
    <svg key="node" className="w-6 h-6" viewBox="0 0 40 40" fill="none">
      <polygon points="20,5 35,13 35,27 20,35 5,27 5,13" fill="#3C873A" />
    </svg>
  ),
  javascript: (
    <svg key="javascript" className="w-6 h-6" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="8" width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M16 20l2-2 2 2 2-2" stroke="#000" strokeWidth="2" />
    </svg>
  ),
  html: (
    <svg key="html" className="w-6 h-6" viewBox="0 0 40 40" fill="none">
      <path
        d="M8 8l4 4 4-4 4 4 4-4"
        stroke="#E34F26"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  css: (
    <svg key="css" className="w-6 h-6" viewBox="0 0 40 40" fill="none">
      <path
        d="M10 10l10 10 10-10"
        stroke="#1572B6"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  firebase: (
    <svg key="firebase" className="w-6 h-6" viewBox="0 0 40 40" fill="none">
      <path
        d="M20 8l12 8-4 16-8-4-8 4-4-16z"
        fill="#FFCA28"
        stroke="#F57C00"
        strokeWidth="2"
      />
    </svg>
  ),
  vercel: (
    <svg key="vercel" className="w-6 h-6" viewBox="0 0 40 40" fill="none">
      <path d="M20 8l12 12H8z" fill="#000000" />
    </svg>
  ),
  netlify: (
    <svg key="netlify" className="w-6 h-6" viewBox="0 0 40 40" fill="none">
      <path d="M8 20l12-12 12 12-12 12z" fill="#00AD9F" />
    </svg>
  ),
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
    img: besiraImg,
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
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                      >
                        {techIcons[tech]}
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
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    ) : (
                      <span className="text-gray-500 font-medium flex items-center gap-2">
                        No Live Demo
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )}
                    <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2">
                      Details
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
