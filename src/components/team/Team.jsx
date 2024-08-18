import React from 'react'
import "./team.css"
import Back from '../common/back/Back'
import TeamCard from './TeamCard'
import Footer from '../common/footer/Footer'

const Team = () => {
  return (
    <>
    <Back tittle="Team" />
    <section className='team padding'>
      <div className="container grid">
        <TeamCard />
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Team