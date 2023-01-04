import React from 'react'
import CV from '../../assets/resume-linus-fackler.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} target='_blank' className='btn btn-light' rel="noreferrer">Download resume</a>
        <a href="#contact" className='btn btn-primary'>Connect with me</a>
    </div>
  )
}

export default CTA