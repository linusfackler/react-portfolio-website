import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio6.jpg'
import IMG8 from '../../assets/portfolio6.jpg'
import IMG9 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Project title',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
    github: 'https://github.com',
    itch: ""
  },
  {
    id: 2,
    image: IMG2,
    title: 'Project title',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
    github: 'https://github.com',
    itch: 'link'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Project title',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
    github: 'https://github.com',
    itch: 'link'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Project title',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
    github: 'https://github.com',
    itch: 'link'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Project title',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
    github: 'https://github.com',
    itch: 'link'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Project title',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
    github: 'https://github.com',
    itch: 'link'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Project title',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
    github: 'https://github.com',
    itch: 'link'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Project title',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
    github: 'https://github.com',
    itch: 'link'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Project title',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
    github: 'https://github.com',
    itch: 'link'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, github, itch}) => {

            // ======= NORMAL PROJECTS =======
            if (itch == "")
            {
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <small>{description}</small>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>GitHub</a>
                  </div>
                </article>
              )
            }

            // ======= GAMES =======
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <small>{description}</small>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={itch} className='btn btn-primary' target='_blank'>Itch</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio