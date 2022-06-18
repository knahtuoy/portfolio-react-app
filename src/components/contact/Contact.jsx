import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'
import {useState} from 'react'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6nqwznk', 'template_bd8w0xq', form.current, 'CqiCuUe93taPcRJzf')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <div className="contact__header">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail class='contact__option-icon'/>
            <h4>Email</h4>
            <h5>contact@willtajer.xyz</h5>
            <a href="mailto:contact@willtajer.xyz" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine class='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Will Tajer</h5>
            <a href="https://m.me/WillTajer" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp class='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+18054134124</h5>
            <a href="https://https://api.whatsapp.com/send?phone+18054134124" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        {/* END OF FORM INPUTS */}
      </div>
    </section>
  )
}

export default Contact