
import StarsBackground from "../Components/StarsBackground";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
    <StarsBackground/>
    
    
    <div className="relative min-h-screen pt-20 bg-transparent text-white flex flex-col justify-center items-center text-center px-6">
      
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hi, I'm <span className="text-cyan-400">Janak Parmar</span>
      </h1>

      <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
        MERN Stack Developer
      </h2>

      <p className="max-w-2xl text-gray-400 mb-8">
        Passionate Full Stack Developer skilled in React, Node.js,
        Express.js and MongoDB. I enjoy building modern and responsive
        web applications.
      </p>

      <div className="flex gap-4">
        <Link to = '/projects'
          className="px-6 py-3 bg-cyan-500 rounded-lg hover:scale-105 duration-300">
              View My Work
          </Link>

        <Link
    to="/contact"
    className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white duration-300">
    Contact Me
  </Link>

      </div>

    </div>
    </>
  );
}