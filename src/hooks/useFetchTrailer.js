import { useState, useEffect } from "react";

export default function useFetchTrailer( movieId ) {

    const [ video, setVideo ] = useState('')

    const urlBase = import.meta.env.VITE_API_URL2;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const getTrailer = async () => {
        const response = await fetch(`${urlBase}/${movieId}/videos?api_key=${API_KEY}`);
        const data = await response.json();
        if (data.results) {
            const trailer = data.results.find(movie=> {
              return movie.type === "Trailer"  
            })
            setVideo(trailer)
        }
    }
  
    //Llamando a los 2 fetch
    useEffect(() => {
        getTrailer()
    },[])

    return { video }
}