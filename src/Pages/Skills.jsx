import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";
export default function Skills({ darkMode }) {
  const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "React.js", icon: FaReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Postman", icon: SiPostman },
    { name: "Vercel", icon: SiVercel },
    { name: "Render", icon: SiRender },
  ];

  return (
    <div
      id="skills"
      className={`min-h-screen pt-28 pb-24 px-6 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p
          className={`font-semibold uppercase tracking-widest text-sm mb-3 ${
            darkMode ? "text-cyan-400" : "text-cyan-600"
          }`}
        >
          What I work with
        </p>

        <h1
          className={`text-4xl md:text-5xl font-extrabold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          My <span className="text-cyan-400">Skills</span>
        </h1>

        <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-5" />
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className={`group rounded-2xl border p-6 text-center transition-all duration-300 ${
              darkMode
                ? "bg-white/5 border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                : "bg-white border-gray-200 hover:border-cyan-400/50 hover:bg-cyan-50 shadow-sm"
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <skill.icon
                className={`text-4xl transition-transform duration-300 group-hover:scale-110 ${
                  darkMode ? "text-cyan-400" : "text-cyan-600"
                }`}
              />

              <h2
                className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                  darkMode
                    ? "text-gray-100 group-hover:text-cyan-400"
                    : "text-slate-800 group-hover:text-cyan-600"
                }`}
              >
                {skill.name}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
