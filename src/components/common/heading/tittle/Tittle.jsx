import React from 'react'

const Tittle = ({subtitle,tittle}) => {
  return (
    <div>
      <div id='heading'>
        <h3>{subtitle}</h3>
        <h1>{tittle}</h1>
      </div>
    </div>
  )
}

export default Tittle