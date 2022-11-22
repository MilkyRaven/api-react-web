import axios from "axios";
import { useState } from "react";
import React from "react";
import '../styles/buttons.css';
import '../styles/Main.css'
import '../styles/Search.css'


const Games = () => {
    const [AmiGameSerie, setAmiGameSerie] = useState(null);
    const [amiSearch, setamiSearch] = useState();
    const [game3DS, setgame3DS] = useState();

    const amiibo = "https://www.amiiboapi.com/api/amiibo";
    const showusage = `${amiibo}/?character=${amiSearch}&showusage`;
    const test = "https://www.amiiboapi.com/api/amiibo"
    const test2 = "https://www.amiiboapi.com/api/amiibo/?gameSeries=3ds"
    //const amiibotest = `amiibo/?character=zelda&showusage`;
    {/*https://amiiboapi.com/?showusage*/}

    const handleSubmit = (e) => {
        const apiCall = async () => {
            const res = await axios.get(showusage)
            setamiSearch(res.data && res.data.amiibo)
            setAmiGameSerie(res.data.amiibo)
            setgame3DS(res.data.amiibo)
            //console.log(setamiSearch)
        } 
        apiCall()
    }

   function handleSubmit2() {
        const apiCall = async () => {
            const res = await axios.get(test2)
            setgame3DS(res.data.amiibo[0]) 
        console.log(game3DS)
        }
        apiCall()
    }

    
    ///////////////////////////////////////////////////////////////////////////
        return (     
            <>
            <main>

        <h1>Games<div className="sphp"></div></h1>
        </main>

            <button className="btn" onClick={handleSubmit2}>Test API</button>

        <div className='search-container'>
        <input type="text" placeholder="Example: Zelda, Link, Peach, Yoshi" className='input' onChange={(e) => setamiSearch(e.target.value)} />
        <button onClick={handleSubmit}>Search</button>
        </div>
        <main>
            { !AmiGameSerie && <><h1>Search...</h1></> }
            {
                AmiGameSerie && AmiGameSerie.map((amiibo) => {
                    return (
                        <div class="a-box" >
                        <div class="img-container">
                        <div class="img-inner">
                        <div class="inner-skew">
                        <img src={amiibo.image} alt={amiibo.tail} />
                        </div>
                        </div>
                        </div>
                        <div class="">
                        <h3>{amiibo.gameSeries}</h3>
                        <p>{amiibo.character}</p>
                        {
                            Games.map((game) => {
                                return (
                                    <p>{game.amiiboUsage}</p>
                                )
                            })
                        }
                        
                        </div>
                        </div>
                    )
                })
            }</main>
        </>
        
    )
    
}

export default Games;
