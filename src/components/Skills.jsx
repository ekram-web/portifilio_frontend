// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaDocker,
//   FaAws,
//   FaPython,
//   FaJava,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaGithub,
//   FaDatabase,
//   FaLaravel,
// } from "react-icons/fa";

// import {
//   SiTypescript,
//   SiMongodb,
//   SiPostgresql,
//   SiMysql,
//   SiRedis,
//   SiExpress,
//   SiNextdotjs,
//   SiDjango,
//   SiGo,
//   SiFirebase,
//   SiKubernetes,
//   SiCypress,
//   SiJest,
//   SiTestinglibrary,
//   SiPostman,
//   SiNetlify,
//   SiRender,
//   SiHostinger,
//   SiCpanel,
//   SiSqlite,
//   SiSpring,
//   SiFastapi,
//   SiJquery,
//   SiGooglecloud,
//   SiVercel,
//   SiChakraui,
//   SiLaravel,
// } from "react-icons/si";

// const techStack = [
//   {
//     group: "Frontend",
//     items: [
//       // { name: "HTML5", icon: FaHtml5, color: "#e34c26" },
//       // { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
//       { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
//       { name: "React", icon: FaReact, color: "#61dafb" },
//       { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
//       { name: "Tailwind CSS", icon: SiChakraui, color: "#38bdf8" },
//     ],
//   },
//   {
//     group: "Backend",
//     items: [
//       { name: "Node.js", icon: FaNodeJs, color: "#3c873a" },
//       { name: "Express.js", icon: SiExpress, color: "#fff" },
//       { name: "laravel", icon: SiLaravel, color: "#f72b0cff" },
//       // { name: "Go", icon: SiGo, color: "#00add8" },
//     ],
//   },
//   {
//     group: "Backend Services",
//     items: [
//       // { name: "Supabase", icon: FaDatabase, color: "#3ecf8e" },
//       { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
//     ],
//   },
//   {
//     group: "DevOps",
//     items: [
//       { name: "Docker", icon: FaDocker, color: "#2496ed" },
//       // { name: "Kubernetes", icon: SiKubernetes, color: "#326ce5" },
//     ],
//   },
//   {
//     group: "Testing",
//     items: [
//       // { name: "Cypress", icon: SiCypress, color: "#17202c" },
//       // { name: "Jest", icon: SiJest, color: "#c21325" },
//       // { name: "Testing Library", icon: SiTestinglibrary, color: "#e33332" },
//       { name: "Postman", icon: SiPostman, color: "#ff6c37" },
//     ],
//   },
//   {
//     group: "Database",
//     items: [
//       { name: "MySQL", icon: SiMysql, color: "#00758f" },
//       { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
//       // { name: "Redis", icon: SiRedis, color: "#d82c20" },
//       // { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
//       // { name: "SQLite", icon: SiSqlite, color: "#003b57" },
//     ],
//   },
//   {
//     group: "Programming Languages",
//     items: [
//       { name: "Python", icon: FaPython, color: "rgba(55, 171, 59, 1)" },
//       // { name: "Go", icon: SiGo, color: "#00add8" },
//       { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
//       { name: "Java", icon: FaJava, color: "#007396" },
//     ],
//   },
//   {
//     // group: "Cloud",
//     // items: [
//     //   { name: "AWS", icon: FaAws, color: "#ff9900" },
//     //   { name: "Google Cloud", icon: SiGooglecloud, color: "#4285f4" },
//     // ],
//   },
//   {
//     group: "Deployment",
//     items: [
//       { name: "Vercel", icon: SiVercel, color: "#fff" },
//       { name: "Render", icon: SiRender, color: "#46e3b7" },
//       { name: "Hostinger", icon: SiHostinger, color: "#673de6" },
//       { name: "cPanel", icon: SiCpanel, color: "#ff6c2c" },
//       { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
//     ],
//   },
//   // {
//   //   group: "Experimenting - at least one mini project",
//   //   items: [
//   //     { name: "Laravel", icon: FaLaravel, color: "#ff2d20" },
//   //     { name: "Spring", icon: SiSpring, color: "#6db33f" },
//   //     { name: "FastAPI", icon: SiFastapi, color: "#009688" },
//   //     { name: "jQuery", icon: SiJquery, color: "#0769ad" },
//   //   ],
//   // },
// ];

// const leftColumn = [
//   "Frontend",
//   "Backend",
//   "Backend Services",
//   "DevOps",
//   "Testing",
// ];
// const rightColumn = [
//   "Database",
//   "Programming Languages",
//   "Cloud",
//   "Deployment",
//   "Experimenting - at least one mini project",
// ];

// function TechGroup({ group, items, groupIndex }) {
//   return (
//     <motion.div
//       className="mb-10"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: groupIndex * 0.1, duration: 0.7, type: "spring" }}
//       viewport={{ once: false, amount: 0.3 }}
//     >
//       <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">
//         {group}
//       </h3>

