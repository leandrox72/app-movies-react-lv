import React, { useEffect, useState } from 'react'
import './Player.css'
import YouTube from 'react-youtube';

const Player = ({ movieId }) => {
    
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [ video, setVideo ] = useState('')
  const [ movie, setMovie ] = useState('')

  const getMovieTrailer = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`)
    const data = await response.json()
    setVideo(data.results[0])
    console.log(data.results)
  }

  const getMovie = async () => {
    try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?&api_key=${API_KEY}`)
        const data = await response.json()
        setMovie(data)
        console.log(data)
    }
    catch(error) {
        console.error('A ocurrido un error: ', error)
    }
  }

  useEffect(() => {
    getMovieTrailer()
    getMovie()
  },[])


  const opts = {
    height: '100%',
    width: '100%',  
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className='app__player'>
      <div className='app__player-container'>
        <YouTube className='player' 
          id={video.id}
          videoId={video.key}
          opts={opts}
        />
      </div>
      <div className='app__player-data section__padding'>
        <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}/>
        <div>
          <h2><span>{movie.title}</span> | ★ {movie.vote_average}</h2>
          <h3>Playing | {video.name}</h3>
          <p>Release Date | {movie.release_date}</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Player
