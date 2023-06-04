import './forth-body.css';
import market from "../images/market.png";

export const ForthBody = () => {
    return (
        <div id="forth-body" >
            <img src={market} id="image-1" data-scroll data-scroll-speed="1"/>
            <div id="first-word" data-scroll data-scroll-speed="9">
                <p>N</p>
                <p>o</p>
                <p id="letter-1">1</p>
                <p>9</p>
                <p>9</p>
            </div>
        </div>
    )
}