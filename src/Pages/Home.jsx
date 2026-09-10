// import StarsBackground from "../Components/StarsBackground";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Home({ darkMode }) {
  return (
    <>
      {/* <StarsBackground/> */}

      <div
        id="home"
        className={`relative min-h-screen overflow-hidden pt-20 px-6 transition-colors duration-500 ${
          darkMode ? "bg-black text-white" : "bg-slate-50 text-slate-900"
        }`}
      >
        {/* Background Glow */}
        <div
          className={`absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
            darkMode ? "bg-cyan-500/10" : "bg-cyan-400/15"
          }`}
        />

        <div
          className={`absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
            darkMode ? "bg-blue-500/10" : "bg-blue-400/15"
          }`}
        />
        <div className="relative max-w-7xl mx-auto min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="max-w-2xl">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full border text-sm font-medium ${
                darkMode
                  ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                  : "border-cyan-500/20 bg-cyan-500/10 text-cyan-700"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>
            <div className="mb-4">
              <p
                className={`text-lg md:text-xl mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Hello, I'm
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Janak Parmar
                </span>
              </h1>
            </div>

            <h2
              className={`text-2xl md:text-3xl mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "React Developer",
                  "Node.js Developer",
                  "Frontend Developer",
                  "Full Stack Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h2>

            <p
              className={`max-w-xl text-lg leading-8 mb-8 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Passionate MERN Stack Developer with hands-on experience building
              responsive, full-stack web applications using React.js, Node.js,
              Express.js, and MongoDB. I enjoy creating clean, user-friendly,
              and scalable web solutions.
            </p>

            <div className="flex gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                View My Work
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 border border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="relative mt-10 lg:mt-0 lg:mr-12 flex items-center justify-center">
            {/* Glow */}
            <div
              className={`absolute w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl ${
                darkMode ? "bg-cyan-500/10" : "bg-cyan-400/20"
              }`}
            />

            {/* Image Ring */}
            <motion.div
              className="relative mt-10 lg:mt-0 lg:mr-4 w-full max-w-lg"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 blur-3xl ${
                  darkMode ? "bg-cyan-500/10" : "bg-cyan-400/10"
                }`}
              />

              {/* Code Editor */}
              <div
                className={`relative rounded-2xl overflow-hidden border shadow-2xl ${
                  darkMode
                    ? "bg-[#0d1117] border-white/10 shadow-cyan-500/10"
                    : "bg-white border-gray-200 shadow-gray-300/40"
                }`}
              >
                {/* Editor Header */}
                <div
                  className={`flex items-center justify-between px-4 py-3 border-b ${
                    darkMode ? "border-white/10" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>

                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    developer.js
                  </span>

                  <span className="text-cyan-400 text-xs">JS</span>
                </div>

                {/* Code */}
                <div className="p-5 md:p-7 font-mono text-sm md:text-base leading-8 overflow-x-auto">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-400">developer</span>{" "}
                    <span className={darkMode ? "text-white" : "text-gray-800"}>
                      =
                    </span>{" "}
                    {"{"}
                  </p>

                  <p className="pl-5">
                    <span className="text-cyan-400">name</span>
                    <span className={darkMode ? "text-white" : "text-gray-800"}>
                      :
                    </span>{" "}
                    <span className="text-green-400">"Janak Parmar"</span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-cyan-400">role</span>
                    <span className={darkMode ? "text-white" : "text-gray-800"}>
                      :
                    </span>{" "}
                    <span className="text-green-400">
                      "MERN Stack Developer"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-cyan-400">frontend</span>
                    <span className={darkMode ? "text-white" : "text-gray-800"}>
                      :
                    </span>{" "}
                    <span className="text-green-400">"React.js / Next.js"</span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-cyan-400">backend</span>
                    <span className={darkMode ? "text-white" : "text-gray-800"}>
                      :
                    </span>{" "}
                    <span className="text-green-400">
                      "Node.js / Express.js"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-cyan-400">database</span>
                    <span className={darkMode ? "text-white" : "text-gray-800"}>
                      :
                    </span>{" "}
                    <span className="text-green-400">"MongoDB"</span>
                  </p>

                  <p>{"}"}</p>

                  {/* Terminal Status */}
                  <div
                    className={`mt-6 pt-4 border-t ${
                      darkMode ? "border-white/10" : "border-gray-200"
                    }`}
                  >
                    <p className="text-gray-500 text-xs mb-2">
                      $ npm run build
                    </p>

                    <p className="text-green-400 text-xs md:text-sm">
                      ✓ Ready to build something great...
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
