import React from 'react';
import './Hero.css'
const Hero:React.FC  = ()=> {
    return (
    <div className='hero-container'>
        <div className='hero-main-img'>
            <div className='hero-main-box'>
                <div className='hero-description-text'>
                    Epicure works with the top 
                    <br />chef restaurants in Tel Aviv
                </div >
                    <div className='hero-search-box'>
                        <button id="searchBtn" className="hero-search-btn">
                            <img className="hero-search-img-btn" src="/images/header_images/SearchIcon.svg" alt="SearchIcon" />
                        </button> 
                        <input id="searchText" className='search-text-input' type="text" placeholder= "Search for restaurant cuisine, chef">
                        </input>
                    </div>                   
            </div>
        </div>
    </div> 
    )
};

export default Hero;