import React from 'react'
import '../styles/Search.css';

export default function Search(props) {
    const {onSearch} = props

  return (
    <div className='search-container'>
        <input className='input'
        type="text"
        placeholder='search your amibo here...'
        onChange={(event)=> onSearch(event.target.value)}
        >
        </input>
    </div>
  )
}
