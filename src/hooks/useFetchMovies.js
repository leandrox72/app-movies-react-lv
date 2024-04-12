import { useState, useEffect } from "react";

export default function useFetchMovies(url, single) {

    const [ movies, setMovies ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState()

    const getMovies = async () => {     
        setIsLoading(true)
        
        try {
          const response = await fetch(url);
          const data = await response.json();
          if (single === true) {
            setMovies(data)
          }
          else {
            setMovies(data.results);
          }
        }
        catch(error) {
          setError(error)
        }
        finally {
          setIsLoading(false)
        }
    }
    
    if (error) {
      console.log("ocurrio un error: ", error)
    }

    useEffect(() => {
        getMovies()
    },[])

    return movies 
}