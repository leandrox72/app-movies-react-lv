import React from 'react';
import './Discover.css';
import { MovieCard } from '../../subcomponents';

const Discover = ({ popularMovies, topMovies, passMovie }) => {
  
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }


    return (
        <div className='app__discover section__padding'>
            <h2>trending</h2>
            <div className='app__discover-row'>
                {popularMovies?.map((movie) => (
                    <div key={movie.id} onClick={() => {
                        passMovie(movie)
                        toTheTop()            
                    }}>
                        <MovieCard 
                            title={movie.title} 
                            img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            desc={movie.overview}
                    />
                    </div>
                ))}
            </div>
            <h2>top rated</h2>
            <div className='app__discover-row'>
                {topMovies?.map((movie) => (
                    <div key={movie.id} onClick={() => {
                        passMovie(movie)
                        toTheTop()
                    }}>
                        <MovieCard 
                            title={movie.title} 
                            img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            desc={movie.overview}      
                    />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Discover
