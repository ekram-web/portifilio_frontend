import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ekramCertImg from '../assets/certeficate/Ekram--1751444296321.jpg';

const certificates = [

  { title: 'Certificate of Completion', org: 'Evangadi tech', year: 2025, img: ekramCertImg },
];

export default function Certificates() {
  const [previewSrc, setPreviewSrc] = useState(null);

  return (
    <section id="certificates" className="w-full py-20 bg-gradient-to-b from-[#232526] to-[#0c0e13]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certificates
          </h2>
          <p className="text-gray-300/90 max-w-2xl mx-auto">
            A curated selection of professional certifications and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={`${cert.title}-${i}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              {cert.img ? (
                <button
                  type="button"
                  onClick={() => setPreviewSrc(cert.img)}
                  className="relative block w-full h-64"
                >
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-contain bg-gradient-to-b from-black/10 to-black/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold text-lg leading-tight">
                          {cert.title}
                        </h3>
                        <p className="text-blue-300 text-sm">
                          {cert.org}{cert.year ? ` • ${cert.year}` : ''}
                        </p>
                      </div>
                      <span className="text-white/90 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs">
                        View
                      </span>
                    </div>
                  </div>
                </button>
              ) : (
                <div className="p-6 h-64 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/30">
                      Certification
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-white">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 mt-2">
                      {cert.org}
                    </p>
                  </div>
                  {cert.year && (
                    <div className="text-gray-400 text-sm">{cert.year}</div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Lightbox / Preview Modal */}
        <AnimatePresence>
          {previewSrc && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewSrc(null)}
            >
              <motion.div
                className="relative max-w-4xl w-full"
                initial={{ scale: 0.95, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 10, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={previewSrc} alt="Certificate preview" className="w-full h-auto rounded-lg shadow-2xl" />
                <button
                  type="button"
                  onClick={() => setPreviewSrc(null)}
                  className="absolute -top-3 -right-3 bg-white/90 text-black rounded-full w-9 h-9 shadow-lg hover:bg-white"
                  aria-label="Close preview"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 