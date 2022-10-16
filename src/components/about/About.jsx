import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {SlGraduation} from 'react-icons/sl'

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
              <SlGraduation className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Your mom</small>
            </article>

            <article className='about__card'>
              <SlGraduation className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Your mom</small>
            </article>

            <article className='about__card'>
              <SlGraduation className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Your mom</small>
            </article>
          </div>

          <p>
            Your mom Your mom Your mom Your mom Your mom Your mom Your mom Your mom Your mom Your mom Your mom
            Your mom Your mom Your mom Your mom Your mom Your mom Your mom Your mom Your mom Your mom
          </p>

          <a href="#contact" className='btn btn-primary'>Hit me up</a>
        </div>
      </div>
    </section>
  )
}

export default About