import React from 'react'
import Projects from './projects'
import Contact from './Contact'
import { Outlet } from 'react-router-dom'
import About from './About'
const Home = () => {
  return (
    <div>
      <About/>
      <Projects/>
      <Contact/> 
      <Outlet/> 
    </div>
  )
}

export default Home