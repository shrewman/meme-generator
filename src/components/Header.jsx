import trollfaceSvg from '../assets/trollface.svg';

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="nav__left">
                    <img src={trollfaceSvg} alt="trollface" className='trollface-svg'/>
                    <h1 className="title">Meme Generator</h1>
                </div>
                <div className="nav__right">
                    React Course - Project 3
                </div>
            </nav>
        </header>
    );
}
