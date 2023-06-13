import React from 'react'
import './contact.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ifdliz9', 'template_40eswqp', form.current, '6jcpUyxleHlQAkYnS')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* ========= LINKEDIN ========== */}
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href="http://www.linkedin.com/in/linusfackler" target="_blank"  >Connect with me</a>
          </article>

          {/* ========= EMAIL ========== */}
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>linus.fackler@iCloud.com</h5>
            <a href="mailto:linus.fackler@iCloud.com" target="_blank"  >Send a message</a>
          </article>
        </div>
        
        {/* ========= FORM ========== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact