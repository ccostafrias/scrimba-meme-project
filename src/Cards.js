import React from "react"

import Card from "./Card"

function Cards(props) {
    const { cardList } = props
    return (
        <div className="cards">
            {cardList.map(card => {
                return <Card 
                    key={card.id}
                    list={card}
                />
            })}
        </div>
    )
}

export default Cards