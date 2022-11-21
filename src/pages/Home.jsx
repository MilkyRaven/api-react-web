import './Home.css'
import React from 'react'

export default function Home() {
  return (
        <div className='home-container'>
        <div className='text-container'>
            <h1>DISCOVER YOUR NEXT AMIIBO</h1>
            <div className='description-container'>
                <p>Disponible en las principales tiendas de aplicaciones digitales</p>
                <button className='purple-btn'>SEE THE CATALOGUE</button>
            </div>
        </div>
            <img className='gba' src="/img/gba.png" alt="" />
    </div>
  )
}
