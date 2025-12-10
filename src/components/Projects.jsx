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
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiFirebase, SiVercel, SiNetlify } from "react-icons/si";
import {
  FiExternalLink,
  FiChevronRight,
  FiX,
  FiLayers,
  FiCheckCircle,
  FiSmartphone,
  FiMonitor,
} from "react-icons/fi";

// Import your images
import appleImg from "../assets/project/apple.png";
import amazonImg from "../assets/project/Amazon-clone.png";
import evangadiImg from "../assets/project/evangadi_fourm.png";
import netflixImg from "../assets/project/netflix.png";
import besiraImg from "../assets/project/besira.png";
import adminBesiraImg from "../assets/project/admin_besira.png";
import akadmin from "../assets/project/ak-admin.png";
import akweb from "../assets/project/ak-web.png";

// Tech Icons Map
const techIcons = {
  react: <FaReact className="w-5 h-5" style={{ color: "#61DAFB" }} />,
  node: <FaNodeJs className="w-5 h-5" style={{ color: "#3C873A" }} />,
  javascript: <SiJavascript className="w-5 h-5" style={{ color: "#F7DF1E" }} />,
  html: <FaHtml5 className="w-5 h-5" style={{ color: "#E34F26" }} />,
  css: <FaCss3Alt className="w-5 h-5" style={{ color: "#1572B6" }} />,
  firebase: <SiFirebase className="w-5 h-5" style={{ color: "#FFCA28" }} />,
  vercel: <SiVercel className="w-5 h-5" style={{ color: "#000" }} />,
  netlify: <SiNetlify className="w-5 h-5" style={{ color: "#00C7B7" }} />,
};

