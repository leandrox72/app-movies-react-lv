import React from 'react'
import { Navbar, Presentation, Footer, Player } from '../components' 
import { useState, useEffect } from 'react'

const MainPage = () => {

  //Set Peliculas Populares, las Top Rated y la seleccionada
  const [ movies, setMovies ] = useState([])
  const [ tops, setTops ] = useState([])
  const [ movie, setMovie ] = useState('')

  //URLs y Clave de la API
  const urlBase = import.meta.env.VITE_API_URL;
  const urlBase2 = import.meta.env.VITE_API_URL2;
  const API_KEY = import.meta.env.VITE_API_KEY;

  //Fetch de las peliculas populares
  const getMovies = async () => {
      try {
        const response = await fetch(`${urlBase}?api_key=${API_KEY}`);
        const data = await response.json();
        setMovies(data.results);
        setMovie(data.results[0]);
      }
      catch(error) {
        console.log('Ha ocurrido un error: ', error)
      }
  }

  //Fetch de las peliculas mejor calificadas
  const getTopMovies = async () => {
      try {
        const response = await fetch(`${urlBase2}/top_rated?api_key=${API_KEY}`);
        const data = await response.json();
        setTops(data.results)
      }
      catch(error) {
        console.log('Ha ocurrido un error: ', error)
      }
  }

  //Llamando a los 2 fetch
  useEffect(() => {
      getMovies()
      getTopMovies()
  },[])

  return (
    <>
        <Navbar />
        <Presentation
          popularMovies={movies}
          topMovies={tops}
        />
        <Footer />
    </>
  )
}

export default MainPage
