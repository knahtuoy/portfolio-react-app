import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <div className="services__header">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>

      <div className="services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web App UX and UI</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile App UX and UI</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cross-platform Experience</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI and UX Consulting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Redesign Services</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Websites, Web Portals, and Ecommerce</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Business Analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Front-end Design and Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Basic Backend Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Continuous Support and Evolution</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Copywriting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Graphic Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Blog Writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media Assets</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Logo Design</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services