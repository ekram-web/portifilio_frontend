import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

const skills = ["Fullstack Developer", "AI Engineer", ""];

export default function Hero() {
  const [skillIndex, setSkillIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeout;
    if (displayed.length < skills[skillIndex].length) {
      timeout = setTimeout(() => {
        setDisplayed(skills[skillIndex].slice(0, displayed.length + 1));
      }, 60);
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setSkillIndex((skillIndex + 1) % skills.length);
      }, 1200);
    }
    return () => clearTimeout(timeout);
  }, [displayed, skillIndex]);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-[#18122B] via-[#393053] to-[#443C68] overflow-hidden pt-32 px-8 md:px-16">
      {/* Glowing orb */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      {/* Hero text */}
      <div className="z-10 flex-1 flex flex-col items-start justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white text-left mb-6 drop-shadow-lg">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            EKRAM
          </span>
        </h1>
        {/* Typewriter effect */}
        <div className="text-2xl md:text-3xl font-mono h-10 mb-8 flex items-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold animate-pulse drop-shadow">
            {displayed}
          </span>
          <span className="text-blue-400 animate-pulse ml-1">|</span>
        </div>
        <p className="text-xl md:text-2xl text-gray-200 text-left mb-10 max-w-2xl">
          I build <span className="text-blue-300 font-semibold">amazing</span>{" "}
          digital experiences with{" "}
          <span className="text-blue-300 font-semibold">animation</span> and{" "}
          <span className="text-blue-300 font-semibold">detail</span>.
        </p>
        <motion.a
          href="#projects"
          className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-bold shadow-xl backdrop-blur-md hover:from-blue-600 hover:to-purple-600 transition text-lg sm:text-xl"
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 8px 32px 0px rgba(100, 0, 255, 0.3)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          My Work
        </motion.a>
      </div>
      {/* Floating SVG/tech illustration */}
      <motion.div
        className="hidden md:block flex-1 relative z-10"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* <svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="60"
            y="100"
            width="200"
            height="120"
            rx="24"
            fill="#232526"
            stroke="#38BDF8"
            strokeWidth="4"
          />
          <rect
            x="100"
            y="140"
            width="120"
            height="40"
            rx="10"
            fill="#38BDF8"
            opacity="0.7"
          />
          <circle cx="160" cy="160" r="16" fill="#a78bfa" />
          <rect
            x="140"
            y="200"
            width="40"
            height="20"
            rx="6"
            fill="#fff"
            opacity="0.8"
          />
          <rect
            x="120"
            y="80"
            width="80"
            height="20"
            rx="6"
            fill="#fff"
            opacity="0.2"
          />
        </svg> */}

        <div className="w-80 h-80 rounded-2xl bg-[#232526]/40 border border-white/10 p-6 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
            {[
              { Icon: FaReact, color: "#61DAFB", label: "React" },
              { Icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind CSS" },
              { Icon: FaNodeJs, color: "#3C873A", label: "Node.js" },
              { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
              { Icon: FaHtml5, color: "#E34F26", label: "HTML5" },
              { Icon: FaCss3Alt, color: "#1572B6", label: "CSS3" },
            ].map(({ Icon, color, label }, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-center bg-white/5 rounded-xl p-3"
                whileHover={{ scale: 1.06 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, type: "spring", stiffness: 160 }}
                viewport={{ once: false, amount: 0.3 }}
                aria-hidden="true"
                title={label}
              >
                <Icon className="text-4xl" style={{ color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