//       <div className="h-1 w-full bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 mb-5" />

//       <div className="flex flex-wrap gap-6">
//         {items.map(({ name, icon: Icon, color }, i) => (
//           <motion.div
//             key={name}
//             className="rounded-2xl bg-gradient-to-br from-[#232946]/80 to-[#393053]/80 p-4 flex flex-col items-center justify-center shadow-xl border border-blue-400/10 hover:border-blue-400/60 transition-all duration-300 cursor-pointer"
//             whileHover={{
//               scale: 1.13,
//               boxShadow: `0 0 24px 6px ${color}, 0 0 48px 12px #00c6fb`,
//             }}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.07, duration: 0.4, type: "spring" }}
//             viewport={{ once: false, amount: 0.3 }}
//           >
//             <Icon
//               className="text-3xl md:text-4xl mb-1 transition-all duration-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]"
//               style={{ color }}
//             />
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="relative w-full py-20 bg-gradient-to-b from-[#18122B] via-[#232946] to-[#232526] flex flex-col items-center overflow-hidden"
//     >
//       {/* Animated grid background */}
//       <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
//         <svg
//           width="100%"
//           height="100%"
//           className="w-full h-full"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <pattern
//               id="grid"
//               width="40"
//               height="40"
//               patternUnits="userSpaceOnUse"
//             >
//               <path
//                 d="M40 0 H0 V40"
//                 fill="none"
//                 stroke="#7f5af0"
//                 strokeWidth="0.5"
//               />
//             </pattern>
//           </defs>

//           <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       <motion.h2
//         className="relative z-10 text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-16 text-center drop-shadow-lg"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: false, amount: 0.3 }}
//       >
//         Tech Stack
//       </motion.h2>

//       <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
//         {/* Left Column */}
//         <div>
//           {leftColumn.map((group, idx) => {
//             const g = techStack.find((t) => t.group === group);
//             return g ? <TechGroup key={group} {...g} groupIndex={idx} /> : null;
//           })}
//         </div>

//         {/* Right Column */}
//         <div>
//           {rightColumn.map((group, idx) => {
//             const g = techStack.find((t) => t.group === group);
//             return g ? (
//               <TechGroup
//                 key={group}
//                 {...g}
//                 groupIndex={idx + leftColumn.length}
//               />
//             ) : null;
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// ???
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaDocker,
//   FaPython,
//   FaJava,
//   FaJs,
// } from "react-icons/fa";
// import {
//   SiTypescript,
//   SiMongodb,
//   SiPostgresql,
//   SiMysql,
//   SiExpress,
//   SiNextdotjs,
//   SiFirebase,
//   SiVercel,
//   SiRender,
//   SiHostinger,
//   SiCpanel,
//   SiNetlify,
//   SiChakraui,
//   SiLaravel,
//   SiPostman,
// } from "react-icons/si";

// const techStack = [
//   {
//     group: "Frontend",
//     items: [
//       { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
//       { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
//       { name: "React", icon: FaReact, color: "#61dafb" },
//       { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
//       { name: "Tailwind CSS", icon: SiChakraui, color: "#38bdf8" },
//     ],
//   },
//   {
//     group: "Backend",
//     items: [
//       { name: "Node.js", icon: FaNodeJs, color: "#3c873a" },
//       { name: "Express.js", icon: SiExpress, color: "#fff" },
//       { name: "Laravel", icon: SiLaravel, color: "#f72b0c" },
//     ],
//   },
//   {
//     group: "Database & DevOps",
//     items: [
//       { name: "MySQL", icon: SiMysql, color: "#00758f" },
//       { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
//       { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
//       { name: "Docker", icon: FaDocker, color: "#2496ed" },
//       { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
//     ],
//   },
//   {
//     group: "Deployment & Tools",
//     items: [
//       { name: "Vercel", icon: SiVercel, color: "#fff" },
//       { name: "Render", icon: SiRender, color: "#46e3b7" },
//       { name: "Hostinger", icon: SiHostinger, color: "#673de6" },
//       { name: "cPanel", icon: SiCpanel, color: "#ff6c2c" },
//       { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
//       { name: "Postman", icon: SiPostman, color: "#ff6c37" },
//     ],
//   },
//   {
//     group: "Programming Languages",
//     items: [
//       { name: "Python", icon: FaPython, color: "#37ab3b" },
//       { name: "Java", icon: FaJava, color: "#007396" },
//     ],
//   },
// ];

