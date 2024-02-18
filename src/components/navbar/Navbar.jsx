import React from 'react'
import { FaSearch } from "react-icons/fa";
import './Navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [ color, setColor ] = useState(false)
    
    const changeColor = () => {
        if(window.scrollY >= 50) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
      <div className={color ? 'app__navbar colorChange' : 'app__navbar'}>
        <Link to={'/'}><h2>Movie Center 🍿</h2></Link>
        <Link to={'/search'}><FaSearch className='app__navbar-icon' type='submit' /></Link>
      </div>
  )
}

export default Navbar
