import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {SlGraduation} from 'react-icons/sl'
import {BiCodeBlock} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BiCodeBlock className='about__icon'/>
              <h5>Projects</h5>
              <small>600+ Contributions in the last year</small>
            </article>

            <article className='about__card'>
              <SlGraduation className='about__icon'/>
              <h5>Coursework</h5>
              <small>3.78 GPA at top 50 CS school</small>
            </article>

            <article className='about__card'>
              <SlGraduation className='about__icon'/>
              <h5>Experience</h5>
              <small>In Software Engineering, Machine Learning, Computer Networks, and Research</small>
            </article>
          </div>

          <p>
            I am a recent Computer Science graduate from the University of Texas at Dallas (UTD), currently gaining experience 
            in the fields of AI/Machine Learning.<br/><br/>
            I am an international student from Germany on OPT, looking for a Software/Machine Learning Engineering entry level position.
          </p>

          <a href="#contact" className='btn btn-primary'>Connect with me</a>
        </div>
      </div>
    </section>
  )
}

export default About