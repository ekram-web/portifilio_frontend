// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
// import { SiTailwindcss, SiJavascript } from "react-icons/si";

// const skills = ["Fullstack Developer", "AI Engineer", ""];

// export default function Hero() {
//   const [skillIndex, setSkillIndex] = useState(0);
//   const [displayed, setDisplayed] = useState("");

//   useEffect(() => {
//     let timeout;
//     if (displayed.length < skills[skillIndex].length) {
//       timeout = setTimeout(() => {
//         setDisplayed(skills[skillIndex].slice(0, displayed.length + 1));
//       }, 60);
//     } else {
//       timeout = setTimeout(() => {
//         setDisplayed("");
//         setSkillIndex((skillIndex + 1) % skills.length);
//       }, 1200);
//     }
//     return () => clearTimeout(timeout);
//   }, [displayed, skillIndex]);

//   return (
//     <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-[#18122B] via-[#393053] to-[#443C68] overflow-hidden pt-32 px-8 md:px-16">
//       {/* Glowing orb */}
//       <motion.div
//         className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600 opacity-30 blur-3xl"
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//       />
//       {/* Hero text */}
//       <div className="z-10 flex-1 flex flex-col items-start justify-center">
//         <h1 className="text-5xl md:text-7xl font-extrabold text-white text-left mb-6 drop-shadow-lg">
//           Hi, I'm{" "}
//           <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             EKRAM
//           </span>
//         </h1>
//         {/* Typewriter effect */}
//         <div className="text-2xl md:text-3xl font-mono h-10 mb-8 flex items-center">
//           <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold animate-pulse drop-shadow">
//             {displayed}
//           </span>
//           <span className="text-blue-400 animate-pulse ml-1">|</span>
//         </div>
//         <p className="text-xl md:text-2xl text-gray-200 text-left mb-10 max-w-2xl">
//           I build <span className="text-blue-300 font-semibold">amazing</span>{" "}
//           digital experiences with{" "}
//           <span className="text-blue-300 font-semibold">animation</span> and{" "}
//           <span className="text-blue-300 font-semibold">detail</span>.
//         </p>
//         <motion.a
//           href="#projects"
//           className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-bold shadow-xl backdrop-blur-md hover:from-blue-600 hover:to-purple-600 transition text-lg sm:text-xl"
//           whileHover={{
//             scale: 1.08,
//             boxShadow: "0px 8px 32px 0px rgba(100, 0, 255, 0.3)",
//           }}
//           whileTap={{ scale: 0.97 }}
//           transition={{ type: "spring", stiffness: 400, damping: 10 }}
//         >
//           My Work
//         </motion.a>
//       </div>
//       {/* Floating SVG/tech illustration */}
//       <motion.div
//         className="hidden md:block flex-1 relative z-10"
//         initial={{ opacity: 0, x: 80 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.5, duration: 1 }}
//       >
//         {/* <svg
//           width="320"
//           height="320"
//           viewBox="0 0 320 320"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect
//             x="60"
//             y="100"
//             width="200"
//             height="120"
//             rx="24"
//             fill="#232526"
//             stroke="#38BDF8"
//             strokeWidth="4"
//           />
//           <rect
//             x="100"
//             y="140"
//             width="120"
//             height="40"
//             rx="10"
//             fill="#38BDF8"
//             opacity="0.7"
//           />
//           <circle cx="160" cy="160" r="16" fill="#a78bfa" />
//           <rect
//             x="140"
//             y="200"
//             width="40"
//             height="20"
//             rx="6"
//             fill="#fff"
//             opacity="0.8"
//           />
//           <rect
//             x="120"
//             y="80"
//             width="80"
//             height="20"
//             rx="6"
//             fill="#fff"
//             opacity="0.2"
//           />
//         </svg> */}

//         <div className="w-80 h-80 rounded-2xl bg-[#232526]/40 border border-white/10 p-6 flex items-center justify-center">
//           <div className="grid grid-cols-2 gap-4">
//             {[
//               { Icon: FaReact, color: "#61DAFB", label: "React" },
//               { Icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind CSS" },
//               { Icon: FaNodeJs, color: "#3C873A", label: "Node.js" },
//               { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
//               { Icon: FaHtml5, color: "#E34F26", label: "HTML5" },
//               { Icon: FaCss3Alt, color: "#1572B6", label: "CSS3" },
//             ].map(({ Icon, color, label }, i) => (
//               <motion.div
//                 key={i}
//                 className="flex items-center justify-center bg-white/5 rounded-xl p-3"
//                 whileHover={{ scale: 1.06 }}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.06 * i, type: "spring", stiffness: 160 }}
//                 viewport={{ once: false, amount: 0.3 }}
//                 aria-hidden="true"
//                 title={label}
//               >
//                 <Icon className="text-4xl" style={{ color }} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }



// ???



import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

