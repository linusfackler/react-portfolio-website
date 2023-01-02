import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey! I'm</h5>
        <h1>Linus Fackler</h1>
        <h4 className="text-light">Computer Science Student</h4>
        <h5 className="text-light">at the University of Texas at Dallas</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} className="image" alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header