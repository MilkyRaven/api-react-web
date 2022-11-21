import './Main.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
//import {Link} from "react-router-dom";
import Search from '../components/Search';

const apiEndpoint = "https://www.amiiboapi.com/api/amiibo";

export default function Main() {
    const [amiibos, setAmiibos] = useState(null)
    const [amiibosSearch, setAmiibosSearch] = useState(amiibos)

    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiEndpoint)
            setAmiibos(res.data.amiibo)
            setAmiibosSearch(res.data.amiibo)

        }
        apiCall()
    }, [])
    
    const handleSearch = (value) => {
        if (value === '') {
            setAmiibosSearch(amiibos)
        } else {
        let searchedAmiibos = amiibos.filter((amiibo) => {
          return (amiibo.name.toLowerCase().includes(value))
        })
        setAmiibosSearch(searchedAmiibos)
        }
      }

    return (
        <div>
            {/* {console.log(amiibos)} */}
            <h2>Amiibo List</h2>
            <Search onSearch={handleSearch}></Search>
            <div className='amiibo-list-container'>
                { amiibosSearch && amiibosSearch.map((amiibo) => {
                    return (
                        <div className='amiibo-card'>
                            <div className='img-container'>
                                <img className='amiibo-img' alt='amiibo' src={amiibo.image} />
                            </div>
                            <h3>{amiibo.name}</h3>
                            <p>{amiibo.amiiboSeries}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}