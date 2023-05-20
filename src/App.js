import React from "react"

import Header from "./Header"
import Hero from "./Hero"
import Cards from "./Cards"

import { cards } from "./cardsList"

function App() {
    return (
        <>
            <header>
                <Header />
                <Hero />
            </header>
            <main>
                <Cards cardList={cards}/>
            </main>
        </>       
    )
}

export default App