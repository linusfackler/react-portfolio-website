import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {SlGraduation} from 'react-icons/sl'
import {HiOutlineWrenchScrewdriver} from 'react-icons/hi2'
import {BiCodeBlock} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className = {activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className = {activeNav === '#education' ? 'active' : ''}><SlGraduation/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''}><HiOutlineWrenchScrewdriver/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className = {activeNav === '#portfolio' ? 'active' : ''}><BiCodeBlock/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav