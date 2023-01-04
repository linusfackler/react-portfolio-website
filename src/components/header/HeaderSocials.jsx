import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiDevpost} from 'react-icons/si'
import {FaItchIo} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/linusfackler" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/linusfackler" target="_blank"><BsGithub/></a>
        <a href="https://devpost.com/linusfackler" target="_blank"><SiDevpost/></a>
        <a href="https://linusfackler.itch.io/" target="_blank"><FaItchIo/></a>
    </div>
  )
}

export default HeaderSocials