export default function HeroNeonCube() {
  const skills = ["Fullstack Developer", "AI Enthusiast", "Creative Builder"];
  const [skillIndex, setSkillIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  // Typewriter effect (same pattern as before)
  useEffect(() => {
    let t;
    if (displayed.length < skills[skillIndex].length) {
      t = setTimeout(
        () => setDisplayed(skills[skillIndex].slice(0, displayed.length + 1)),
        70
      );
    } else {
      t = setTimeout(() => {
        setDisplayed("");
        setSkillIndex((s) => (s + 1) % skills.length);
      }, 1200);
    }
    return () => clearTimeout(t);
  }, [displayed, skillIndex]);

  // Face content for the cube (6 faces)
  const faces = [
    { Icon: FaReact, color: "#61DAFB", label: "React" },
    { Icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind" },
    { Icon: FaNodeJs, color: "#3C873A", label: "Node.js" },
    { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
    { Icon: FaHtml5, color: "#E34F26", label: "HTML5" },
    { Icon: FaCss3Alt, color: "#1572B6", label: "CSS3" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden bg-gradient-to-br from-[#0f0b17] via-[#271f3a] to-[#2d2340]">
      {/* Neon beam behind name (left) */}
      <div className="absolute left-0 top-0 h-full w-1/3 pointer-events-none -z-10 flex items-center justify-start">
        <div
          aria-hidden
          className="w-2/3 h-[60%] ml-10 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(96,165,250,0.18), rgba(124,58,237,0.14), rgba(6,182,212,0.06))",
            filter: "blur(40px)",
            transform: "skewX(-10deg)",
            opacity: 0.9,
          }}
        />
      </div>

      {/* Tiny particles */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute bg-white/20 rounded-full"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${(i * 73) % 100}%`,
            top: `${(i * 29) % 100}%`,
          }}
          animate={{ y: [0, -40, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{
            duration: 6 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
          aria-hidden
        />
      ))}

      <div className="z-10 container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        {/* Left column: text */}
        <div className="flex-1 max-w-xl text-left">
          <motion.h1
            initial={{ x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight text-white"
          >
            <span className="relative inline-block">
              {/* Neon beam underline and glow */}
              <span
                className="absolute left-0 bottom-0 w-full h-3 rounded-md -z-10"
                style={{
                  background: "linear-gradient(90deg,#60a5fa,#7c3aed,#06b6d4)",
                  filter: "blur(18px)",
                  opacity: 0.65,
                  transform: "skewX(-6deg)",
                }}
              />
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
                EKRAM
              </span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-2xl md:text-3xl font-mono text-blue-200 mt-5 flex items-center h-10">
              <span className="font-bold text-blue-300">{displayed}</span>
              <span className="ml-2 text-blue-400 animate-pulse">|</span>
            </div>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg">
              I build futuristic, high-performance web applications and
              delightful user experiences — combining animation, performance and
              thoughtful engineering.
            </p>

            <div className="mt-8 flex gap-4">
              <motion.a
                href="#projects"
                whileHover={{ y: -4 }}
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -4 }}
                className="inline-block px-6 py-3 rounded-full border border-white/10 text-white/90 font-medium"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right column: 3D cube */}
        <div className="flex-1 flex justify-center md:justify-end">
          <motion.div
            initial={{ rotateY: 0, rotateX: 8, opacity: 0, scale: 0.85 }}
            animate={{ rotateY: 360, rotateX: 8, opacity: 1, scale: 1 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
            className="w-64 h-64 perspective-[1200px] relative"
            aria-hidden="true"
          >
            {/* Cube container */}
            <div
              className="w-full h-full relative transform-style-preserve-3d"
              style={{
                transformStyle: "preserve-3d",
                animation: "spinCube 18s linear infinite",
              }}
            >
              {/* A helper to create cube faces */}
              {faces.map((f, idx) => {
                const angle = idx * 60;
                // 6 faces positioned around Y axis; we place them at different Z translations and rotations
                // We'll use inline styles for transforms per face
                const faceTransforms = [
                  `rotateY(0deg) translateZ(160px)`, // front
                  `rotateY(60deg) translateZ(160px)`,
                  `rotateY(120deg) translateZ(160px)`,
                  `rotateY(180deg) translateZ(160px)`,
                  `rotateY(240deg) translateZ(160px)`,
                  `rotateY(300deg) translateZ(160px)`,
                ];
                const { Icon, color, label } = f;
                return (
                  <div
                    key={idx}
                    className="absolute left-0 top-0 w-full h-full flex items-center justify-center rounded-xl bg-white/6 border border-white/6"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: faceTransforms[idx],
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Icon className="text-6xl" style={{ color }} />
                      <span className="text-sm text-white/80">{label}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* subtle base glow */}
            <div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                boxShadow:
                  "0 40px 120px rgba(99,102,241,0.18), 0 20px 60px rgba(56,189,248,0.06)",
                mixBlendMode: "screen",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* inline keyframes for cube rotation (works without external CSS file) */}
      <style jsx>{`
        @keyframes spinCube {
          0% {
            transform: rotateX(8deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(8deg) rotateY(360deg);
          }
        }
        /* ensure transform-style is set on container */
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        .perspective-\[1200px\] {
          perspective: 1200px;
        }
      `}</style>
    </section>
  );
}
