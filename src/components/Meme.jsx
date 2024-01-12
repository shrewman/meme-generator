import { useState } from "react";
import memesData from "../memesData";

export default function Meme() {

    const [meme, setMeme] = useState("");

    function getRandomMeme() {
        const random = Math.floor(Math.random() * 100);
        setMeme(memesData["data"]["memes"][random].url);
    }

    return (
        <main>
            <div className="form" action="submit">
                <div className="form__inputs">
                    <div>
                        <label htmlFor="top-text">Top text</label>
                        <br />
                        <input
                            name="top-text"
                            type="text"
                            placeholder="Top text"
                        />
                    </div>
                    <div>
                        <label htmlFor="bottom-text">Bottom text</label>
                        <br />
                        <input
                            name="bottom-text"
                            type="text"
                            placeholder="Bottom text"
                        />
                    </div>
                </div>
                <button onClick={getRandomMeme} className="form__button">
                    Get a new meme image 🖼️
                </button>
            </div>
                <img className="meme-img" src={meme} alt="" />
        </main>
    );
}
