import React from 'react'
import CV from '../../assets/resume-linus-fackler.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download resume</a>
        <a href="#contact" className='btn btn-primary'>Hit me up</a>
    </div>
  )
}

export default CTA