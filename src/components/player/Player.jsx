import React from 'react'
import './Player.css'
import YouTube from 'react-youtube';
import useFetchTrailer from '../../hooks/useFetchTrailer';
import useFetchById from '../../hooks/useFetchById';

const Player = ({ movieId }) => {
    
  const { video } = useFetchTrailer(movieId);
  const { movie } = useFetchById(movieId)

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
