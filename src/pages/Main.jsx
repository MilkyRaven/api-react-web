import '../styles/Main.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
//import {Link} from "react-router-dom";
import Search from '../components/Search';
import Loading from '../components/Loading';

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
        let correctValue = value.toLowerCase()
        if (correctValue === '') {
            setAmiibosSearch(amiibos)
        } else {
        let searchedAmiibos = amiibos.filter((amiibo) => {
          return (amiibo.name.toLowerCase().includes(correctValue))
        })
        setAmiibosSearch(searchedAmiibos)
        }
      }

    return (
        <>
           {/* {console.log(amiibos)}*/}
            <Search onSearch={handleSearch}></Search>
                {!amiibosSearch && <><Loading /></>}
                { amiibosSearch && amiibosSearch.map((amiibo) => {
                    return (
                        <div class="a-box" key={amiibo.tail}>
                        <div class="img-container">
                          <div class="img-inner">
                            <div class="inner-skew">
                              <img src={amiibo.image} />
                            </div>
                          </div>
                        </div>
                        <div class="">
                          <h3>{amiibo.name}</h3>
                          <p>
                          {amiibo.amiiboSeries}
                        </p>
                      </div>
                      </div>
                    )
                })}
        </>
    )
}