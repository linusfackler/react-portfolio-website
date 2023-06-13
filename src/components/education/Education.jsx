import React from 'react'
import './education.css'
import IMG from '../../assets/utd.png'

const Education = () => {
  return (
    <section id='education'>
      <h2 className='education__header'>Education</h2>

    <div className="education__box">
      <div className="container education__container">
        <div className="education__school">
          <div className="education__school-image">
            <img src={IMG} alt="" />
          </div>
        </div>

        <div className="education__info">
          <h2>B.S. in Computer Science  |  GPA: 3.78</h2>
          <h3>University of Texas at Dallas (UTD)</h3>
          <h4>Graduated May 2023</h4>
          <small><br/>Relevant Coursework: <br/>
            Machine Learning, Natural Language Processing, Data Structures & Algorithms, Object Oriented Programming (OOP), Programming in C, C++,
            Java, Python, Advanced Algorithms & Analysis
          </small>
        </div>
      </div>
    </div>
      
    </section>
  )
}

export default Education