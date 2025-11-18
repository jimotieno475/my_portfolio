import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/section/Hero'
import SkillSection from './components/section/SkillSection'
import ProjectsSection from './components/section/ProjectsSection'
import About from './components/section/About'
import ContactSection from './components/section/ContactSection'
import Footer from './components/section/Footer'

const App = () => {
  return (
    <ThemeProvider>
      <div >
        {/* add this in the above div for ading pages and remove at last className='pb-[100vh]' */}
        <Navbar/>
        <Hero/>
        <SkillSection/>
        <ProjectsSection/>
        <About/>
        <ContactSection/>
        <Footer/>
      </div>
    </ThemeProvider>
    
  )
}

export default App
