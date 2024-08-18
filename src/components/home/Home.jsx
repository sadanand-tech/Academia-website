import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Footer from '../common/footer/Footer'



const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard/>
      <HAbout/>
      <Footer />
      


    </div>
  )
}

export default Home