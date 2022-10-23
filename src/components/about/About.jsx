import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
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
              <small>500+ Contributions in the last year</small>
            </article>

            <article className='about__card'>
              <SlGraduation className='about__icon'/>
              <h5>Coursework</h5>
              <small>3.9 GPA at top 50 CS school</small>
            </article>

            <article className='about__card'>
              <SlGraduation className='about__icon'/>
              <h5>Experience</h5>
              <small>In Software Engineering, Computer Networking, and Research</small>
            </article>
          </div>

          <p>
            I am a Computer Science Senior at the University of Texas at Dallas (UTD), currently gaining experience 
            in the fields of AI/Machine Learning.<br/><br/>
            I am an international student from Germany, looking for an internship position in the summer of 2023, 
            after graduating with my Bachelor of Science in Computer Science, before attending Grad school for a Master's in CS.
          </p>

          <a href="#contact" className='btn btn-primary'>Hit me up</a>
        </div>
      </div>
    </section>
  )
}

export default About