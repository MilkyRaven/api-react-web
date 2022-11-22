import axios from "axios";
import { useState } from "react";
import React from "react";
import '../styles/buttons.css';
import '../styles/Main.css'
import '../styles/Search.css'

const Types = () => {
    const [AmiGameSerie, setAmiGameSerie] = useState(null);
    const [amiSearch, setamiSearch] = useState();
    const amiibo = "https://www.amiiboapi.com/api/amiibo";
        

    //const ApiValue = `${amiibo}/?series=${amiSearch}`;
    const ApiVYarn = `${amiibo}/?type=yarn`;
    const ApiVCard = `${amiibo}/?type=card`;
    const ApiVFigure = `${amiibo}/?type=figure`;;

    const handleSubmit = (e) => {
        const apiCall = async () => {
            const res = await axios.get(ApiVYarn)
            setamiSearch(res.data && res.data.amiibo)
            setAmiGameSerie(res.data && res.data.amiibo)
        }
        apiCall()
    }

    const handleSubmit2 = (e) => {
        const apiCall = async () => {
            const res = await axios.get(ApiVCard)
            setamiSearch(res.data && res.data.amiibo)
            setAmiGameSerie(res.data && res.data.amiibo)
        }
        apiCall()
    }

    const handleSubmit3 = (e) => {
        const apiCall = async () => {
            const res = await axios.get(ApiVFigure)
            setamiSearch(res.data && res.data.amiibo)
            setAmiGameSerie(res.data && res.data.amiibo)
        }
        apiCall()
    }

    const handleSubmit6 = (e) => {
        const apiCall = async () => {
            const res = await axios.get(amiibo)
            setamiSearch(res.data && res.data.amiibo)
            setAmiGameSerie(res.data && res.data.amiibo)
        }
        apiCall()
    }
    
    ///////////////////////////////////////////////////////////////////////////
        return (     
            <>
        <main>
        <h1>Type of Amiibo<div className="sphp"></div></h1>
        </main>
        
        <div className="search-container"> 
        <button className="button" onClick={handleSubmit}>Yarn</button>
        <button className="button" onClick={handleSubmit2}>Card</button>
        <button className="button" onClick={handleSubmit3}>Figure</button>
        <button className="button" onClick={handleSubmit6}>All</button>
        </div>
        
        <main>
            { !amiSearch && <h1>Search for your Amiibo</h1> }
            {
                AmiGameSerie && AmiGameSerie.map((amiibo) => {
                    return (
                        <>
                            <div class="a-box" key={amiibo.tail}>
                            <div class="img-container">
                            <div class="img-inner">
                            <div class="inner-skew">
                            <img src={amiibo.image} />
                            </div>
                            </div>
                            </div>
                            <div>
                            <h4>{amiibo.gameSeries}</h4>
                            <p><b>Type:</b> {amiibo.type} </p>
                            <p><b>Name:</b> {amiibo.character} </p>
                            <p><b>Game:</b> {amiibo.amiiboSeries}  </p>
                            <p><b>Release:</b> {amiibo.release.na} </p>
                            </div>
                            </div>

                        </>
                        
                    )
                })
            }</main>
        </>
    )
}

export default Types;