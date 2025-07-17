import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-b from-[#232526] to-[#1a1a2e] flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Contact</h2>
      <motion.form
        className="flex flex-col gap-6 bg-[#232526] p-8 rounded-xl shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
        viewport={{ once: false }}
      >
        <input type="text" placeholder="Your Name" className="p-3 rounded bg-[#1a1a2e] text-white focus:outline-none" />
        <input type="email" placeholder="Your Email" className="p-3 rounded bg-[#1a1a2e] text-white focus:outline-none" />
        <textarea placeholder="Your Message" className="p-3 rounded bg-[#1a1a2e] text-white focus:outline-none" rows={4}></textarea>
        <motion.button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Send Message
        </motion.button>
      </motion.form>
      <div className="text-gray-400 mt-8">Or email: <a href="mailto:demo@email.com" className="text-blue-400 underline">demo@email.com</a></div>
    </section>
  );
} 