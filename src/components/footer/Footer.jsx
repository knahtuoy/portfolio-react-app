import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>dev.willtajer.xyz</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/WillTajer">< FaFacebookF /></a>
        <a href="https://instagram.com/WillTajer"><FiInstagram /></a>
        <a href="https://twitter.com/Knaht_Uoy"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; WTMD 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer