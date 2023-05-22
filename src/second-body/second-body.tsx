import './second-body.css';
import dessert from "../images/dessert.png";

export const SecondBody = () => {

    return (
        <div id="second-body" >
            <div id="first-image-content" data-scroll data-scroll-speed="1">
                <img src={dessert} id="first-image" alt="first" />
                <p>QUÉ HACER</p>
                <div id="first-let-img-first-line-word-underline"></div>
                <p>Agenda Semanal. <br />Del 22 al 28 de <br />mayo</p>
            </div>
            <div data-scroll data-scroll-speed="2" >
                <div id="planes">
                    <div id="first-line"></div>
                    <p id="planes-word">PLANES</p>
                    <div id="second-line"></div>
                </div>
            </div>
            <img src={dessert} id="second-image" data-scroll data-scroll-speed="1" alt="second" />
        </div>
    )
}