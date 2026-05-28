import { Link } from "react-router-dom";
import Resume from '../assets/janak_Parmar_MERN_Stack_fresher.pdf';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        <h1 className="text-3xl font-bold text-white">
          Janak <span className="text-cyan-400">Portfolio</span>
        </h1>

        <ul className="flex gap-8 items-center text-white font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/skills"
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </Link>
          </li>

          <li>
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-300"
            >
              Resume
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}