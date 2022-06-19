import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiNotion} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.co/in/WillTajer" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/knahtuoy" target="_blank"><BsGithub /></a>
        <a href="https://wtmd.willtajer.xyz" target="_blank"><SiNotion /></a>
    </div>
  )
}

export default HeaderSocials