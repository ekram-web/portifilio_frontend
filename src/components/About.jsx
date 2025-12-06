// import { motion } from 'framer-motion';
// import personimage from '../assets/imagebgremove.png';

// const highlights = [
//   { year: '2024', text: 'Started building amazing web apps.' },
//   { year: '2023', text: 'Graduated with a degree in Computer Science.' },
//   { year: '2022', text: 'Completed Fullstack Engineering certification.' },
// ];

// export default function About() {
//   return (
//     <section id="about" className="w-full py-20 bg-gradient-to-b from-[#1a1a2e] to-[#232526] flex flex-col items-center">
//       <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">About Me</h2>
//       <div className="flex flex-col md:flex-row items-center md:items-center md:justify-center gap-10 md:gap-10 mb-10 w-full max-w-5xl mx-auto">
//         {/* Pop-out image above a single ellipse */}
//         <div className="relative flex flex-col items-center w-80 h-[28rem] flex-shrink-0">
//           {/* Ellipse background, positioned lower */}
//           <svg
//             className="absolute left-1/2 -translate-x-1/2 bottom-0 z-0 pointer-events-none"
//             width="340"
//             height="260"
//             viewBox="0 0 340 260"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <defs>
//               <linearGradient id="ellipse-gradient" x1="0" y1="130" x2="340" y2="130" gradientUnits="userSpaceOnUse">
//                 <stop offset="0%" stopColor="#7f5af0">
//                   <animate attributeName="stop-color" values="#7f5af0;#00c6fb;#7f5af0" dur="4s" repeatCount="indefinite" />
//                 </stop>
//                 <stop offset="100%" stopColor="#00c6fb">
//                   <animate attributeName="stop-color" values="#00c6fb;#7f5af0;#00c6fb" dur="4s" repeatCount="indefinite" />
//                 </stop>
//               </linearGradient>
//               <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
//                 <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
//                 <feMerge>
//                   <feMergeNode in="coloredBlur"/>
//                   <feMergeNode in="SourceGraphic"/>
//                 </feMerge>
//               </filter>
//             </defs>
//             <ellipse
//               cx="170"
//               cy="130"
//               rx="155"
//               ry="115"
//               fill="none"
//               stroke="url(#ellipse-gradient)"
//               strokeWidth="10"
//               filter="url(#glow)"
//               opacity="0.95"
//             />
//           </svg>
//           {/* Person image, lifted up, softly rounded, with bottom/left fade */}
//           <motion.img
//             src={personimage}
//             alt="About"
//             className="w-72 h-96 object-contain rounded-2xl shadow-2xl fade-bottom-left"
//             style={{ marginTop: '-3.5rem' }}
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
//             viewport={{ once: false }}
//           />
//         </div>
//         {/* Right side: text and highlights stacked */}
//         <div className="flex flex-col justify-center md:items-start items-center max-w-2xl text-gray-200 text-lg text-center md:text-left md:ml-0 md:flex-1 gap-6 mt-8">
//           <span>
//             I am a passionate developer who loves building beautiful, animated, and high-performance web applications. Always ready to innovate and learn new things!
//           </span>
//           <div className="flex flex-col gap-4 w-full max-w-xl mt-10 md:ml-16">
//             {highlights.map((item, i) => (
//               <motion.div
//                 key={item.year}
//                 className="flex items-center gap-6"
//                 initial={{ opacity: 0, x: -40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
//                 viewport={{ once: false }}
//               >
//                 <div className="bg-blue-400 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow-lg">{item.year}</div>
//                 <div className="text-white text-lg">{item.text}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// } 

import { motion, useReducedMotion } from "framer-motion";
import { FaCode, FaPalette, FaStar } from "react-icons/fa";
import { MdAutoAwesome } from "react-icons/md";

import personimage from "../assets/imagebgremove.png";

const highlights = [
  { year: "2024", text: "Started building amazing web apps." },
  { year: "2023", text: "Graduated with a degree in Computer Science." },
  { year: "2022", text: "Completed Fullstack Engineering certification." },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="w-full py-20 bg-gradient-to-b from-[#1a1a2e] to-[#232526] flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-center md:justify-center gap-10 md:gap-10 mb-10 w-full max-w-5xl mx-auto">
        {/* Left: image with decorative icons */}
        <div className="relative flex flex-col items-center w-80 h-[28rem] flex-shrink-0">
          {/* Decorative icon ring (replaces inline SVG ellipse) */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-0 pointer-events-none w-[340px] h-[260px] rounded-full">
            <motion.div
              aria-hidden="true"
              className="relative w-full h-full"
              initial={reduceMotion ? {} : { rotate: 0 }}
              animate={reduceMotion ? {} : { rotate: [0, 8, -8, 0] }}
              transition={
                reduceMotion
                  ? {}
                  : { repeat: Infinity, duration: 8, ease: "easeInOut" }
              }
            >
              {/* Four decorative icons placed around the image */}
              <motion.span
                className="absolute -left-6 -top-6 text-2xl text-[#7f5af0] drop-shadow-lg"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FaStar />
              </motion.span>

              <motion.span
                className="absolute -right-6 -top-4 text-2xl text-[#00c6fb] drop-shadow-lg"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                viewport={{ once: true }}
              >
                <MdAutoAwesome />
              </motion.span>

              <motion.span
                className="absolute -right-8 -bottom-6 text-2xl text-[#7f5af0] drop-shadow-lg"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.14 }}
                viewport={{ once: true }}
              >
                <FaCode />
              </motion.span>

              <motion.span
                className="absolute -left-8 -bottom-6 text-2xl text-[#00c6fb] drop-shadow-lg"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <FaPalette />
              </motion.span>
            </motion.div>
          </div>

          {/* Person image, lifted up, softly rounded, with bottom/left fade */}
          <motion.img
            src={personimage}
            alt="Portrait of Ekram"
            loading="lazy"
            decoding="async"
            className="w-72 h-96 object-contain rounded-2xl shadow-2xl fade-bottom-left"
            style={{ marginTop: "-3.5rem" }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Right side: text and highlights stacked */}
        <div className="flex flex-col justify-center md:items-start items-center max-w-2xl text-gray-200 text-lg text-center md:text-left md:ml-0 md:flex-1 gap-6 mt-8">
          <span>
            I am a passionate developer who loves building beautiful, animated,
            and high-performance web applications. Always ready to innovate and
            learn new things!
          </span>
          <div className="flex flex-col gap-4 w-full max-w-xl mt-10 md:ml-16">
            {highlights.map((item, i) => (
              <motion.div
                key={item.year}
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-400 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow-lg">
                  {item.year}
                </div>
                <div className="text-white text-lg">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}