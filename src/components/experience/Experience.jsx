import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <div className="experience__header">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='expierence__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expierence__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='expierence__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expierence__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Blockchain and Web3</h3>
          <div className="experience__content">

            <article className='expierence__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Wallets</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expierence__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CeFi and DeFi</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expierence__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NFTs and P2E</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expierence__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Smart Contracts</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
        {/* END OF BACKEND */}

      </div>
    </section>
  )
}

export default Experience