export default function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        <h1 className="text-5xl font-bold mb-8">
          About <span className="text-cyan-400">Me</span>
        </h1>

        <p className="text-lg text-gray-300 leading-8">
          Hello! I'm <span className="text-cyan-400 font-semibold">Janak Parmar</span>,
          a passionate MERN Stack Developer. I enjoy building modern,
          responsive, and user-friendly web applications using technologies
          like React, Node.js, Express.js, and MongoDB.
        </p>

        <p className="text-lg text-gray-300 leading-8 mt-6">
          I have completed projects such as a Real-Time Chat Application
          and a Personal Portfolio Website. I am continuously learning new
          technologies and improving my problem-solving skills to become
          a professional Full Stack Developer.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-3xl font-bold text-cyan-400">2+</h2>
            <p className="text-gray-300 mt-2">Projects Completed</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-3xl font-bold text-cyan-400">MERN</h2>
            <p className="text-gray-300 mt-2">Stack Developer</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-3xl font-bold text-cyan-400">100%</h2>
            <p className="text-gray-300 mt-2">Learning Mindset</p>
          </div>

        </div>

      </div>
    </div>
  );
}