import React from "react"

import heroImg from "./images/photo-grid.png"

function Hero() {
    return (
        <>
            <div className="hero">
                <img src={heroImg} className="hero-img"/>
                <div className="hero-text">
                    <h1>Online Experiences</h1>
                    <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
            </div>
        </>
    )
}

export default Hero