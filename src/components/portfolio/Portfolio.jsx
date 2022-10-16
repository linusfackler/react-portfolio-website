import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portofolio__container">

        {/* ======== 1ST ITEM ======== */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Your mom</h3>
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>

        {/* ======== 2ND ITEM ======== */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Your mom</h3>
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>

        {/* ======== 3RD ITEM ======== */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Your mom</h3>
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>

        {/* ======== 4TH ITEM ======== */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Your mom</h3>
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>

        {/* ======== 5TH ITEM ======== */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Your mom</h3>
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>

        {/* ======== 6TH ITEM ======== */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Your mom</h3>
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>

        {/* ======== 7TH ITEM ======== */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Your mom</h3>
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>

        {/* ======== 8TH ITEM ======== */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Your mom</h3>
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio