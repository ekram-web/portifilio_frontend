// import { motion } from 'framer-motion';

// const navLinks = [
//   { name: 'Home', href: '#' },
//   { name: 'About', href: '#about' },
//   { name: 'Portfolio', href: '#portfolio' },
//   { name: 'Contact', href: '#contact' },

// ];

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-2 bg-gradient-to-r from-[#18122B]/80 via-[#393053]/80 to-[#443C68]/80 backdrop-blur-xl shadow-2xl border-b border-white/10">
//       {/* Logo/Name */}
//       <div className="flex items-center gap-4">
//         {/* <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-3xl shadow-lg">D</div> */}
//         {/* <span className="text-white text-2xl font-extrabold tracking-wide font-sans">Demo Name</span> */}
//         {/* Animated Badge */}
//         <motion.span
//           className="ml-6 flex items-center gap-2 px-4 py-1 rounded-full bg-[#232526]/80 text-green-400 font-semibold text-base shadow-lg border border-green-400/30"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1, boxShadow: [
//             '0 0 0px 0px #22c55e',
//             '0 0 16px 4px #22c55e',
//             '0 0 0px 0px #22c55e',
//           ] }}
//           transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
//         >
//           <span className="inline-block w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></span>
//           Ready to Innovate
//         </motion.span>
//       </div>
//       {/* Nav Links */}
//       <ul className="flex gap-12 text-white font-bold text-lg font-sans">
//         {navLinks.map(link => (
//           <li key={link.name}>
//             <a href={link.href} className="relative group px-2">
//               {link.name}
//               <span className="block h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      className="
      fixed top-0 left-0 w-full z-50 
      flex items-center justify-between
      px-12 py-3 
      bg-[#0A0F1F]/70 
      backdrop-blur-2xl
      border-b border-white/10 
      shadow-[0_4px_30px_rgba(0,0,0,0.4)]
    "
    >
      {/* Brand */}
      <div className="flex items-center gap-4">
        {/* Futuristic glow badge */}
        <motion.div
          className="
            px-5 py-1.5 
            rounded-full 
            flex items-center gap-2
            text-[#67e8f9] 
            border border-cyan-400/40
            bg-gradient-to-br from-[#0A1A2F]/40 to-[#11263F]/60
            shadow-[0_0_12px_rgba(0,255,255,0.35)]
            font-semibold tracking-wide
          "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          Next-Gen Experience
        </motion.div>
      </div>

      {/* Navigation links */}
      <ul className="flex gap-12 text-[#E2E8F0] font-bold text-lg tracking-wide">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="relative group">
              {link.name}

              {/* neon hover underline */}
              <span
                className="
                block h-[3px] 
                bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 
                scale-x-0 group-hover:scale-x-100 
                transition-transform duration-400 origin-left
                rounded-full shadow-[0_0_10px_#38bdf8]
              "
              ></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
