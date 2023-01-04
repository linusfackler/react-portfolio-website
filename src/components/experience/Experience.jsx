import React from 'react'
import './experience.css'

import IMG1 from '../../assets/exp1.jpg'
import IMG2 from '../../assets/exp2.png'
import IMG3 from '../../assets/exp3.png'
import IMG4 from '../../assets/exp4.png'
import IMG5 from '../../assets/exp5.png'
import IMG6 from '../../assets/exp6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    company: 'Infosys',
    duration: 'May - August 2022',
    title: 'Network and Connectivity Architect Intern'
    },
  {
    id: 2,
    image: IMG2,
    company: 'University of Texas at Dallas',
    duration: 'September - December 2022',
    title: 'Undergraduate Research Assistant'
  },
  {
    id: 3,
    image: IMG3,
    company: 'Fackler IT',
    duration: 'August 2020 - present',
    title: 'Software Engineer'
  },
  {
    id: 4,
    image: IMG4,
    company: 'Streetside Imports',
    duration: 'August 2021 - present',
    title: 'Co-Founder'
  },
  {
    id: 5,
    image: IMG5,
    company: 'Midwestern State University',
    duration: 'January - April 2021',
    title: 'Peer Educator'
  },
  {
    id: 6,
    image: IMG6,
    company: 'Traumpalast Esslingen',
    duration: 'October 2018 - August 2019',
    title: 'Technical Assistant'
  }
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My professional</h5>
      <h2 className='experience__heading'>Experience</h2>
      <a href="https://www.linkedin.com/in/linusfackler/details/experience/" target='_blank' ><h5 className='experience__title'>Click here for detailed information</h5></a>

      <div className="container experience__container">
        {
          data.map(({id, image, company, duration, title, description}) => {
            return (
              <article key={id} className='experience__item'>
                <h5 className='experience__title'>{title}</h5>
                <h3 className='experience__text'>{company}</h3>
                <h5 className='experience__duration'>{duration}</h5>
                <div className="experience__item-image">
                  <img src={image} alt="title" />
                </div>
                {/* <small>{description}</small> */}
              </article>
            )
          })
        }
      </div>      
    </section>
  )
}

export default Experience