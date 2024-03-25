import { useState, useEffect } from "react";

export default function useFetchTrailer( movieId ) {

    const [ video, setVideo ] = useState('')
    const [ isLoading, setIsLoading] = useState(false);
    const [ error, setError ] = useState()

    const urlBase = import.meta.env.VITE_API_URL2;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const getTrailer = async () => {

        setIsLoading(true)

        try {
            const response = await fetch(`${urlBase}/${movieId}/videos?api_key=${API_KEY}`);
            const data = await response.json();
            if (data.results) {
                const trailer = data.results.find(movie=> {
                  return movie.type === "Trailer"  
                })
                setVideo(trailer)
            }
        }
        catch(error) {
            setError(error)
        }
        finally{
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
        getTrailer()
    },[])

    return { video }
}