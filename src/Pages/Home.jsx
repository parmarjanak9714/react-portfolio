
// import StarsBackground from "../Components/StarsBackground";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  return (
    <>
    {/* <StarsBackground/> */}
    
    
    <div className="min-h-screen pt-20 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto min-h-[85vh] flex flex-col lg:flex-row items-center justify-evenly gap-16">
      
      <div className="max-w-2xl">
      <div className="mb-4">
  <p className="text-lg md:text-xl text-gray-400 mb-2">
     Hello, I'm
  </p>

  <h1 className="text-5xl md:text-7xl font-bold">
    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      Janak Parmar
    </span>
  </h1>
</div>

      <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
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

      <p className="max-w-2xl text-lg text-gray-400 leading-8 mb-8">
  Passionate MERN Stack Developer with hands-on experience building
  responsive, full-stack web applications using React.js, Node.js,
  Express.js, and MongoDB. I enjoy creating clean, user-friendly,
  and scalable web solutions.
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
      <div className="mt-10 lg:mt-0 lg:mr-12">
  <img
    src="/Projects/janak1.jpg"
    alt="Janak Parmar"
    className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"/>
</div>
</div>
    </div>
    </>
  );
}