import React from 'react'
import './MovieCard3.css'

const MovieCard3 = ({ title, img, desc }) => {
  return (
    <div className='app__card3'>
      <img src={img} alt={title} />
      <div className='app__card3-info'>
        <h3>{title}</h3>
        <p>{desc.substring(0, 110) + "..."}</p>
      </div>
    </div>
  )
}

export default MovieCard3
