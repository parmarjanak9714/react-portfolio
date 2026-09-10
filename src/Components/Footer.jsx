import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer({ darkMode }) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer
      className={`border-t px-6 py-10 transition-colors duration-500 ${
        darkMode
          ? "bg-black border-white/10 text-white"
          : "bg-slate-50 border-gray-200 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold">
              Janak <span className="text-cyan-400">Parmar</span>
            </h2>

            <p
              className={`mt-3 leading-7 ${
                darkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              MERN Stack Developer focused on building modern,
              responsive and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/parmarjanak9714"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/janak-parmar08111997"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:janakparmar9714@gmail.com"
                className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaEnvelope />
              </a>

              <button
                onClick={() => scrollToSection("home")}
                className="ml-2 p-3 rounded-full border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
                aria-label="Back to top"
              >
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-8 pt-6 border-t text-center text-sm ${
            darkMode
              ? "border-white/10 text-gray-500"
              : "border-gray-200 text-gray-500"
          }`}
        >
          © 2026 Janak Parmar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}