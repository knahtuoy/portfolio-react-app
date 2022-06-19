import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-about.jpg'
import HeaderSocials from './HeaderSocials'
import Typed from 'react-typed';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Will Tajer</h1>
        <div className='flex justify-end items-center'>
          <Typed
            className='header__typed'
            strings={['Fullstack Developer', 'Blockchain Consultant', 'IT Professional']}
            typeSpeed={90}
            backSpeed={60}
            loop
          />
        </div>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <div className="me-image">
            <img src={ME} alt="Will Tajer" />
          </div>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header