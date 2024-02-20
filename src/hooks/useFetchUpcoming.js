import { useState, useEffect } from "react";

export default function useFetchUpcoming() {

    const [ upcoming, setUpcoming ] = useState([])

    const urlBase = import.meta.env.VITE_API_URL2;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const getUpcoming = async () => {
        try {
          const response = await fetch(`${urlBase}/upcoming?api_key=${API_KEY}`);
          const data = await response.json();
          setUpcoming(data.results.slice(6, 12));
        }
        catch(error) {
          console.log('Ha ocurrido un error: ', error)
        }
    }
  
    //Llamando a los 2 fetch
    useEffect(() => {
        getUpcoming()
    },[])

    return { upcoming }
}