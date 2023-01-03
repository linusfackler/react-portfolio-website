import React from 'react'
import './skills.css'
import {AiOutlineCode} from 'react-icons/ai'
import {CiMicrochip} from 'react-icons/ci'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Check out my</h5>
      <h2>Skills</h2>

      <div className="container skills__container">


        { /*================= LANGUAGES ================= */ }
        <div className="skills__languages">

          <h3>Programming Languages</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <AiOutlineCode className='skills__details-icon'/>
              <h4>C++</h4>
            </article>

            <article className='skills__details'>
              <AiOutlineCode className='skills__details-icon'/>
              <h4>Python</h4>
            </article>

            <article className='skills__details'>
              <AiOutlineCode className='skills__details-icon'/>
              <h4>Java</h4>
            </article>

            <article className='skills__details'>
              <AiOutlineCode className='skills__details-icon'/>
              <h4>R</h4>
            </article>

            <article className='skills__details'>
              <AiOutlineCode className='skills__details-icon'/>
              <h4>Ruby</h4>
            </article>

            <article className='skills__details'>
              <AiOutlineCode className='skills__details-icon'/>
              <h4>C#</h4>
            </article>

            <article className='skills__details'>
              <AiOutlineCode className='skills__details-icon'/>
              <h4>JavaScript</h4>
            </article>

            <article className='skills__details'>
              <AiOutlineCode className='skills__details-icon'/>
              <h4>CSS</h4>
            </article>

            <article className='skills__details'>
              <AiOutlineCode className='skills__details-icon'/>
              <h4>Go</h4>
            </article>

            <article className='skills__details'>
              <AiOutlineCode className='skills__details-icon'/>
              <h4>C</h4>
            </article>
          </div>
        </div>


        { /* ================= TECHNOLOGIES ================= */ }
        <div className="skills__tech">
        <h3>Technologies</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <CiMicrochip className='skills__details-icon'/>
              <h4>Amazon Web Services</h4>
            </article>

            <article className='skills__details'>
              <CiMicrochip className='skills__details-icon'/>
              <h4>Microsoft Azure</h4>
            </article>

            <article className='skills__details'>
              <CiMicrochip className='skills__details-icon'/>
              <h4>Google Cloud Platform</h4>
            </article>

            <article className='skills__details'>
              <CiMicrochip className='skills__details-icon'/>
              <h4>SQL</h4>
            </article>

            <article className='skills__details'>
              <CiMicrochip className='skills__details-icon'/>
              <h4>Oracle</h4>
            </article>

            <article className='skills__details'>
              <CiMicrochip className='skills__details-icon'/>
              <h4>React</h4>
            </article>

            <article className='skills__details'>
              <CiMicrochip className='skills__details-icon'/>
              <h4>Ruby on Rails</h4>
            </article>

            <article className='skills__details'>
              <CiMicrochip className='skills__details-icon'/>
              <h4>.NET Framework</h4>
            </article>

            <article className='skills__details'>
              <CiMicrochip className='skills__details-icon'/>
              <h4>jQuery</h4>
            </article>

            <article className='skills__details'>
              <CiMicrochip className='skills__details-icon'/>
              <h4>Git</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills