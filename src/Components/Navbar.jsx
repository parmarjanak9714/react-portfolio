import { Link } from "react-router-dom";
 export default function navbar(){
    return(
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <ul className="flex gap-6">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/skills"}>skills</Link></li>
                <li><Link to={"/Projects"}>Projects</Link></li>
                <li><Link to={"/Contact"}>contact</Link></li>
                <li>
                    <a href="/Projects/resume.html" target="_blank" rel="noopener" className="bg-white text-blue-600 px-3 py-1 roinded-lg hover:bg-gray-200">
                    Resume
                    </a>
                </li>

            </ul>
        </nav>
    )
 }