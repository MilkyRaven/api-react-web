import Nav from '../components/Nav'
import React from 'react'
import { Outlet } from 'react-router-dom'
import '../styles/Main.css';
import '../styles/loading.css'
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const View = () => {
    const [loading, setLoading] = useState(true);

    const loadingDone = () => {
        <div class="loader">
      	  <div class="spinner"></div>
        </div>
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            loadingDone();
        }, 3000);
    }, []);
        {/*!loading &&*/}

      return  (
        
            <> 
            <div className="navcontainer">
            <Nav />
            </div>
            
            
            <Outlet /> 
            
            
            <Footer />
            </>
        )
}

export default View;
