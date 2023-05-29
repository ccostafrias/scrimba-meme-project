import React, { useState, useEffect } from "react"

function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data))
        }, [])

    console.log(allMemeImages)
        
    function getImage() {
        const { memes } = allMemeImages.data
        const length = memes.length
        const random = Math.floor(Math.random() * length)
        const { url } = memes[random]
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }    
        })
    }

    function handleChange(event) {
        setMeme(prevMeme => {
            const {name, value} = event.target
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <>
            <div className="form">
                <input 
                    type="text" 
                    id="top-txt" 
                    name="topText" 
                    value={meme.topText}
                    onChange={handleChange}
                    placeholder="Top text"/>
                <input 
                    type="text" 
                    value={meme.bottomText}
                    name="bottomText"
                    id="bot-txt" 
                    onChange={handleChange}
                    placeholder="Bottom text"/>
                <button onClick={getImage}>Get a new meme image 🖼</button>
            </div>
            <div className="image-container">
                <img src={meme.randomImage} />
                <h2 className="top image--txt">{meme.topText}</h2>
                <h2 className="bot image--txt">{meme.bottomText}</h2>
            </div>
        </>
    )
}

export default Meme