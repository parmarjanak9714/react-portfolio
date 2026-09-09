import { useEffect, useState } from "react";
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import ProjectDetails from './Pages/ProjectDetails'


function App() {
  const [darkMode, setDarkMode] = useState(true);

useEffect(() => {
  document.documentElement.classList.toggle("dark", darkMode);
}, [darkMode]);
  

  return (
  <Router>
  <div
    className="min-h-screen transition-colors duration-300"
    style={{
      backgroundColor: "var(--bg-primary)",
      color: "var(--text-primary)",
    }}
  >
    <Navbar
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />

    <Routes>
      <Route path="/" element={<Home darkMode={darkMode} />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </div>
</Router>
          )
}

export default App
