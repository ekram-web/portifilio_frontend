// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
// import { SiJavascript, SiFirebase, SiVercel, SiNetlify } from "react-icons/si";
// import { FiExternalLink, FiChevronRight } from "react-icons/fi";

// import appleImg from "../assets/project/apple.png";
// import amazonImg from "../assets/project/Amazon-clone.png";
// import evangadiImg from "../assets/project/evangadi_fourm.png";
// import netflixImg from "../assets/project/netflix.png";
// import besiraImg from "../assets/project/besira.png";
// import adminBesiraImg from "../assets/project/admin_besira.png";
// import akadmin from "../assets/project/ak-admin.png";
// import akweb from "../assets/project/ak-web.png";

// const techIcons = {
//   react: <FaReact className="w-6 h-6" style={{ color: "#61DAFB" }} />,
//   node: <FaNodeJs className="w-6 h-6" style={{ color: "#3C873A" }} />,
//   javascript: <SiJavascript className="w-6 h-6" style={{ color: "#F7DF1E" }} />,
//   html: <FaHtml5 className="w-6 h-6" style={{ color: "#E34F26" }} />,
//   css: <FaCss3Alt className="w-6 h-6" style={{ color: "#1572B6" }} />,
//   firebase: <SiFirebase className="w-6 h-6" style={{ color: "#FFCA28" }} />,
//   vercel: <SiVercel className="w-6 h-6" style={{ color: "#000000" }} />,
//   netlify: <SiNetlify className="w-6 h-6" style={{ color: "#00C7B7" }} />,
// };
// const projects = [
//   {
//     title: "Besira TV",
//     desc: "A comprehensive streaming platform and content management system for Besira TV, featuring modern UI/UX, responsive design, and advanced content organization.",
//     img: besiraImg,
//     link: "https://basirahtv.com/",
//     tech: ["react", "javascript", "html", "css"],
//     category: "Full Stack Development",
//   },
//   {
//     title: "Admin Besira",
//     desc: "Administrative dashboard and content management system for Besira TV, providing comprehensive control over content, users, and platform management.",
//     img: adminBesiraImg,
//     link: null,
//     tech: ["react", "javascript", "html", "css"],
//     category: "Full Stack Development",
//   },
//   {
//     title: "Ak-vision website",
//     desc: "A comprehensive streaming platform and content management system for Besira TV, featuring modern UI/UX, responsive design, and advanced content organization.",
//     img: akweb,
//     link: "https://website.akvision.net/",
//     tech: ["react", "javascript", "html", "css"],
//     category: "Full Stack Development",
//   },
//   {
//     title: "ak-vision Admin",
//     desc: "Administrative dashboard and content management system for ak-vision website, providing comprehensive control over content, users, and platform management.",
//     img: akadmin,
//     link: null,
//     tech: ["react", "javascript", "html", "css"],
//     category: "Full Stack Development",
//   },

//   {
//     title: "Apple Clone",
//     desc: "A responsive Apple website clone with modern design, featuring product showcases, navigation, and interactive elements.",
//     img: appleImg,
//     link: "https://ekram-web.netlify.app/apple-responsive-staring-base-code/",
//     tech: ["html", "css", "javascript"],
//     category: "Frontend Development",
//   },
//   {
//     title: "Amazon Clone",
//     desc: "A full-featured e-commerce platform clone with product listings, shopping cart, user authentication, and payment integration.",
//     img: amazonImg,
//     link: "https://full-clone-amazon.netlify.app/",
//     tech: ["react", "node", "firebase"],
//     category: "Full Stack Development",
//   },
//   {
//     title: "Evangadi Forum",
//     desc: "A community forum platform with user registration, discussions, real-time messaging, and content management system.",
//     img: evangadiImg,
//     link: "https://evangadi-forum-beta7.vercel.app/",
//     tech: ["react", "node", "firebase", "vercel"],
//     category: "Full Stack Development",
//   },
//   {
//     title: "Netflix Clone",
//     desc: "A streaming platform clone with movie browsing, video player, user profiles, and recommendation system.",
//     img: netflixImg,
//     link: "https://calm-maamoul-1c6497.netlify.app/",
//     tech: ["react", "javascript", "netlify"],
//     category: "Frontend Development",
//   },
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="w-full py-20 bg-gradient-to-b from-[#1a1a2e] to-[#232526]"
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: false }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Projects
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             A showcase of my latest work and technical expertise
//           </p>
//         </motion.div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               className="group"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: false }}
//             >
//               <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-300">
//                 {/* Project Image */}
//                 <div className="relative overflow-hidden h-64">
//                   <img
//                     src={project.img}
//                     alt={`${project.title} screenshot`}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     loading="lazy"
//                     decoding="async"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>

//                 {/* Project Content */}
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold text-white mb-3">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-300 mb-6 leading-relaxed">
//                     {project.desc}
//                   </p>

