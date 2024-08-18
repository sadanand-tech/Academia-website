import React from 'react'
import "./hero.css"
import Tittle from '../../common/heading/tittle/Tittle'

const Hero = () => {
  return (
    <>
    <section className='hero'>
      <div className="container">
        <div className="row">
          <Tittle subtitle='WELCOME TO ACADAMIA ' tittle='Best online Education'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eum.</p>
          <button className="primary-btn">
            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
          </button>
          <button >
            VIEW COURSE<i className='fa fa-long-arrow-alt-right'></i>
          </button>
        </div>
      </div>
    </section>
    <div className="margin"></div>
    </>
  )
}

export default Hero