// function TechItem({ name, icon: Icon, color, index }) {
//   return (
//     <motion.div
//       key={name}
//       className="rounded-lg bg-gradient-to-br from-[#232946]/70 to-[#393053]/70 p-2 flex flex-col items-center justify-center shadow-md border border-blue-400/10 hover:border-blue-400/50 transition-all duration-200 cursor-pointer"
//       whileHover={{
//         scale: 1.08,
//         boxShadow: `0 0 15px 3px ${color}, 0 0 30px 6px #00c6fb`,
//       }}
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.03, duration: 0.3, type: "spring" }}
//       title={name}
//       aria-label={name}
//     >
//       <Icon className="text-2xl md:text-3xl mb-1" style={{ color }} />
//       <span className="text-xs md:text-sm text-white mt-0.5">{name}</span>
//     </motion.div>
//   );
// }

// function TechGroup({ group, items, groupIndex }) {
//   return (
//     <motion.div
//       className="mb-6 md:mb-8"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: groupIndex * 0.1, duration: 0.5, type: "spring" }}
//       viewport={{ once: false, amount: 0.3 }}
//     >
//       <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 drop-shadow-lg">
//         {group}
//       </h3>
//       <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 md:gap-3">
//         {items.map((item, i) => (
//           <TechItem key={item.name} {...item} index={i} />
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="relative w-full py-12 md:py-16 bg-gradient-to-b from-[#18122B] via-[#232946] to-[#232526] flex flex-col items-center overflow-hidden"
//     >
//       {/* Grid Background */}
//       <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
//         <svg
//           width="100%"
//           height="100%"
//           className="w-full h-full"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <pattern
//               id="grid"
//               width="40"
//               height="40"
//               patternUnits="userSpaceOnUse"
//             >
//               <path
//                 d="M40 0 H0 V40"
//                 fill="none"
//                 stroke="#7f5af0"
//                 strokeWidth="0.5"
//               />
//             </pattern>
//           </defs>
//           <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       <motion.h2
//         className="relative z-10 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-10 text-center drop-shadow-lg"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: false, amount: 0.3 }}
//       >
//         Tech Stack
//       </motion.h2>

//       <div className="relative z-10 w-full max-w-6xl px-4 md:px-6 flex flex-col gap-6">
//         {techStack.map((group, idx) => (
//           <TechGroup key={group.group} {...group} groupIndex={idx} />
//         ))}
//       </div>
//     </section>
//   );
// }

// !!!
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaJava,
  FaJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiVercel,
  SiRender,
  SiHostinger,
  SiCpanel,
  SiNetlify,
  SiChakraui,
  SiLaravel,
  SiPostman,
} from "react-icons/si";

// Ultra-dense tech stack
const techStack = [
  { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
  { name: "Tailwind CSS", icon: SiChakraui, color: "#38bdf8" },
  { name: "Node.js", icon: FaNodeJs, color: "#3c873a" },
  { name: "Express.js", icon: SiExpress, color: "#fff" },
  { name: "Laravel", icon: SiLaravel, color: "#f72b0c" },
  { name: "MySQL", icon: SiMysql, color: "#00758f" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "Docker", icon: FaDocker, color: "#2496ed" },
  { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
  { name: "Vercel", icon: SiVercel, color: "#fff" },
  { name: "Render", icon: SiRender, color: "#46e3b7" },
  { name: "Hostinger", icon: SiHostinger, color: "#673de6" },
  { name: "cPanel", icon: SiCpanel, color: "#ff6c2c" },
  { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37" },
  { name: "Python", icon: FaPython, color: "#37ab3b" },
  { name: "Java", icon: FaJava, color: "#007396" },
];

// Container animation: staggered fade-in
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

// Each tech item animation: float + rotate + horizontal drift
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.1, y: -3 },
  float: (i) => ({
    y: [0, -5 - (i % 5), 0], // vertical float
    x: [0, 3 - (i % 4), 0], // horizontal drift
    rotate: [0, 3 - (i % 3), 0], // subtle rotation
    transition: {
      duration: 3 + (i % 5),
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

function TechItem({ name, icon: Icon, color, index }) {
  return (
    <motion.div
      className="rounded-lg bg-gradient-to-br from-[#232946]/70 to-[#393053]/70 p-2 flex flex-col items-center justify-center shadow-md border border-blue-400/10 cursor-pointer"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      animate="float"
      custom={index}
      title={name}
      aria-label={name}
    >
      <Icon className="text-xl md:text-2xl mb-0.5" style={{ color }} />
      <span className="text-[10px] md:text-xs text-white">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-10 md:py-14 bg-gradient-to-b from-[#18122B] via-[#232946] to-[#232526] flex flex-col items-center overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20 animate-pulse">
        <svg
          width="100%"
          height="100%"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0 H0 V40"
                fill="none"
                stroke="#7f5af0"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.h2
        className="relative z-10 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Tech Stack
      </motion.h2>

      <motion.div
        className="relative z-10 w-full max-w-6xl px-4 md:px-6 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 md:gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {techStack.map((tech, idx) => (
          <TechItem key={tech.name} {...tech} index={idx} />
        ))}
      </motion.div>
    </section>
  );
}
