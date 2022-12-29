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
    const showusage2 = `${amiibo}/?character=Zelda&showusage`
    const test = "https://www.amiiboapi.com/api/amiibo"
    const test2 = "https://www.amiiboapi.com/api/amiibo/?gameSeries=3ds"
    //const amiibotest = `amiibo/?character=zelda&showusage`;
    {/*https://amiiboapi.com/?showusage*/}

    const handleSubmit = (e) => {
        const apiCall = async () => {
            const res = await axios.get(showusage2)
            setamiSearch(res.data && res.data.amiibo)
            setAmiGameSerie(res.data.amiibo)
            setgame3DS(res.data.amiibo)
            //console.log(setamiSearch)
            //console.log(setgame3DS)
            console.log(game3DS)
        } 
        apiCall()
    }

   function handleSubmit2() {
        const apiCall = async () => {
            const res = await axios.get(test2)
            setgame3DS(res.data.amiibo[1].game3DS) 
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
        
        <button className="btn" onClick={handleSubmit}> Api Test 2</button>
        <button className="btn" onClick={handleSubmit2}>Test API</button>

        <div className='search-container'>
        <input type="text" placeholder="Example: Zelda, Link, Peach, Yoshi" className='input' onChange={(e) => setamiSearch(e.target.value)} />
        <button onClick={handleSubmit}>Search</button>
        </div>
        <main>
            { !game3DS && <><h1>Search...</h1></> }
            {
                game3DS && game3DS.map((games, index) => {
                    return (
                        <div className="a-box" index={index}>
                        <div className="img-container">
                        <div className="img-inner">
                        <div className="inner-skew">
                        <img src={games.image} alt={games.tail} />
                        </div>
                        </div>
                        </div>
                        <div className="">
                        <h3></h3>
                        <p>{games.games3DS}</p>

                        {/*
                                                {
                            Games.map((game) => {
                                return (
                                    <p>{game.amiiboUsage}</p>
                                )
                            })
                        }*/}
                        </div>
                        </div>
                    )
                })
            }</main>
        </>
        
    )
    
}

export default Games;