//                   {/* Tech Stack Icons */}
//                   <div className="flex flex-wrap gap-3 mb-6">
//                     {project.tech.map((tech, idx) => (
//                       <div
//                         key={idx}
//                         className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-lg"
//                         title={tech}
//                         aria-hidden="true"
//                       >
//                         {techIcons[tech] || null}
//                       </div>
//                     ))}
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex items-center gap-4">
//                     {project.link ? (
//                       <a
//                         href={project.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 flex items-center gap-2"
//                       >
//                         Live Demo
//                         <FiExternalLink className="inline-block" />
//                       </a>
//                     ) : (
//                       <span className="text-gray-500 font-medium flex items-center gap-2">
//                         No Live Demo
//                         <FiExternalLink className="inline-block opacity-40" />
//                       </span>
//                     )}
//                     <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2">
//                       Details
//                       <FiChevronRight />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <motion.div
//           className="text-center mt-20"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: false }}
//         >
//           <h3 className="text-3xl font-bold text-white mb-4">
//             Let's work together
//           </h3>
//           <p className="text-gray-300 mb-8 max-w-xl mx-auto">
//             I'm always interested in new opportunities and exciting projects.
//           </p>
//           <motion.a
//             href="#contact"
//             className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Get in Touch
//             <FiChevronRight />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// ???

// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
// import { SiJavascript, SiFirebase, SiVercel, SiNetlify } from "react-icons/si";
// import { FiExternalLink, FiChevronRight } from "react-icons/fi";

// import appleImg from "../assets/project/apple.png";
// import amazonImg from "../assets/project/Amazon-clone.png";
// import evangadiImg from "../assets/project/evangadi_fourm.png";
// import netflixImg from "../assets/project/netflix.png";
// import besiraImg from "../assets/project/besira.png";
// import adminBesiraImg from "../assets/project/admin_besira.png";
// import akadmin from "../assets/project/ak-admin.png";
// import akweb from "../assets/project/ak-web.png";

// const techIcons = {
//   react: <FaReact className="w-5 h-5" style={{ color: "#61DAFB" }} />,
//   node: <FaNodeJs className="w-5 h-5" style={{ color: "#3C873A" }} />,
//   javascript: <SiJavascript className="w-5 h-5" style={{ color: "#F7DF1E" }} />,
//   html: <FaHtml5 className="w-5 h-5" style={{ color: "#E34F26" }} />,
//   css: <FaCss3Alt className="w-5 h-5" style={{ color: "#1572B6" }} />,
//   firebase: <SiFirebase className="w-5 h-5" style={{ color: "#FFCA28" }} />,
//   vercel: <SiVercel className="w-5 h-5" style={{ color: "#000" }} />,
//   netlify: <SiNetlify className="w-5 h-5" style={{ color: "#00C7B7" }} />,
// };

// const projects = [
//   {
//     title: "Besira TV",
//     desc: "Streaming platform & CMS with modern UI and responsive design.",
//     img: besiraImg,
//     link: "https://basirahtv.com/",
//     tech: ["react", "javascript", "html", "css"],
//   },
//   {
//     title: "Admin Besira",
//     desc: "Dashboard for managing content, users, and platform settings.",
//     img: adminBesiraImg,
//     link: null,
//     tech: ["react", "javascript", "html", "css"],
//   },
//   {
//     title: "AK-Vision Website",
//     desc: "Corporate website with responsive pages and optimized UX.",
//     img: akweb,
//     link: "https://website.akvision.net/",
//     tech: ["react", "javascript", "html", "css"],
//   },
//   {
//     title: "AK-Vision Admin",
//     desc: "Admin panel with CMS and dashboard functionalities.",
//     img: akadmin,
//     link: null,
//     tech: ["react", "javascript", "html", "css"],
//   },
//   {
//     title: "Apple Clone",
//     desc: "Clean Apple landing page clone with responsive design.",
//     img: appleImg,
//     link: "https://ekram-web.netlify.app/apple-responsive-staring-base-code/",
//     tech: ["html", "css", "javascript"],
//   },
//   {
//     title: "Amazon Clone",
//     desc: "Full e-commerce clone with cart, auth, and Firebase backend.",
//     img: amazonImg,
//     link: "https://full-clone-amazon.netlify.app/",
//     tech: ["react", "node", "firebase"],
//   },
//   {
//     title: "Evangadi Forum",
//     desc: "Forum with discussions, accounts, and real-time messaging.",
//     img: evangadiImg,
//     link: "https://evangadi-forum-beta7.vercel.app/",
//     tech: ["react", "node", "firebase", "vercel"],
//   },
//   {
//     title: "Netflix Clone",
//     desc: "Streaming UI with movie browsing and responsive layout.",
//     img: netflixImg,
//     link: "https://calm-maamoul-1c6497.netlify.app/",
//     tech: ["react", "javascript", "netlify"],
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="w-full py-16 bg-[#1b1c24]">
//       <div className="max-w-6xl mx-auto px-4">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white">
//             Projects
//           </h2>
//           <p className="text-gray-300 text-lg mt-2">
//             Clean, modern, optimized — these are my best works.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               className="group"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: index * 0.08 }}
//             >
//               <div className="bg-white/10 rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/40 transition-all duration-300 shadow-xl">
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={project.img}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 <div className="p-5">
//                   <h3 className="text-xl text-white font-bold">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm mt-2">{project.desc}</p>

