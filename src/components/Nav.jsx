//import './Nav.css';
import '../styles/Nav.css';
import React from 'react'
import { Link } from 'react-router-dom';

{/* active */}


export default function Nav() {

  return (

<nav>
<ul>
  <div className='logo'><img src="/img/logo.png" alt="" />
        <li><Link className="" to="/">Home </Link></li>
        <li><Link className="nav-link" to="/Games"> Games </Link></li>
        <li><Link className="nav-link" to="/Types"> Types </Link></li>
        <li><Link className="nav-link" to="/About"> About </Link></li>
        </div>
    </ul>
    
</nav>

  )
}

