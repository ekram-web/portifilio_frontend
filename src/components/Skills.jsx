import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaDocker, FaAws, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaDatabase, FaLaravel
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiExpress, SiNextdotjs, SiDjango, SiGo, SiFirebase, SiKubernetes, SiCypress, SiJest, SiTestinglibrary, SiPostman, SiNetlify, SiRender, SiHostinger, SiCpanel, SiSqlite, SiSpring, SiFastapi, SiJquery, SiGooglecloud, SiVercel, SiChakraui
} from 'react-icons/si';

const techStack = [
  {
    group: 'Frontend',
    items: [
      { name: 'HTML5', icon: FaHtml5, color: '#e34c26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
      { name: 'JavaScript', icon: FaJs, color: '#f7df1e' },
      { name: 'React', icon: FaReact, color: '#61dafb' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#fff' },
      { name: 'Tailwind CSS', icon: SiChakraui, color: '#38bdf8' }, // Use SiTailwindcss if available
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'Node.js', icon: FaNodeJs, color: '#3c873a' },
      { name: 'Express.js', icon: SiExpress, color: '#fff' },
      { name: 'Django', icon: SiDjango, color: '#092e20' },
      { name: 'Go', icon: SiGo, color: '#00add8' },
    ],
  },
  {
    group: 'Backend Services',
    items: [
      { name: 'Supabase', icon: FaDatabase, color: '#3ecf8e' },
      { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
    ],
  },
  {
    group: 'DevOps',
    items: [
      { name: 'Docker', icon: FaDocker, color: '#2496ed' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326ce5' },
    ],
  },
  {
    group: 'Testing',
    items: [
      { name: 'Cypress', icon: SiCypress, color: '#17202c' },
      { name: 'Jest', icon: SiJest, color: '#c21325' },
      { name: 'Testing Library', icon: SiTestinglibrary, color: '#e33332' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
    ],
  },
  {
    group: 'Database',
    items: [
      { name: 'MySQL', icon: SiMysql, color: '#00758f' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Redis', icon: SiRedis, color: '#d82c20' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { name: 'SQLite', icon: SiSqlite, color: '#003b57' },
    ],
  },
  {
    group: 'Programming Languages',
    items: [
      { name: 'Python', icon: FaPython, color: '#3776ab' },
      { name: 'Go', icon: SiGo, color: '#00add8' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'Java', icon: FaJava, color: '#007396' },
    ],
  },
  {
    group: 'Cloud',
    items: [
      { name: 'AWS', icon: FaAws, color: '#ff9900' },
      { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285f4' },
    ],
  },
  {
    group: 'Deployment',
    items: [
      { name: 'Vercel', icon: SiVercel, color: '#fff' },
      { name: 'Render', icon: SiRender, color: '#46e3b7' },
      { name: 'Hostinger', icon: SiHostinger, color: '#673de6' },
      { name: 'cPanel', icon: SiCpanel, color: '#ff6c2c' },
      { name: 'Netlify', icon: SiNetlify, color: '#00c7b7' },
    ],
  },
  {
    group: 'Experimenting - at least one mini project',
    items: [
      { name: 'Laravel', icon: FaLaravel, color: '#ff2d20' },
      { name: 'Spring', icon: SiSpring, color: '#6db33f' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'jQuery', icon: SiJquery, color: '#0769ad' },
    ],
  },
];

const leftColumn = ['Frontend', 'Backend', 'Backend Services', 'DevOps', 'Testing'];
const rightColumn = ['Database', 'Programming Languages', 'Cloud', 'Deployment', 'Experimenting - at least one mini project'];

function TechGroup({ group, items, groupIndex }) {
  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: groupIndex * 0.1, duration: 0.7, type: 'spring' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">{group}</h3>
      <div className="h-1 w-full bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 mb-5" />
      <div className="flex flex-wrap gap-6">
        {items.map(({ name, icon: Icon, color }, i) => (
          <motion.div
            key={name}
            className="rounded-2xl bg-gradient-to-br from-[#232946]/80 to-[#393053]/80 p-4 flex flex-col items-center justify-center shadow-xl border border-blue-400/10 hover:border-blue-400/60 transition-all duration-300 cursor-pointer"
            whileHover={{
              scale: 1.13,
              boxShadow: `0 0 24px 6px ${color}, 0 0 48px 12px #00c6fb`
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4, type: 'spring' }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Icon className="text-3xl md:text-4xl mb-1 transition-all duration-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" style={{ color }} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-20 bg-gradient-to-b from-[#18122B] via-[#232946] to-[#232526] flex flex-col items-center overflow-hidden">
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7f5af0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <motion.h2
        className="relative z-10 text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-16 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Tech Stack
      </motion.h2>
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column */}
        <div>
          {leftColumn.map((group, idx) => {
            const g = techStack.find((t) => t.group === group);
            return g ? <TechGroup key={group} {...g} groupIndex={idx} /> : null;
          })}
        </div>
        {/* Right Column */}
        <div>
          {rightColumn.map((group, idx) => {
            const g = techStack.find((t) => t.group === group);
            return g ? <TechGroup key={group} {...g} groupIndex={idx + leftColumn.length} /> : null;
          })}
        </div>
      </div>
    </section>
  );
} 