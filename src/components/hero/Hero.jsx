import React, { useEffect, useState } from 'react'
import Discover from '../discover/Discover';
import MainMovie from '../mainMovie/MainMovie';
import { useFetchMovies } from '../../hooks'; 

const Hero = () => {

    // Api cosas...
    const urlBase = import.meta.env.VITE_API_URL;
    const urlBase2 = import.meta.env.VITE_API_URL2;
    const API_KEY = import.meta.env.VITE_API_KEY;

    // Peliculas
    const movies = useFetchMovies(`${urlBase}?api_key=${API_KEY}`);
    const tops = useFetchMovies(`${urlBase2}/top_rated?api_key=${API_KEY}`);
    const upcoming = useFetchMovies(`${urlBase2}/upcoming?api_key=${API_KEY}`);
    
    // Solucion definitivamente no optima...
    // Por alguna razon si no lo hago especificamente asi
    // la pelicula random no funciona...
    const [ movie, setMovie ] = useState('');
    
    useEffect(() => {
        setMovie(movies[0])
    },[movies])

    const passMovie = (movie) => {
        setMovie(movie)
    }

    return (
        <>
            <MainMovie 
                movie={movie}
            />
            <Discover 
                popularMovies={movies}
                topMovies={tops}
                passMovie={passMovie}
                upcomings={upcoming?.slice(0,6)}
            />
        </>
    )
}

export default Hero
