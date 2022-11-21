import React from 'react'

export default function Search(props) {
    const {onSearch} = props

  return (
    <div>
        <input
        type="text"
        onChange={(event)=> onSearch(event.target.value)}
        >
        </input>
    </div>
  )
}
