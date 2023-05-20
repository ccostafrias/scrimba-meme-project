import React from "react"

import star from "./images/star.png"

function Card(props) {
    const { list } = props

    let badge

    if (!list.openSpots) {
        badge = "sold out"
    } else if (list.location === 'online') {
        badge = "online"
    }


    return (
        <div className="card">
            {badge && <div className="card-img-badge">{badge}</div>} 
            <div className={`card-img-container`}>
                <img src={require(`./images/${list.img}`)} className="card-img"/>
            </div>
            <div className="card-content">
                <p className="card-title">
                    <img src={star} className="card-star"/>
                    <span>{list.rating}</span>
                    <span className="gray">({list.reviews}) • </span>
                    <span className="gray"> {list.country}</span>
                </p>
                <p>{list.title}</p>
                <p><strong>From ${list.price}</strong> / person</p>
            </div>
        </div>
    )
}

export default Card