// DATA: Added 'gallery' array.
// NOTE: For now I repeated the main image in the gallery.
// You should import your mobile screenshots and add them to the gallery array.
const projects = [
  {
    title: "AK-Vision Website",
    desc: "Corporate website with responsive UI, animations, and optimized structure.",
    longDesc:
      "A high-performance corporate website designed for AK-Vision. It features advanced GSAP animations, a fully responsive grid system, and SEO optimization to ensure high visibility.",
    features: ["Custom CSS Animations", "SEO Optimized", "Mobile First Design"],
    img: akweb,
    // ADD YOUR MOBILE IMAGES HERE
    gallery: [akweb, akadmin, appleImg],
    link: "https://website.akvision.net/",
    tech: ["react", "javascript", "html", "css"],
  },
  {
    title: "Admin Besira",
    desc: "Admin dashboard with analytics, content management, and advanced tooling.",
    longDesc:
      "A comprehensive internal tool for managing the Besira platform. This dashboard allows admins to visualize user data via Chart.js and manage content CMS-style.",
    features: [
      "Real-time Analytics",
      "Role-based Access Control",
      "Data Visualization",
    ],
    img: adminBesiraImg,
    gallery: [adminBesiraImg, besiraImg],
    link: null,
    tech: ["react", "javascript", "html", "css"],
  },
  {
    title: "Evangadi Forum",
    desc: "Full forum system with user accounts, threads, comments, and real-time updates.",
    longDesc:
      "A StackOverflow-inspired Q&A forum with secure JWT authentication and a dynamic frontend that handles nested replies.",
    features: [
      "User Authentication (JWT)",
      "Question & Answer System",
      "REST API Integration",
    ],
    img: evangadiImg,
    gallery: [evangadiImg, amazonImg], // Example placeholder
    link: "https://evangadi-forum-beta7.vercel.app/",
    tech: ["react", "node", "firebase", "vercel"],
  },
  {
    title: "AK-Vision Admin",
    desc: "Admin panel dashboard with charts, analytics, and user management.",
    longDesc:
      "The backend control center for AK-Vision. Built to handle large datasets, it provides a clean interface for monitoring business metrics.",
    features: [
      "Interactive Charts",
      "Client Management System",
      "Automated Reports",
    ],
    img: akadmin,
    gallery: [akadmin, akweb],
    link: null,
    tech: ["react", "javascript", "html", "css"],
  },
  {
    title: "Besira TV",
    desc: "A modern streaming platform with CMS, optimized UI, and smooth user experience.",
    longDesc:
      "A custom-built video streaming platform similar to YouTube. Focuses on high-speed video delivery and custom player interface.",
    features: [
      "Video Streaming API",
      "Custom Player Controls",
      "Playlist Management",
    ],
    img: besiraImg,
    gallery: [besiraImg, adminBesiraImg],
    link: "https://basirahtv.com/",
    tech: ["react", "javascript", "html", "css"],
  },
  {
    title: "Netflix Clone",
    desc: "Streaming UI with categories, animations, responsive player layout.",
    longDesc:
      "A pixel-perfect recreation of the Netflix UI. It pulls data dynamically from the TMDB API to show trending movies.",
    features: [
      "TMDB API Integration",
      "Trailer Popups",
      "Horizontal Scrolling Lists",
    ],
    img: netflixImg,
    gallery: [besiraImg, adminBesiraImg],
    link: "https://calm-maamoul-1c6497.netlify.app/",
    tech: ["react", "javascript", "netlify"],
  },
  {
    title: "Amazon Clone",
    desc: "E-commerce clone with cart, Firebase auth, and product management system.",
    longDesc:
      "A fully functional e-commerce app with cart logic, user authentication, and checkout simulation.",
    features: ["Add to Cart Logic", "Firebase Auth", "Checkout Process"],
    img: amazonImg,
    gallery: [amazonImg],
    link: "https://full-clone-amazon.netlify.app/",
    tech: ["react", "node", "firebase"],
  },
  {
    title: "Apple Clone",
    desc: "Animated Apple landing page clone with clean layout and smooth scroll.",
    longDesc:
      "Focusing on pure frontend aesthetics, this project recreates the smooth scrolling and high-fidelity animations found on Apple's product pages.",
    features: [
      "Smooth Parallax Scroll",
      "High-res Image Handling",
      "Minimalist UI",
    ],
    img: appleImg,
    gallery: [appleImg],
    link: "https://ekram-web.netlify.app/apple-responsive-staring-base-code/",
    tech: ["html", "css", "javascript"],
  },
  
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      // Set the default image to the main project image
      setActiveImage(selectedProject.img);
    } else {
      document.body.style.overflow = "unset";
      setActiveImage(null);
    }
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="w-full py-24 bg-[#0f0f14] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-transparent blur-3xl opacity-30 pointer-events-none"></div>

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
            Elegant. Fast. Professional.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-500/40 shadow-xl cursor-pointer hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.desc}
                </p>
                <div className="mt-auto">
                  <button className="text-blue-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    View Details <FiChevronRight />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white rounded-xl text-lg font-medium shadow-lg shadow-blue-600/20 transition-all duration-300"
          >
            Contact Me <FiChevronRight />
          </a>
        </motion.div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            ></div>

            {/* Modal Card */}
            <motion.div
              className="bg-[#1a1a20] w-full max-w-6xl h-[90vh] rounded-3xl shadow-2xl relative border border-white/10 flex flex-col md:flex-row overflow-hidden"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
            >
              {/* === LEFT SIDE: IMAGE GALLERY === */}
              <div className="w-full md:w-3/5 bg-black relative flex flex-col justify-between h-1/2 md:h-full">
                {/* Main Image Display */}
                <div className="relative w-full h-full p-4 md:p-8 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={activeImage}
                      alt="Project View"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/5"
                    />
                  </AnimatePresence>
                </div>

                {/* Thumbnail Strip */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 p-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 z-10 max-w-[90%] overflow-x-auto custom-scrollbar">
                  {/* Ensure main image is option 1 */}
                  <button
                    onClick={() => setActiveImage(selectedProject.img)}
                    className={`relative w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      activeImage === selectedProject.img
                        ? "border-blue-500 scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={selectedProject.img}
                      className="w-full h-full object-cover"
                      alt="Main"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <FiMonitor className="text-white text-xs" />
                    </div>
                  </button>

                  {/* Gallery Images */}
                  {selectedProject.gallery?.map(
                    (img, idx) =>
                      img !== selectedProject.img && (
                        <button
                          key={idx}
                          onClick={() => setActiveImage(img)}
                          className={`relative w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                            activeImage === img
                              ? "border-blue-500 scale-105"
                              : "border-transparent opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={img}
                            className="w-full h-full object-cover"
                            alt={`Gallery ${idx}`}
                          />
                          {/* Optional: Icon to indicate mobile vs desktop if you wanted to get fancy with logic, for now generic icon */}
                          {idx % 2 !== 0 ? (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <FiSmartphone className="text-white text-xs" />
                            </div>
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <FiMonitor className="text-white text-xs" />
                            </div>
                          )}
                        </button>
                      )
                  )}
                </div>
              </div>

              {/* === RIGHT SIDE: DETAILS === */}
              <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col h-1/2 md:h-full overflow-y-auto bg-[#1a1a20]">
                {/* Close Button */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {selectedProject.title}
                    </h2>
                    <span className="text-blue-400 text-sm font-medium tracking-wide">
                      PROJECT DETAILS
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 bg-white/5 hover:bg-red-500/20 hover:text-red-500 rounded-full text-gray-400 transition"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                  {selectedProject.longDesc || selectedProject.desc}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                    <FiLayers className="text-blue-500" /> Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features?.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-400 text-sm bg-white/5 p-2 rounded-lg border border-white/5"
                      >
                        <FiCheckCircle className="text-green-500 text-sm shrink-0" />{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                    Built With
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/20 text-blue-300 text-xs md:text-sm"
                      >
                        {techIcons[t]}
                        <span className="capitalize">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-3">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-center transition shadow-lg shadow-blue-600/20 flex justify-center items-center gap-2"
                    >
                      Visit Live Site <FiExternalLink />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full border border-white/10 hover:bg-white/5 text-gray-300 py-3 rounded-xl font-medium transition"
                  >
                    Close Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
