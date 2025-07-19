import { motion } from 'framer-motion';

export default function GlowEffect() {
  return (
    <motion.div
      className="fixed top-0 right-0 z-40 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#18122B" stopOpacity="0" />
          </radialGradient>
        </defs>
        <motion.circle
          cx="200"
          cy="100"
          r="90"
          fill="url(#glow)"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
} 