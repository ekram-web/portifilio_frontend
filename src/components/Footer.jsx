// export default function Footer() {
//   const year = new Date().getFullYear();
//   return (
//     <footer className="w-full border-t border-white/10 bg-[#0b0f15]">
//       <div className="max-w-7xl mx-auto px-6 py-6">
//         <p className="text-center text-sm md:text-base text-gray-400">
//           © {year} <span className="text-gray-200 font-semibold">Ekram</span>. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0b0f15] border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center gap-3"
      >
        <motion.p
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-gray-300 text-sm md:text-base"
        >
          © {year} <span className="text-white font-semibold">Ekram</span>. All
          Rights Reserved.
        </motion.p>

        <motion.p
          whileHover={{ opacity: 1 }}
          className="text-xs text-gray-500 opacity-70"
        >
          Crafted with ❤️ — Stay Creative.
        </motion.p>
      </motion.div>
    </footer>
  );
}
