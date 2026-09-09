// import StarsBackground from "../Components/StarsBackground";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Home({ darkMode }) {
  return (
    <>
      {/* <StarsBackground/> */}

      <div
        className={`min-h-screen pt-20 px-6 transition-colors duration-500 ${
          darkMode ? "bg-black text-white" : "bg-slate-50 text-slate-900"
        }`}
      >
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
                className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
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
          <div className="mt-10 lg:mt-0 lg:mr-12">
            <img
              src="/Projects/janak1.jpg"
              alt="Janak Parmar"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
