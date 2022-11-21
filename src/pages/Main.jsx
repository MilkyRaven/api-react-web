import './Main.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
//import {Link} from "react-router-dom";

const apiEndpoint = "https://www.amiiboapi.com/api/amiibo";

export default function Main() {
    const [amiibos, setAmiibos] = useState([])
    useEffect(() => {
        const apiCall = async () => {
            const res = await axios.get(apiEndpoint)
            setAmiibos(res.data.amiibo)

        }
        apiCall()
    }, [])

    return (
        <div>
            {/* {console.log(amiibos)} */}
            <h2>Amiibo List</h2>
            <div className='amiibo-list-container'>
                {amiibos.map((amiibo) => {
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