import { Icard } from "../types/typeCards"
import nftImage from '../assets/image-equilibrium.jpg'
import iconClock from '../assets/icon-clock.svg'

export default function Card({ title, text, criptoIcon, criptoValue, criptoSigla, username, profileImg }: Icard) {
    return (
        <main>
            <div className="images-container">
                <span className="overlay">
                    <button onClick={() => alert('Thank u for testing!')}></button>
                </span>
                <img loading="lazy" src={nftImage} alt="nft" />
            </div>
            <h1>{title}</h1>
            <p>{text}</p>

            <section className="criptoInfo">
                <article className="value-info">
                    <img className="icon" src={criptoIcon} alt="ethereum icon" />
                    <p className="value">{criptoValue} {criptoSigla}</p>
                </article>
                <article className="data-info">
                    <img className="icon" src={iconClock} alt="ethereum icon" />
                    <p>  3 days left</p>
                </article>
            </section>
            <hr />
            <footer>
                <img src={profileImg} alt="user name" />
                <p> Creation of <span className="accent"> {username ? username : 'Anonymous'}</span></p>
            </footer>
        </main>
    )
}