import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <div className="about__header">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about__container">

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Expierence</h5>
              <small>6+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>30+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
          I've been writing code since I was twelve years old and have been doing it professionally since 2016. My technical expertise lies in developing websites and applications with languages like HTML5, CSS3 and React JS but I'm also passionate about blockchain applications and Web3 technologies.
          </p>

          <div className="about__btn">
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About