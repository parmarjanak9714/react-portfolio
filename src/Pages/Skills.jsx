export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "postMan",
    "vercel",
    "Render",
    
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-28 px-6">
      <h1 className="text-5xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Skills</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-cyan-400">
              {skill}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}