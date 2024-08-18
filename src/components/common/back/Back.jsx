import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Back = ({tittle}) => {
  const location = useLocation()
  return (
    <div>
      <section className='back'>
        <h2>Home /{location.pathname.split("/")[1]} </h2>
        <h1>{tittle}</h1>

      </section>
      <div className="margin"></div>
    </div>
  )
}

export default Back