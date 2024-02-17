import React, { useEffect, useState } from 'react'
import './Presentation.css'
import Discover from '../discover/Discover';
import MainMovie from '../mainMovie/MainMovie';

const Presentation = ({ popularMovies, topMovies }) => {

    const [ movie, setMovie ] = useState('');

    //Pa los componentes hijo, setear la pelicula principal...
    const passMovie = (movie) => {
        setMovie(movie)
    }

    //Alerta de s p a g h e t t i 
    const urlBase = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const getMovies = async () => {
        try {
          const response = await fetch(`${urlBase}?api_key=${API_KEY}`);
          const data = await response.json();
          let num = Math.floor(Math.random()
          * (10 - 0 + 1));
          setMovie(data.results[num]);
        }
        catch(error) {
          console.log('Ha ocurrido un error: ', error)
        }
    }

    useEffect(() => {
        getMovies()
    },[])
    
    //Goofy Ahh codigo
    return (
        <>
            <MainMovie 
                movie={movie}
            />
            <Discover 
                popularMovies={popularMovies}
                topMovies={topMovies}
                passMovie={passMovie}
            />
        </>
    )
}

export default Presentation
