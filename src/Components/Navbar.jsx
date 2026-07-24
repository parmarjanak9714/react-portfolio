import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        
        <h1 className="text-xl md:text-3xl font-bold text-white">
          Janak <span className="text-cyan-400">Portfolio</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-white font-medium">
          <li>
            <Link to="/" className="hover:text-cyan-400">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-cyan-400">
              About
            </Link>
          </li>

          <li>
            <Link to="/skills" className="hover:text-cyan-400">
              Skills
            </Link>
          </li>

          <li>
            <Link to="/projects" className="hover:text-cyan-400">
              Projects
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-cyan-400">
              Contact
            </Link>
          </li>

          <li>
            <a
              href="/janak_MERN_Cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col text-white text-center py-4 gap-4">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link to="/skills" onClick={() => setMenuOpen(false)}>
                Skills
              </Link>
            </li>

            <li>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>

            <li>
              <a
                href="/Janak_Parmar_MERN_Stack_fresher.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}