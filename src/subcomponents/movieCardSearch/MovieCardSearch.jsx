import React from 'react'
import './MovieCardSearch.css'
import { Link } from 'react-router-dom'

const MovieCardSearch = ({ img, title, desc, id }) => {
  return (
    <Link to={`/movie/${id}`} className='app__card2'>
      <img src={img} className='app__card2-img'/>
      <div className='app__card2-info'>
        <h3>{title}</h3>
        <p>{desc.substring(0, 200) + "..."}</p>
      </div>
    </Link>
  )
}

export default MovieCardSearch
