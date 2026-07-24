import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  

  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/skills' element ={<Skills/>}/>
      <Route path='/projects' element ={<Projects/>}/>
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path='/Contact' element ={<Contact/>} />
    </Routes>
  </Router>
          )
}

export default App
