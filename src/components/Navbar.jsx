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
