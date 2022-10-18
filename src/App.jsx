import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ParticlesBackground from './components/particles/ParticlesBackground'
import Particle from './components/particles/Particle'

const App = () => {
  return (
    <>
        <Particle />
        <Header />
        <Nav />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App