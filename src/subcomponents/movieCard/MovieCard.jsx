import React from 'react'
import './MovieCard.css'

const MovieCard = ({ img, title, desc }) => {

  return (
    <div className='app__card'>
      <img src={img} alt={title} className='app__card-img'/>
      <div className='app__card-info'>
        <h3>{title}</h3>
        <p>{desc.substring(0, 200) + "..."}</p>
      </div>
    </div>
  )
}

export default MovieCard