//                   <div className="flex flex-wrap gap-2 mt-4 mb-4">
//                     {project.tech.map((t, i) => (
//                       <div
//                         key={i}
//                         className="w-7 h-7 bg-white/10 rounded-md flex justify-center items-center"
//                       >
//                         {techIcons[t]}
//                       </div>
//                     ))}
//                   </div>

//                   <div className="flex justify-between items-center">
//                     {project.link ? (
//                       <a
//                         href={project.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-400 text-sm flex items-center gap-1 hover:text-blue-300"
//                       >
//                         Live <FiExternalLink />
//                       </a>
//                     ) : (
//                       <span className="text-gray-500 text-sm">No Demo</span>
//                     )}

//                     <button className="text-white text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-md flex items-center gap-1">
//                       Details <FiChevronRight />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//         >
//           <h3 className="text-2xl text-white font-bold">Let's work together</h3>
//           <p className="text-gray-300 text-sm mt-2 max-w-md mx-auto">
//             Interested in building modern digital experiences?
//           </p>
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm mt-5"
//           >
//             Get in Touch <FiChevronRight />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// !
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
  react: <FaReact className="w-4 h-4" style={{ color: "#61DAFB" }} />,
  node: <FaNodeJs className="w-4 h-4" style={{ color: "#3C873A" }} />,
  javascript: <SiJavascript className="w-4 h-4" style={{ color: "#F7DF1E" }} />,
  html: <FaHtml5 className="w-4 h-4" style={{ color: "#E34F26" }} />,
  css: <FaCss3Alt className="w-4 h-4" style={{ color: "#1572B6" }} />,
  firebase: <SiFirebase className="w-4 h-4" style={{ color: "#FFCA28" }} />,
  vercel: <SiVercel className="w-4 h-4" style={{ color: "#000" }} />,
  netlify: <SiNetlify className="w-4 h-4" style={{ color: "#00C7B7" }} />,
};

const projects = [
  {
    title: "AK-Vision Website",
    desc: "Corporate website with responsive UI, animations, and optimized structure.",
    img: akweb,
    link: "https://website.akvision.net/",
    tech: ["react", "javascript", "html", "css"],
  },
  {
    title: "Admin Besira",
    desc: "Admin dashboard with analytics, content management, and advanced tooling.",
    img: adminBesiraImg,
    link: null,
    tech: ["react", "javascript", "html", "css"],
  },
  {
    title: "Evangadi Forum",
    desc: "Full forum system with user accounts, threads, comments, and real-time updates.",
    img: evangadiImg,
    link: "https://evangadi-forum-beta7.vercel.app/",
    tech: ["react", "node", "firebase", "vercel"],
  },

  {
    title: "AK-Vision Admin",
    desc: "Admin panel dashboard with charts, analytics, and user management.",
    img: akadmin,
    link: null,
    tech: ["react", "javascript", "html", "css"],
  },
  {
    title: "Besira TV",
    desc: "A modern streaming platform with CMS, optimized UI, and smooth user experience.",
    img: besiraImg,
    link: "https://basirahtv.com/",
    tech: ["react", "javascript", "html", "css"],
  },
  {
    title: "Netflix Clone",
    desc: "Streaming UI with categories, animations, responsive player layout.",
    img: netflixImg,
    link: "https://calm-maamoul-1c6497.netlify.app/",
    tech: ["react", "javascript", "netlify"],
  },
  {
    title: "Amazon Clone",
    desc: "E-commerce clone with cart, Firebase auth, and product management system.",
    img: amazonImg,
    link: "https://full-clone-amazon.netlify.app/",
    tech: ["react", "node", "firebase"],
  },

  {
    title: "Apple Clone",
    desc: "Animated Apple landing page clone with clean layout and smooth scroll.",
    img: appleImg,
    link: "https://ekram-web.netlify.app/apple-responsive-staring-base-code/",
    tech: ["html", "css", "javascript"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-24 bg-[#0f0f14] relative overflow-hidden"
    >
      {/* Floating background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-transparent blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg mt-3">
            Elegant. Fast. Professional. Built with precision and passion.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotateX: 5, rotateY: 5 }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-500/40 shadow-xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4 mb-5">
                  {project.tech.map((t, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 bg-white/10 rounded-md flex justify-center items-center border border-white/10"
                    >
                      {techIcons[t]}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 text-sm flex items-center gap-1 hover:text-blue-300 transition"
                    >
                      Live Demo <FiExternalLink />
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm">No Demo</span>
                  )}

                  <button className="text-white text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md flex items-center gap-1 shadow-md transition">
                    Details <FiChevronRight />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white">
            Let's Build Something Great
          </h3>
          <p className="text-gray-300 mt-3">
            Start your next big idea with a clean, modern digital experience.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 mt-8 
              bg-gradient-to-r from-blue-600 to-purple-600 
              hover:opacity-90 text-white rounded-xl text-lg font-medium 
              shadow-lg shadow-blue-600/20 transition-all duration-300"
          >
            Contact Me <FiChevronRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
