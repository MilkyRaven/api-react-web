import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <img id='logo' src="/img/logo.png" alt="" />
        <Link to="/random">Random Amiibo</Link>
    </nav>
  )
}

