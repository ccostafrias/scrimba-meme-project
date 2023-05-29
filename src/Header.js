import React from "react"

import logo from "./images/troll-face.png"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="troll face" />
            <h1>Meme Generator</h1>
            <p>React Course - Project 3</p>
        </header>       
    )
}

export default Header