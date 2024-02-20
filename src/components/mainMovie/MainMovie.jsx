import React from 'react'
import './MainMovie.css'
import { Link } from 'react-router-dom';

const MainMovie = ({ movie }) => {
  
    return (
    <div className='app__presentation section__padding'>
        <img className='banner' src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}/>
        <div className='app__presentation-content'>
            <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}/>
            <div className='app__presentation-info'>
                <h2>{movie?.title}</h2>
                <p>{movie?.release_date} | ★{movie?.vote_average}</p>
                <div className='divisor'/>
                <p>{movie?.overview}</p>
                <Link to={`/movie/${movie.id}`}>
                    <button type='button'>Ver</button>
                </Link> 
            </div>
        </div>
    </div>
  )
}

export default MainMovie
