import React from 'react'
import { Navbar, Player, Footer } from '../components'
import { useParams } from 'react-router-dom'


const MoviePage = () => {
  
  const { movieId } = useParams()
  
  return (
    <>
      <Navbar />
      <Player 
        movieId={movieId}
      />
      <Footer />
    </>
  )
}

export default MoviePage
