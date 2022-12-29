import React from 'react'
import './portfolio.css'
import ML from '../../assets/ml.png'
import RCT from '../../assets/react.png'
import OS from '../../assets/os.png'
import AUTOM from '../../assets/automata.png'
import TELE from '../../assets/telephone.png'
import KILL from '../../assets/killswitch.png'
import CMPLR from '../../assets/compiler.png'
import TERMINAL from '../../assets/terminal.png'
import SQUARE from '../../assets/cometsquare.png'


const data = [
  {
    id: 1,
    image: SQUARE,
    title: 'CometSquare | HackUTD IX',
    description: '• Developed a full-stack app that gives users the chance to find clubs on campus easier',
    description2: '• Integrated a machine-learning-based search algorithm using BERT',
    skills: 'C#, Python, MongoDB, Unity, PyTorch',
    github: 'https://github.com/TrystonMinsquero/HackUTD-2022',
    itch: "",
    devpost: 'https://devpost.com/software/cometsquare'
  },
  {
    id: 2,
    image: RCT,
    title: 'Portfolio Website',
    description: '• Developed a responsive JavaScript website using the React library',
    description2: '• My first attempt at website development. Easy editable to add future projects/experience',
    skills: 'React, Node.js, JavaScript, HTML, CSS',
    github: 'https://github.com/linusfackler/react-portfolio-website',
    itch: "",
    devpost: ""
  },
  {
    id: 3,
    image: ML,
    title: 'Searching for Similarity | Intro to Machine Learning (UTD)',
    description: '• Developed in a team of 4 a program to compare different Machine Learning Algorithms',
    description2: '• Regression, Classification, Clustering, & Dimensionality',
    skills: 'R, Machine Learning',
    github: 'https://github.com/linusfackler/CS4375-Machine-Learning/tree/main/Searching%20for%20Similarity',
    itch: "",
    devpost: ""
  },
  {
    id: 4,
    image: OS,
    title: 'Exploring Multiple Processes and IPC | Operating Systems (UTD)',
    description: '• Developed a program that simulates a simple computer system consisting of CPU and Memory',
    description2: '• Used forks & pipes to operate in a Unix environment',
    skills: 'C++, Forks, Pipes, Unix/Linux',
    github: 'https://github.com/linusfackler/Operating-Systems-Concepts',
    itch: "",
    devpost: ""
  },
  {
    id: 5,
    image: TELE,
    title: 'Energetic Telephone',
    description: '• Developed a polished 3D game using the Godot game engine in a team of 2',
    description2: '• Implemented a game in under 24 hours using CS concepts like Data Structures, OOP, and algorithms, ',
    skills: 'Godot Script (Python similar), OOP',
    github: 'https://github.com/PlatinShadow/JameGam',
    itch: 'https://platinshadow.itch.io/energetic-telephone',
    devpost: ""
  },
  {
    id: 6,
    image: KILL,
    title: 'Kill Switch',
    description: '• Part of a team of 6 people including programmers, artists, level-designers',
    description2: '• Developed a local multiplayer game in a 2D environment in under 1 week using C# & OOP principles',
    skills: 'C#, Unity, OOP',
    github: 'https://github.com/TrystonMinsquero/SGDA-Fall-Game-Jam-2021',
    itch: "https://tryston.itch.io/killswitch",
    devpost: ""
  },
  {
    id: 7,
    image: AUTOM,
    title: 'DFA-Interpreter | Automata Theory (UTD)',
    description: '• Developed a program that reads in a Deterministic Finite Automata & tests it for correctness',
    description2: '',
    skills: 'C++',
    github: 'https://github.com/linusfackler/Automata-Theory/tree/main/Coding%203',
    itch: "",
    devpost: ""
  },
  {
    id: 8,
    image: TERMINAL,
    title: 'U-Secure by Terminal© | Software Engineering (UTD)',
    description: '• Developing a software for a fingerprint-based ATM',
    description2: '• Planned a 16 week software project in a team of 4 (work in progress)',
    skills: 'Java, Project Planning and Design',
    github: 'https://github.com/linusfackler/u-secure-terminal',
    itch: "",
    devpost: ""
  },
  {
    id: 9,
    image: CMPLR,
    title: 'Compiler Design',
    description: '• Created a Compiler containing a Scanner and Parser to compile a language',
    description2: '• Developed a program to parse a grammar and read test files',
    skills: 'Java, JFlex, Cup',
    github: 'https://github.com/linusfackler/Compiler-Design',
    itch: "",
    devpost: ""
  }

  // {
  //   id: 7,
  //   image: SQUARE,
  //   title: 'Mario 2: Electric Boogaloo',
  //   description: '• Developed a 2D platformer in a team of 3 in a 2 day game jam',
  //   description2: '• Won first place at MSU Texas Game Jam in a participants vote',
  //   skills: 'GDevelop, JavaScript',
  //   github: 'https://github.com/linusfackler/GameJamSpring21',
  //   itch: 'https://linusfackler.itch.io/mario-2-electric-boogaloo'
  // }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, description2, skills, github, itch, devpost}) => {

            // ======= NORMAL PROJECTS =======
            if (itch === "" && devpost === "")
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
            else if (devpost === "") {
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
            }

            // ======= DEVPOST =======
            else {
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
                    <a href={devpost} className='btn btn-primary' target='_blank'>Devpost</a>
                  </div>
                </article>
              )
            }
          })
        }
      </div>
    </section>
  )
}

export default Portfolio