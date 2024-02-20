import { useEffect, useState } from "react";

export default function useFetchTops() {
    
    const [ tops, setTops ] = useState([])

    const urlBase2 = import.meta.env.VITE_API_URL2;
    const API_KEY = import.meta.env.VITE_API_KEY;

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

    useEffect(() => {
        getTopMovies()
    },[])

    return { tops }
}