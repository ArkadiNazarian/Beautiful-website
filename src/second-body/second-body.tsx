import './second-body.css';
import dessert from "../images/dessert.png";

export const SecondBody = () => {

    return (
        <div id="second-body" >
            <img src={dessert} id="first-image" data-scroll data-scroll-speed="9" alt="first"/>
            <div  data-scroll data-scroll-speed="2" >
                <p id="planes">planes</p>
            </div>
            <img src={dessert} id="second-image" data-scroll data-scroll-speed="1" alt="second"/>
        </div>
    )
}