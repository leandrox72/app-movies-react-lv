import React, { useState } from 'react'
import './Search.css'
import { MovieCardSearch } from '../../subcomponents' 

const Search = () => {

    const [ search, setSearch ] = useState('')
    const [ results, setResults ] = useState([])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getResults()
    }

    const urlBase = import.meta.env.VITE_API_URL3;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const getResults = async () => {
        try{
            const response = await fetch(`${urlBase}?query=${search}&api_key=${API_KEY}`)
            const data = await response.json()
            setResults(data.results)
            console.log(data.results)
        }
        catch(error) {
            console.error('A ocurrido un error: ', error)
        }
    }

    return (
        <div className='app__search section__padding'>
            <form className='app__search-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={search}
                    onChange={handleChange}
                    placeholder='Nombre de Pelicula...'
                />
                <button type='submit'>Buscar</button>
            </form>
            <div className='app__search-results'>
                {results?.map((movie) => (
                    <MovieCardSearch
                        key={movie.id} 
                        title={movie.title} 
                        img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        desc={movie.overview}
                        id={movie.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Search
