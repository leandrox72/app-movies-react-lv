import { useState, useEffect } from "react";

export default function useFetchById( movieId ) {

    const [ movie, setMovie ] = useState('')

    const urlBase = import.meta.env.VITE_API_URL2;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const getMovie = async () => {
        try{
            const response = await fetch(`${urlBase}/${movieId}?&api_key=${API_KEY}`)
            const data = await response.json()
            setMovie(data)
        }
        catch(error) {
            console.error('A ocurrido un error: ', error)
        }
      }
  
    //Llamando a los 2 fetch
    useEffect(() => {
        getMovie()
    },[])

    return { movie }
}