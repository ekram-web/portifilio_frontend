// import { motion } from 'framer-motion';
// import { useState } from 'react';

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', message: '', website: '' });
//   const [status, setStatus] = useState({ sending: false, ok: null, error: '', issues: [] });

//   const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ sending: true, ok: null, error: '', issues: [] });
//     try {
//       const res = await fetch(import.meta.env.VITE_CONTACT_API || 'http://localhost:5174/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json().catch(() => ({}));
//       if (!res.ok || !data.ok) throw data;
//       setStatus({ sending: false, ok: true, error: '', issues: [] });
//       setForm({ name: '', email: '', message: '', website: '' });
//     } catch (err) {
//       setStatus({
//         sending: false,
//         ok: false,
//         error: err?.error || 'Failed to send',
//         issues: err?.issues || [],
//       });
//     }
//   };

//   const issueFor = (field) => status.issues.find((i) => i.field === field)?.message;

//   return (
//     <section id="contact" className="w-full py-20 bg-gradient-to-b from-[#232526] to-[#1a1a2e] flex flex-col items-center">
//       <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Contact</h2>
//       <motion.form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-4 bg-[#232526] p-8 rounded-xl shadow-lg w-full max-w-md"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
//         viewport={{ once: false }}
//       >
//         {/* Honeypot */}
//         <input type="text" name="website" value={form.website} onChange={onChange} className="hidden" tabIndex={-1} autoComplete="off" />

//         <div>
//           <input name="name" value={form.name} onChange={onChange} type="text" placeholder="Your Name" className="w-full p-3 rounded bg-[#1a1a2e] text-white focus:outline-none" />
//           {issueFor('name') && <p className="text-red-400 text-xs mt-1">{issueFor('name')}</p>}
//         </div>
//         <div>
//           <input name="email" value={form.email} onChange={onChange} type="email" placeholder="Your Email" className="w-full p-3 rounded bg-[#1a1a2e] text-white focus:outline-none" />
//           {issueFor('email') && <p className="text-red-400 text-xs mt-1">{issueFor('email')}</p>}
//         </div>
//         <div>
//           <textarea name="message" value={form.message} onChange={onChange} placeholder="Your Message" className="w-full p-3 rounded bg-[#1a1a2e] text-white focus:outline-none" rows={4}></textarea>
//           {issueFor('message') && <p className="text-red-400 text-xs mt-1">{issueFor('message')}</p>}
//         </div>
//         <motion.button
//           type="submit"
//           disabled={status.sending}
//           className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition disabled:opacity-60"
//           whileHover={{ scale: status.sending ? 1 : 1.05 }}
//           whileTap={{ scale: status.sending ? 1 : 0.97 }}
//         >
//           {status.sending ? 'Sending...' : 'Send Message'}
//         </motion.button>
//         {status.ok === true && <p className="text-green-400 text-sm">Message sent! I will get back to you soon.</p>}
//         {status.ok === false && <p className="text-red-400 text-sm">{status.error}</p>}
//       </motion.form>
//       <div className="text-gray-400 mt-8">Or email: <a href="mailto:demo@email.com" className="text-blue-400 underline">ekruumiye@email.com</a></div>
//     </section>
//   );
// } 


import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState({
    sending: false,
    ok: null,
    error: "",
    issues: [],
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null, error: "", issues: [] });
    try {
      const res = await fetch(
        import.meta.env.VITE_CONTACT_API || "http://localhost:5174/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw data;
      setStatus({ sending: false, ok: true, error: "", issues: [] });
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      setStatus({
        sending: false,
        ok: false,
        error: err?.error || "Failed to send",
        issues: err?.issues || [],
      });
    }
  };

  const issueFor = (field) =>
    status.issues.find((i) => i.field === field)?.message;

  return (
    <section
      id="contact"
      className="relative w-full py-20 bg-gradient-to-b from-[#232526] to-[#1a1a2e] flex flex-col items-center"
    >
      {/* LEFT SIDE SOCIAL BAR (like the image) */}
      <div className="hidden md:flex flex-col items-center gap-5 absolute left-10 top-1/2 -translate-y-1/2">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaFacebookF className="text-white text-2xl hover:text-blue-400 cursor-pointer" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaInstagram className="text-white text-2xl hover:text-pink-400 cursor-pointer" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <FaTelegramPlane className="text-white text-2xl hover:text-blue-300 cursor-pointer" />
        </motion.div>

        <div className="w-[2px] h-24 bg-gray-500"></div>
      </div>

      {/* RIGHT SIDE VERTICAL EMAIL TEXT */}
      <div className="hidden md:flex flex-col items-center gap-4 absolute right-10 top-1/2 -translate-y-1/2">
        <a
          href="mailto:ekruumiye@email.com"
          className="text-gray-300 tracking-[0.2em] rotate-90 hover:text-blue-400 cursor-pointer"
        >
          ekruumiye@email.com
        </a>
        <div className="w-[2px] h-24 bg-gray-500"></div>
      </div>

      {/* CONTACT FORM (unchanged) */}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
        Contact
      </h2>
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-[#232526] p-8 rounded-xl shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
        viewport={{ once: false }}
      >
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={onChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-[#1a1a2e] text-white focus:outline-none"
          />
          {issueFor("name") && (
            <p className="text-red-400 text-xs mt-1">{issueFor("name")}</p>
          )}
        </div>

        <div>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-[#1a1a2e] text-white focus:outline-none"
          />
          {issueFor("email") && (
            <p className="text-red-400 text-xs mt-1">{issueFor("email")}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Your Message"
            className="w-full p-3 rounded bg-[#1a1a2e] text-white focus:outline-none"
            rows={4}
          ></textarea>
          {issueFor("message") && (
            <p className="text-red-400 text-xs mt-1">{issueFor("message")}</p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={status.sending}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition disabled:opacity-60"
          whileHover={{ scale: status.sending ? 1 : 1.05 }}
          whileTap={{ scale: status.sending ? 1 : 0.97 }}
        >
          {status.sending ? "Sending..." : "Send Message"}
        </motion.button>

        {status.ok === true && (
          <p className="text-green-400 text-sm">
            Message sent! I will get back to you soon.
          </p>
        )}
        {status.ok === false && (
          <p className="text-red-400 text-sm">{status.error}</p>
        )}
      </motion.form>

      <div className="text-gray-400 mt-8">
        Or email:{" "}
        <a href="mailto:demo@email.com" className="text-blue-400 underline">
          ekruumiye@email.com
        </a>
      </div>
    </section>
  );
}
