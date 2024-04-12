import React from 'react'
import './MainMovie.css'
import { Link } from 'react-router-dom';

const MainMovie = ({ movie }) => {

    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  
    return (
    <div className='app__hero section__padding'>
        <img className='banner' src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} draggable={false}/>
        <div className='app__hero-content'>
            <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}/>
            <div className='app__hero-info'>
                <h2>{movie?.title}</h2>
                <p className='section__p'>{movie?.release_date?.slice(0,4)} | ★{Math.round(movie?.vote_average * 100) / 100}</p>
                <div className='divisor'/>
                <p className='movie__desc section__p'>{movie?.overview}</p>
                <Link to={`/movie/${movie?.id}`} onClick={toTheTop} className='app__hero-btn'>
                    Watch
                </Link> 
            </div>
        </div>
    </div>
  )
}

export default MainMovie
