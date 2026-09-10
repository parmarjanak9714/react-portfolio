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
import Footer from './Components/Footer'


function App() {
 const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme === "dark";
  }

  return true;
});

useEffect(() => {
  document.documentElement.classList.toggle("dark", darkMode);
  localStorage.setItem("theme", darkMode ? "dark" : "light");
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
  <Route
    path="/"
    element={
      <>
        <Home darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills  darkMode={darkMode}/>
        <Projects  darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </>
    }
  />

  <Route path="/project/:id" element={<ProjectDetails />} />
</Routes>
  </div>
</Router>
          )
}

export default App
