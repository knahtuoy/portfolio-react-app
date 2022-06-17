import React from 'react'
import './portfolio.css'
import IMG1 from'../../assets/portfolio1.jpg'
import IMG2 from'../../assets/portfolio2.jpg'
import IMG3 from'../../assets/portfolio3.jpg'
import IMG4 from'../../assets/portfolio4.jpg'
import IMG5 from'../../assets/portfolio5.png'
import IMG6 from'../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio item 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
        {/* END OF PORTFOLO ITEM 1 */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio item 2" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
        {/* END OF PORTFOLO ITEM 2 */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio item 3" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
        {/* END OF PORTFOLO ITEM 3 */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="portfolio item 4" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
        {/* END OF PORTFOLO ITEM 4 */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="portfolio item 5" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
        {/* END OF PORTFOLO ITEM 5 */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="portfolio item 6" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
        {/* END OF PORTFOLO ITEM 6 */}
      </div>
    </section>
  )
}

export default Portfolio