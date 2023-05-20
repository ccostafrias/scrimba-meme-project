import React from "react"

import logo from "./images/airbnb-logo.png"

function Header() {
    return (
        <>
            <nav className="nav">
                <img src={logo} className="logo"/>
            </nav>
        </>
    )
}

export default Header