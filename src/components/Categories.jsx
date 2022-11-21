import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <div>
        <Link to="/series">Search by Series</Link>
        <Link to="/character">Search by Character</Link>
        <Link to="/type">Search by Type</Link>
    </div>
  )
}
