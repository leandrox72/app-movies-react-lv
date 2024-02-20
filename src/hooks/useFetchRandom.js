import { useState, useEffect } from "react";

export default function useFetchRandom() {

    const [ random, setRandom ] = useState('')

    const urlBase = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const getRandom = async () => {
        try {
          const response = await fetch(`${urlBase}?api_key=${API_KEY}`);
          const data = await response.json();
          let num = Math.floor(Math.random()*(19 - 0 + 1));
          setRandom(data.results[num]);
        }
        catch(error) {
          console.log('Ha ocurrido un error: ', error)
        }
    }
  
    //Llamando a los 2 fetch
    useEffect(() => {
        getRandom()
    },[])

    return {random}
}