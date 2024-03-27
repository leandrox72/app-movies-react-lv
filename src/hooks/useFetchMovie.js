import { useState, useEffect } from "react";

export default function useFetchMovie(url, random) {

    const [ movie, setMovie ] = useState()
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState()


    const getMovie = async () => {   
        setIsLoading(true)
        
        try {
          const response = await fetch(url);
          const data = await response.json();
          if (random === true) {
            let num = Math.floor(Math.random()*(19 - 0 + 1));
            setMovie(data.results[num]);
          }
          else {
            setMovie(data)
          }
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
        getMovie()
    },[])

    return movie
}