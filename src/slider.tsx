import { useState } from 'react';
import './slider.css';
import useInterval from 'use-interval';
import laptop from "./images/laptop.png";
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
            <div id={`${in_out ? "slider-green-background" : "second-slider-green-background"}`} ></div>
            <div id={`${in_out ? "slider-blue-background" : "second-slider-blue-background"}`} ></div>
            <img src={laptop} id={`${in_out ? "slider-first-image" : "second-slider-first-image"}`} alt='first' />
            <img src={tv} id={`${in_out ? "slider-second-image" : "second-slider-second-image"}`} alt='second' />
            <div id={`${in_out ? "slider-green-background-on-image" : "second-slider-green-background-on-image"}`}></div>
            <div id={`${in_out ? "slider-blue-background-on-image" : "second-slider-blue-background-on-image"}`}></div>
            <div id="first-slider-first-word">
                <p id={`${in_out ? "first-slider-word-1-letter" : "first-slider-word-1-letter-out"}`}>Q</p>
                <p id={`${in_out ? "first-slider-word-2-letter" : "first-slider-word-2-letter-out"}`}>U</p>
                <p id={`${in_out ? "first-slider-word-3-letter" : "first-slider-word-3-letter-out"}`}>E</p>
                <p id={`${in_out ? "first-slider-word-4-letter" : "first-slider-word-4-letter-out"}`}>H</p>
                <p id={`${in_out ? "first-slider-word-5-letter" : "first-slider-word-5-letter-out"}`}>A</p>
                <p id={`${in_out ? "first-slider-word-6-letter" : "first-slider-word-6-letter-out"}`}>C</p>
                <p id={`${in_out ? "first-slider-word-7-letter" : "first-slider-word-7-letter-out"}`}>E</p>
                <p id={`${in_out ? "first-slider-word-8-letter" : "first-slider-word-8-letter-out"}`}>R</p>
            </div>
            <div id="first-slider-second-word">
                <p id={`${in_out ? "first-slider-second-word-1-letter" : "first-slider-second-word-1-letter-out"}`}>C</p>
                <p id={`${in_out ? "first-slider-second-word-2-letter" : "first-slider-second-word-2-letter-out"}`}>h</p>
                <p id={`${in_out ? "first-slider-second-word-3-letter" : "first-slider-second-word-3-letter-out"}`}>u</p>
                <p id={`${in_out ? "first-slider-second-word-4-letter" : "first-slider-second-word-4-letter-out"}`}>l</p>
                <p id={`${in_out ? "first-slider-second-word-5-letter" : "first-slider-second-word-5-letter-out"}`}>a</p>
                <p id={`${in_out ? "first-slider-second-word-6-letter" : "first-slider-second-word-6-letter-out"}`}>p</p>
                <p id={`${in_out ? "first-slider-second-word-7-letter" : "first-slider-second-word-7-letter-out"}`}>o</p>
                <p id={`${in_out ? "first-slider-second-word-8-letter" : "first-slider-second-word-8-letter-out"}`}>s,</p>
            </div>
            <div id="first-slider-third-word">
                <p id={`${in_out ? "first-slider-third-word-1-letter" : "first-slider-third-word-1-letter-out"}`}>c</p>
                <p id={`${in_out ? "first-slider-third-word-2-letter" : "first-slider-third-word-2-letter-out"}`}>l</p>
                <p id={`${in_out ? "first-slider-third-word-3-letter" : "first-slider-third-word-3-letter-out"}`}>a</p>
                <p id={`${in_out ? "first-slider-third-word-4-letter" : "first-slider-third-word-4-letter-out"}`}>v</p>
                <p id={`${in_out ? "first-slider-third-word-5-letter" : "first-slider-third-word-5-letter-out"}`}>e</p>
                <p id={`${in_out ? "first-slider-third-word-6-letter" : "first-slider-third-word-6-letter-out"}`}>l</p>
                <p id={`${in_out ? "first-slider-third-word-7-letter" : "first-slider-third-word-7-letter-out"}`}>e</p>
                <p id={`${in_out ? "first-slider-third-word-8-letter" : "first-slider-third-word-8-letter-out"}`}>s</p>
                <p id={`${in_out ? "first-slider-third-word-9-letter" : "first-slider-third-word-9-letter-out"}`}>y</p>
                <p id={`${in_out ? "first-slider-third-word-10-letter" : "first-slider-third-word-10-letter-out"}`}>r</p>
                <p id={`${in_out ? "first-slider-third-word-11-letter" : "first-slider-third-word-11-letter-out"}`}>o</p>
                <p id={`${in_out ? "first-slider-third-word-12-letter" : "first-slider-third-word-12-letter-out"}`}>s</p>
                <p id={`${in_out ? "first-slider-third-word-13-letter" : "first-slider-third-word-13-letter-out"}`}>q</p>
                <p id={`${in_out ? "first-slider-third-word-14-letter" : "first-slider-third-word-14-letter-out"}`}>u</p>
                <p id={`${in_out ? "first-slider-third-word-15-letter" : "first-slider-third-word-15-letter-out"}`}>i</p>
                <p id={`${in_out ? "first-slider-third-word-16-letter" : "first-slider-third-word-16-letter-out"}`}>l</p>
                <p id={`${in_out ? "first-slider-third-word-17-letter" : "first-slider-third-word-17-letter-out"}`}>l</p>
                <p id={`${in_out ? "first-slider-third-word-18-letter" : "first-slider-third-word-18-letter-out"}`}>a</p>
                <p id={`${in_out ? "first-slider-third-word-19-letter" : "first-slider-third-word-19-letter-out"}`}>s:</p>
            </div>
            <div id="first-slider-forth-word">
            <p id={`${in_out ? "first-slider-forth-word-1-letter" : "first-slider-forth-word-1-letter-out"}`}>S</p>
                <p id={`${in_out ? "first-slider-forth-word-2-letter" : "first-slider-forth-word-2-letter-out"}`}>a</p>
                <p id={`${in_out ? "first-slider-forth-word-3-letter" : "first-slider-forth-word-3-letter-out"}`}>n</p>
                <p id={`${in_out ? "first-slider-forth-word-4-letter" : "first-slider-forth-word-4-letter-out"}`}>l</p>
                <p id={`${in_out ? "first-slider-forth-word-5-letter" : "first-slider-forth-word-5-letter-out"}`}>s</p>
                <p id={`${in_out ? "first-slider-forth-word-6-letter" : "first-slider-forth-word-6-letter-out"}`}>i</p>
                <p id={`${in_out ? "first-slider-forth-word-7-letter" : "first-slider-forth-word-7-letter-out"}`}>d</p>
                <p id={`${in_out ? "first-slider-forth-word-8-letter" : "first-slider-forth-word-8-letter-out"}`}>r</p>
                <p id={`${in_out ? "first-slider-forth-word-9-letter" : "first-slider-forth-word-9-letter-out"}`}>o</p>
                <p id={`${in_out ? "first-slider-forth-word-10-letter" : "first-slider-forth-word-10-letter-out"}`}>2</p>
                <p id={`${in_out ? "first-slider-forth-word-11-letter" : "first-slider-forth-word-11-letter-out"}`}>0</p>
                <p id={`${in_out ? "first-slider-forth-word-12-letter" : "first-slider-forth-word-12-letter-out"}`}>2</p>
                <p id={`${in_out ? "first-slider-forth-word-13-letter" : "first-slider-forth-word-13-letter-out"}`}>3</p>
            </div>
            <div id={`${in_out ? "first-slide-in-word-underline" : "first-slide-out-word-underline"}`}></div>
        </div>
    )
}