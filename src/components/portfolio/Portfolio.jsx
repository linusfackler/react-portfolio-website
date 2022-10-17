import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio6.jpg'
import IMG8 from '../../assets/portfolio6.jpg'
import IMG9 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Kill Switch',
    description: '• Part of a team of 6 people including programmers, artists, level-designers',
    description2: '• Developed a local multiplayer game in a 2D environment in under 1 week using C# & OOP principles',
    skills: 'C#, Unity, OOP',
    github: 'https://github.com/TrystonMinsquero/SGDA-Fall-Game-Jam-2021',
    itch: "https://tryston.itch.io/killswitch"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio Website',
    description: '• Developed a responsive JavaScript website using the React library',
    description2: '• My first attempt in website development. Easy editable to add future projects/experience',
    skills: 'React, JavaScript, HTML, CSS',
    github: 'https://github.com/linusfackler/react-portfolio-website',
    itch: ""
  },
  {
    id: 3,
    image: IMG3,
    title: 'DFA-Interpreter | Automata Theory (UTD)',
    description: '• Developed a program that reads in a Deterministic Finite Automata & tests it for correctness',
    description2: '',
    skills: 'C++',
    github: 'https://github.com',
    itch: ""
  },
  {
    id: 4,
    image: IMG4,
    title: 'Exploring Multiple Processes and IPC | Operating Systems (UTD)',
    description: '• Developed a program that simulates a simple computer system consisting of CPU and Memory',
    description2: '• Used forks & pipes to operate in a Unix environment',
    skills: 'C++, Forks, Pipes, Unix/Linux',
    github: 'https://github.com/linusfackler/Operating-Systems-Concepts',
    itch: ""
  },
  {
    id: 5,
    image: IMG5,
    title: 'Project title',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
    description2: '• Developed a local multiplayer game in a 2D environment in under 1 week using C# & OOP principles',
    skills: 'C#, Unity, OOP',
    github: 'https://github.com',
    itch: 'link'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Project title',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
    description2: '• Developed a local multiplayer game in a 2D environment in under 1 week using C# & OOP principles',
    skills: 'C#, Unity, OOP',
    github: 'https://github.com',
    itch: 'link'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Project title',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
    description2: '• Developed a local multiplayer game in a 2D environment in under 1 week using C# & OOP principles',
    skills: 'C#, Unity, OOP',
    github: 'https://github.com',
    itch: 'link'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Project title',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
    description2: '• Developed a local multiplayer game in a 2D environment in under 1 week using C# & OOP principles',
    skills: 'C#, Unity, OOP',
    github: 'https://github.com',
    itch: 'link'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Project title',
    description: 'project descrption yousiofhjieso jhoefishj fjoiesj jieos',
    description2: '• Developed a local multiplayer game in a 2D environment in under 1 week using C# & OOP principles',
    skills: 'C#, Unity, OOP',
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
          data.map(({id, image, title, description, description2, skills, github, itch}) => {

            // ======= NORMAL PROJECTS =======
            if (itch == "")
            {
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <small>{description}<br/></small>
                  <small>{description2}<br/></small>
                  <h5>Skills used: &nbsp;
                    <small>{skills}</small>
                  </h5>
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
                <small>{description}<br/></small>
                <small>{description2}<br/></small>
                <h5>Skills used: &nbsp;
                  <small>{skills}</small>
                </h5>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={itch} className='btn btn-primary' target='_blank'>Itch.io</a>
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