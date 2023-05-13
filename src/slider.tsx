import { useState } from 'react';
import './slider.css';
import useInterval from 'use-interval';
import kitchen from "./images/kitchen.png";
import tv from "./images/tv.png";

export const Slider = () => {

    const [in_out, set_in_out] = useState<boolean>(true);
    const [slider, set_slider] = useState<boolean>(true);

    useInterval(
        () => {
            set_in_out(!in_out)
            set_slider(!slider)
        },
        5000,
    )


    return (
        <div id="second-menu">
            <div id={`${in_out?"slider-green-background":"second-slider-green-background"}`} ></div>
            <div id={`${in_out?"slider-blue-background":"second-slider-blue-background"}`} ></div>
            <img src={ kitchen} id={`${in_out?"slider-first-image":"second-slider-first-image"}`} alt='first'/>
            <img src={tv} id={`${in_out?"slider-second-image":"second-slider-second-image"}`} alt='second'/>
            <div id={`${in_out?"slider-green-background-on-image":"second-slider-green-background-on-image"}`}></div>
            <div id={`${in_out?"slider-blue-background-on-image":"second-slider-blue-background-on-image"}`}></div>
            <div id="first-slider-word">
                <p id={`${in_out ? "first-slider-word-1-letter" : "first-slider-word-1-letter-out"}`}>Q</p>
                <p id={`${in_out ? "first-slider-word-2-letter" : "first-slider-word-2-letter-out"}`}>U</p>
                <p id={`${in_out ? "first-slider-word-3-letter" : "first-slider-word-3-letter-out"}`}>E</p>
                <p id={`${in_out ? "first-slider-word-4-letter" : "first-slider-word-4-letter-out"}`}>H</p>
                <p id={`${in_out ? "first-slider-word-5-letter" : "first-slider-word-5-letter-out"}`}>A</p>
                <p id={`${in_out ? "first-slider-word-6-letter" : "first-slider-word-6-letter-out"}`}>C</p>
                <p id={`${in_out ? "first-slider-word-7-letter" : "first-slider-word-7-letter-out"}`}>E</p>
                <p id={`${in_out ? "first-slider-word-8-letter" : "first-slider-word-8-letter-out"}`}>R</p>
            </div>
            <div id={`${in_out?"first-slide-in-word-underline":"first-slide-out-word-underline"}`}></div>
        </div>
    )
}