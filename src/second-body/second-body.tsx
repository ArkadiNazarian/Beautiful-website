import './second-body.css';
import dessert from "../images/dessert.png";
import React from 'react';

const SecondBody = () => {
    return (
        <div id="second-body" >
            <div id="first-image-content" data-scroll data-scroll-speed="1">
                <div id="first-image-bg">
                    <img src={dessert} id="first-image" alt="first" />
                </div>
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
            <div id="second-image-content" data-scroll data-scroll-speed="1">
                <div id="second-image-bg" >
                    <img src={dessert} id="second-image" alt="second" />
                </div>
                <p id='hover-underline-animation-5'>TENDENCIAS</p>
                <p id='hover-underline-animation-6'>IQOS lanza en</p>
                <p id='hover-underline-animation-7'>España su primera</p>
                <p id='hover-underline-animation-8'>colaboración con</p>
                <p id='hover-underline-animation-9'>la marca</p>
                <p id='hover-underline-animation-10'>japonesa kolor</p>
            </div>
        </div>
    )
}

export default SecondBody