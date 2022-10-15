import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

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
              
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About