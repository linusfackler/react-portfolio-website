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
import { createContext, useState } from 'react'
import ReactSwitch from "react-switch"

export const ThemeContext = createContext(null);

const App = () => {
  const[theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          {theme === "dark" ? <ParticlesBackground /> : <></>}
          <Header />
          <Nav />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App