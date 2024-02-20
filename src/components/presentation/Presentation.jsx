import React, { useEffect, useState } from 'react'
import Discover from '../discover/Discover';
import MainMovie from '../mainMovie/MainMovie';
import useFetchPopulars from '../../hooks/useFetchPopulars';
import useFetchTops from '../../hooks/useFetchTops';
import useFetchRandom from '../../hooks/useFetchRandom';
import useFetchUpcoming from '../../hooks/useFetchUpcoming';

const Presentation = () => {

    const { random } = useFetchRandom();
    const { movies } = useFetchPopulars();
    const { tops } = useFetchTops();
    const { upcoming } = useFetchUpcoming();

    // A little bit of non optimal code...
    const [ movie, setMovie ] = useState('');
    
    useEffect(() => {
        setMovie(random)
    },[random])

    const passMovie = (movie) => {
        setMovie(movie)
    }

    return (
        <>
            <MainMovie 
                movie={movie}
            />
            <Discover 
                popularMovies={movies}
                topMovies={tops}
                passMovie={passMovie}
                upcomings={upcoming}
            />
        </>
    )
}

export default Presentation
