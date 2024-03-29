import { useState, useEffect } from "react";

export default function useFetchMovies(url) {

    const [ movies, setMovies ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState()

    const getMovies = async () => {     
        setIsLoading(true)
        
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
    }

    if (error) {
      console.log("ocurrio un error: ", error)
    }

    useEffect(() => {
        getMovies()
    },[])

    return movies 
}