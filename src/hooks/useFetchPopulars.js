import { useState, useEffect } from "react";

export default function useFetchPopulars() {

    const [ movies, setMovies ] = useState([])

    const urlBase = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const getMovies = async () => {
        try {
          const response = await fetch(`${urlBase}?api_key=${API_KEY}`);
          const data = await response.json();
          setMovies(data.results);
        }
        catch(error) {
          console.log('Ha ocurrido un error: ', error)
        }
    }
  
    //Llamando a los 2 fetch
    useEffect(() => {
        getMovies()
    },[])

    return { movies }
}