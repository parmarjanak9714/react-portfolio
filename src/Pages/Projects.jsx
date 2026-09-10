import React from "react";
import projects from "../Data/Project";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = ({ darkMode }) => {
  const navigate = useNavigate();
  return (
    <section
      id="projects"
      className={`w-full min-h-screen py-16 pt-28 pb-24 px-4 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
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
            My Recent Work
          </p>

          <h1
            className={`text-4xl md:text-5xl font-extrabold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            My <span className="text-cyan-400">Projects</span>
          </h1>

          <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-5" />
        </motion.div>
        <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: project.id * 0.08,
              }}
              whileHover={{ y: -8 }}
              className={`group max-w-sm mx-auto w-full overflow-hidden rounded-2xl border transition-all duration-300 ${
                darkMode
                  ? "border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                  : "border-gray-200 bg-white shadow-sm hover:border-cyan-400/50 hover:bg-cyan-50"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h3
                  className={`text-xl font-bold ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mt-3 text-sm line-clamp-2 ${
                    darkMode ? "text-gray-400" : "text-slate-600"
                  }`}
                >
                  {project.shortDescription}
                </p>
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className={`mt-5 w-full rounded-lg py-3 font-semibold transition-all duration-300 hover:scale-[1.02] ${
                    darkMode
                      ? "bg-cyan-500 text-white hover:bg-cyan-600"
                      : "bg-cyan-500 text-white hover:bg-cyan-600"
                  }`}
                >
                  More Information
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
