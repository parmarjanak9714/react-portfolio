export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white pt-28 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-5xl font-bold mb-12">
          Contact <span className="text-cyan-400">Me</span>
        </h1>

        <p className="text-gray-300 text-lg mb-10">
          Feel free to contact me for job opportunities, internships, or collaborations.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              Email
            </h2>
            <a
              href="mailto:janakparmar9714@gmail.com"
              className="text-gray-300 hover:text-cyan-400"
            >
              parmarjanak9714@gmail.com
            </a>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              GitHub
            </h2>
            <a
              href="https://github.com/parmarjanak9714"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400"
            >
              github.com/your-github
            </a>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              LinkedIn
            </h2>
            <a
              href="https://www.linkedin.com/in/janak-parmar08111997"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400"
            >
              linkedin.com/in/your-linkedin
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}