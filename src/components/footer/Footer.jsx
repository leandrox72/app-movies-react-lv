import React from 'react'
import './Footer.css'
import { BsInstagram, BsTwitterX, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <p>Powered by TheMovieDB</p>
      <div className='divisor'/>
      <div className='app__footer-icons'>
        <BsInstagram className='info-icon' />
        <BsTwitterX className='info-icon' />
        <BsLinkedin className='info-icon' />
      </div>
    </div>
  )
}

export default Footer
