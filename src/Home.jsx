import React from 'react'
import Projects from './NavbarComponents/projects'
import Contact from './NavbarComponents/Contact'
import { Outlet } from 'react-router-dom'
import About from './NavbarComponents/About'
import Hero from './NavbarComponents/Hero'
import Technical_Skills from './NavbarComponents/TechnicalSkills'
const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <About/>
      </div>
      <Technical_Skills />
      <Projects/>
      <Contact/> 
      <Outlet/> 
    </div>
  )
}

export default Home