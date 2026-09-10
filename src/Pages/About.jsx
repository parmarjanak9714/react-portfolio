import { motion } from "framer-motion";

export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`scroll-mt-32 min-h-screen py-24 px-6 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
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
            Get to know me
          </p>

          <h1
            className={`text-4xl md:text-5xl font-extrabold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            About <span className="text-cyan-400">Me</span>
          </h1>

          <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-5" />
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center lg:relative lg:-top-32"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-400/10 blur-3xl rounded-full" />

              {/* Image */}
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500">
                <div className="rounded-2xl bg-black p-2">
                  <img
                    src="/Projects/janak1.jpg"
                    alt="Janak Parmar"
                    className="w-56 h-72 md:w-64 md:h-80 object-cover rounded-xl transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-cyan-400 font-semibold mb-3">
              I'm a MERN Stack Developer
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              I build modern and user-friendly web applications.
            </h2>

            <p
              className={`text-lg leading-8 mb-5 ${
                darkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Hello! I'm{" "}
              <span className="text-cyan-400 font-semibold">Janak Parmar</span>,
              a passionate MERN Stack Developer. I enjoy building modern,
              responsive, and user-friendly web applications using React.js,
              Node.js, Express.js, and MongoDB.
            </p>

            <p
              className={`text-lg leading-8 mb-7 ${
                darkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              I have worked on projects including a Real-Time Chat Application
              and a Personal Portfolio Website. I am continuously learning new
              technologies and improving my problem-solving skills to grow as a
              professional Full Stack Developer.
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <h3
                className={`font-semibold text-lg mb-4 ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Technologies I work with
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "JavaScript",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-sm font-medium hover:bg-cyan-400/10 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Button */}
            <a
              href="/Janak _MERN_Cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-5 mt-20"
        >
          <div
            className={`rounded-2xl border p-6 text-center hover:-translate-y-2 transition-transform duration-300 ${
              darkMode
                ? "border-cyan-400/10 bg-cyan-400/5"
                : "border-cyan-500/20 bg-cyan-50"
            }`}
          >
            <h2 className="text-3xl font-bold text-cyan-400">2+</h2>
            <p
              className={`mt-2 ${
                darkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Projects Completed
            </p>
          </div>

          <div
            className={`rounded-2xl border p-6 text-center hover:-translate-y-2 transition-transform duration-300 ${
              darkMode
                ? "border-cyan-400/10 bg-cyan-400/5"
                : "border-cyan-500/20 bg-cyan-50"
            }`}
          >
            <h2 className="text-3xl font-bold text-cyan-400">MERN</h2>
            <p
              className={`mt-2 ${
                darkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Stack Developer
            </p>
          </div>

          <div
            className={`rounded-2xl border p-6 text-center hover:-translate-y-2 transition-transform duration-300 ${
              darkMode
                ? "border-cyan-400/10 bg-cyan-400/5"
                : "border-cyan-500/20 bg-cyan-50"
            }`}
          >
            <h2 className="text-3xl font-bold text-cyan-400">100%</h2>
            <p
              className={`mt-2 ${
                darkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Learning Mindset
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
