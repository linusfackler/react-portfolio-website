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
    duration: 'May - Aug 2022',
    title: 'Network and Connectivity Architect Intern',
    description: '• Managed Mercedes Benz’ personnel department’s database system (Oracle) & IT infrastructure • Designed and implemented network solutions • Analyzed security vulnerabilities',
  },
  {
    id: 2,
    image: IMG2,
    company: 'Association for Computing Machinery',
    duration: 'September 2022 - present',
    title: 'Research Assistant',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
  },
  {
    id: 3,
    image: IMG3,
    company: 'Fackler IT',
    duration: 'August 2020 - present',
    title: 'Software Engineer',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
  },
  {
    id: 4,
    image: IMG4,
    company: 'Streetside Imports',
    duration: 'August 2021 - present',
    title: 'Co-Founder',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
  },
  {
    id: 5,
    image: IMG5,
    company: 'Midwestern State University',
    duration: 'January - April 2021',
    title: 'Peer Educator',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
  },
  {
    id: 6,
    image: IMG6,
    company: 'Traumpalast Esslingen',
    duration: 'October 2018 - August 2019',
    title: 'Co-Founder',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
  }
]

const experience = document.querySelector('.experience__item');

experience.addEventListener('click', function () {
  experience.classList.toggle('is-flipped');
});

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My professional</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        {
          data.map(({id, image, company, duration, title, description}) => {
            return (
              <article key={id} className='experience__item'>
                <div className='experience__item experience__item--front'>
                  <h3 className='experience__text'>{company}</h3>
                  <h5 className='experience__duration'>{duration}</h5>
                  <div className="experience__item-image">
                    <img src={image} alt="title" />
                  </div>
                  {/* <h3>{title}</h3> */}
                  {/* <small>{description}</small> */}
                </div>

                <div className='experience__item experience__item--back'>
                  <small>{description}</small>
                </div>
              </article>
            )
          })
        }
      </div>      
    </section>
  )
}

export default Experience