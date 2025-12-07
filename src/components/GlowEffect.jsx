// import { motion } from 'framer-motion';

// export default function GlowEffect() {
//   return (
//     <motion.div
//       className="fixed top-0 right-0 z-40 pointer-events-none"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
//             <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8" />
//             <stop offset="60%" stopColor="#6366f1" stopOpacity="0.4" />
//             <stop offset="100%" stopColor="#18122B" stopOpacity="0" />
//           </radialGradient>
//         </defs>
//         <motion.circle
//           cx="200"
//           cy="100"
//           r="90"
//           fill="url(#glow)"
//           animate={{ scale: [1, 1.08, 1] }}
//           transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//         />
//       </svg>
//     </motion.div>
//   );
// } 

import { motion } from "framer-motion";

export default function SnowEffect() {
  const snowflakes = Array.from({ length: 20 }); // number of snowflakes

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 overflow-hidden">
      {snowflakes.map((_, index) => {
        const size = Math.random() * 6 + 2; // size between 2px-8px
        const delay = Math.random() * 5; // start delay
        const xPos = Math.random() * window.innerWidth; // random x position

        return (
          <motion.div
            key={index}
            className="absolute bg-white rounded-full"
            style={{
              width: size,
              height: size,
              left: xPos,
              top: -10,
              opacity: 0.6,
            }}
            animate={{ y: window.innerHeight + 10 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 8 + Math.random() * 4,
              delay: delay,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}
