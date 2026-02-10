import React from 'react'
import Projects from './NavbarComponents/projects'
import Contact from './NavbarComponents/Contact'
import { Outlet } from 'react-router-dom'
import About from './NavbarComponents/About'
import Hero from './NavbarComponents/Hero'
import TechnicalSkills from './NavbarComponents/TechnicalSkills'
const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <About/>
      </div>
      <TechnicalSkills />
      <Projects/>
      <Contact/> 
      <Outlet/> 
    </div>
  )
}

export default Home