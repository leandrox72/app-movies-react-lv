import { useState, useEffect } from "react";
import React from "react";

export default function useFetchMovies(url) {

    const [ movies, setMovies ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState()
    let tops = movies;

    const getMovies = async () => {
        
        setIsLoading(true)
        const fetchUrl = url;
        
        try {
          const response = await fetch(url);
          const data = await response.json();
          setMovies(data.results);
        }
        catch(error) {
          setError(error)
        }
        finally {
          setIsLoading(false)
        }
    }
    
    if (isLoading) {
      console.log("loading...")
      console.log(url)
    }

    if (error) {
      console.log("ocurrio un error: ", error)
    }

    useEffect(() => {
        getMovies()
    },[])

    return movies 
}