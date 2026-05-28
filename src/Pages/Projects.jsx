import ChatApp from '../assets/chat-app2.png';
import PortFolio from '../assets/portfolio.png';

export default function Projects() {
  const projects = [
    {
      title: "Chat Application",
      image: ChatApp,
      description:
        "Real-time chat application built using React, Node.js, Express.js and MongoDB. Users can chat instantly with a modern responsive interface.",
      live: "https://chat-app-rho-eight-58.vercel.app/",
      github: "https://github.com/parmarjanak9714/Chat-App",
    },
    {
      title: "Portfolio Website",
      image: PortFolio,
      description:
        "Personal portfolio website built with React and Tailwind CSS showcasing my skills, projects and contact information.",
      live: "https://react-portfolio-eta-nine-99.vercel.app/",
      github: "https://github.com/parmarjanak9714/react-portfolio",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        My <span className="text-cyan-400">Projects</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:scale-105 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              {project.title}
            </h2>

            <p className="text-gray-300 mb-6">
              {project.description}
            </p>

            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-500 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}