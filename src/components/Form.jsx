export default function Form() {
    return (
        <form className="form" action="submit">
            <div className="form__inputs">
                <div>
                    <label htmlFor="top-text">Top text</label>
                    <br />
                    <input name="top-text" type="text" />
                </div>
                <div>
                    <label htmlFor="bottom-text">Bottom text</label>
                    <br />
                    <input type="text" />
                </div>
            </div>
            <button className="form__button">Get a new meme image 🖼️</button>
        </form>
    );
}
