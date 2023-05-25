import './second-body.css';
import dessert from "../images/dessert.png";
import React from 'react';

const SecondBody = () => {
console.log("hhh")
    return (
        <div id="second-body" >
            <div id="first-image-content" data-scroll data-scroll-speed="1">
                <img src={dessert} id="first-image" alt="first" />
                <p id='hover-underline-animation-1'>QUÉ HACER</p>
                <p id='hover-underline-animation-2'>Agenda Semanal.</p> 
                <p id='hover-underline-animation-3'>Del 22 al 28 de</p>
                <p id='hover-underline-animation-4'>mayo</p>
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

export default SecondBody