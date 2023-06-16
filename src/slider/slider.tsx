import { useState } from 'react';
import './slider.css';
import useInterval from 'use-interval';
import laptop from "../images/laptop.png";
import tv from "../images/tv.png";

export const Slider = () => {

    const [in_out, set_in_out] = useState<boolean>(true);
    const [out_in, set_out_in] = useState<boolean>(false);
    const [hover, set_hover] = useState<boolean>(false);

    useInterval(
        () => {
            set_in_out(!in_out)
            set_out_in(!out_in)
        },
        !hover && 5000,
    )

    return (
        <div id="second-menu">
            <div id={`${in_out ? "slider-green-background" : "second-slider-green-background"}`} ></div>
            <div id={`${in_out ? "slider-blue-background" : "second-slider-blue-background"}`} ></div>
            <img src={laptop} id={`${in_out ? "slider-first-image" : "second-slider-first-image"}`} alt='first' onMouseOver={() => set_hover(true)} onMouseLeave={() => set_hover(false)} />
            <img src={tv} id={`${in_out ? "slider-second-image" : "second-slider-second-image"}`} alt='second' onMouseOver={() => set_hover(true)} onMouseLeave={() => set_hover(false)} />
            {/* <div id={`${in_out ? "slider-green-background-on-image" : "second-slider-green-background-on-image"}`}></div>
            <div id={`${in_out ? "slider-blue-background-on-image" : "second-slider-blue-background-on-image"}`}></div> */}
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
            <div id="first-slider-second-word" onMouseOver={() => set_hover(true)} onMouseLeave={() => set_hover(false)}>
                <p id={`${in_out ? "first-slider-second-word-1-letter" : "first-slider-second-word-1-letter-out"}`}>C</p>
                <p id={`${in_out ? "first-slider-second-word-2-letter" : "first-slider-second-word-2-letter-out"}`}>h</p>
                <p id={`${in_out ? "first-slider-second-word-3-letter" : "first-slider-second-word-3-letter-out"}`}>u</p>
                <p id={`${in_out ? "first-slider-second-word-4-letter" : "first-slider-second-word-4-letter-out"}`}>l</p>
                <p id={`${in_out ? "first-slider-second-word-5-letter" : "first-slider-second-word-5-letter-out"}`}>a</p>
                <p id={`${in_out ? "first-slider-second-word-6-letter" : "first-slider-second-word-6-letter-out"}`}>p</p>
                <p id={`${in_out ? "first-slider-second-word-7-letter" : "first-slider-second-word-7-letter-out"}`}>o</p>
                <p id={`${in_out ? "first-slider-second-word-8-letter" : "first-slider-second-word-8-letter-out"}`}>s,</p>
            </div>
            <div id="first-slider-third-word" onMouseOver={() => set_hover(true)} onMouseLeave={() => set_hover(false)}>
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
            <div id="first-slider-forth-word" onMouseOver={() => set_hover(true)} onMouseLeave={() => set_hover(false)}>
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
            <div id="second-slider-first-word">
                <p id={`${out_in ? "second-slider-word-1-letter" : "second-slider-word-1-letter-out"}`}>1</p>
                <p id={`${out_in ? "second-slider-word-2-letter" : "second-slider-word-2-letter-out"}`}>9</p>
                <p id={`${out_in ? "second-slider-word-3-letter" : "second-slider-word-3-letter-out"}`}>9</p>
            </div>
            <div id="second-slider-second-word" onMouseOver={() => set_hover(true)} onMouseLeave={() => set_hover(false)}>
                <p id={`${out_in ? "second-slider-second-word-1-letter" : "second-slider-second-word-1-letter-out"}`}>D</p>
                <p id={`${out_in ? "second-slider-second-word-2-letter" : "second-slider-second-word-2-letter-out"}`}>e</p>
                <p id={`${out_in ? "second-slider-second-word-3-letter" : "second-slider-second-word-3-letter-out"}`}>s</p>
                <p id={`${out_in ? "second-slider-second-word-4-letter" : "second-slider-second-word-4-letter-out"}`}>m</p>
                <p id={`${out_in ? "second-slider-second-word-5-letter" : "second-slider-second-word-5-letter-out"}`}>o</p>
                <p id={`${out_in ? "second-slider-second-word-6-letter" : "second-slider-second-word-6-letter-out"}`}>n</p>
                <p id={`${out_in ? "second-slider-second-word-7-letter" : "second-slider-second-word-7-letter-out"}`}>t</p>
                <p id={`${out_in ? "second-slider-second-word-8-letter" : "second-slider-second-word-8-letter-out"}`}>a</p>
                <p id={`${out_in ? "second-slider-second-word-9-letter" : "second-slider-second-word-9-letter-out"}`}>n</p>
                <p id={`${out_in ? "second-slider-second-word-10-letter" : "second-slider-second-word-10-letter-out"}`}>d</p>
                <p id={`${out_in ? "second-slider-second-word-11-letter" : "second-slider-second-word-11-letter-out"}`}>o</p>
            </div>
            <div id="second-slider-third-word" onMouseOver={() => set_hover(true)} onMouseLeave={() => set_hover(false)}>
                <p id={`${out_in ? "second-slider-third-word-1-letter" : "second-slider-third-word-1-letter-out"}`}>m</p>
                <p id={`${out_in ? "second-slider-third-word-2-letter" : "second-slider-third-word-2-letter-out"}`}>i</p>
                <p id={`${out_in ? "second-slider-third-word-3-letter" : "second-slider-third-word-3-letter-out"}`}>t</p>
                <p id={`${out_in ? "second-slider-third-word-4-letter" : "second-slider-third-word-4-letter-out"}`}>o</p>
                <p id={`${out_in ? "second-slider-third-word-5-letter" : "second-slider-third-word-5-letter-out"}`}>s</p>
                <p id={`${out_in ? "second-slider-third-word-6-letter" : "second-slider-third-word-6-letter-out"}`}>c</p>
                <p id={`${out_in ? "second-slider-third-word-7-letter" : "second-slider-third-word-7-letter-out"}`}>a</p>
                <p id={`${out_in ? "second-slider-third-word-8-letter" : "second-slider-third-word-8-letter-out"}`}>f</p>
                <p id={`${out_in ? "second-slider-third-word-9-letter" : "second-slider-third-word-9-letter-out"}`}>e</p>
                <p id={`${out_in ? "second-slider-third-word-10-letter" : "second-slider-third-word-10-letter-out"}`}>t</p>
                <p id={`${out_in ? "second-slider-third-word-11-letter" : "second-slider-third-word-11-letter-out"}`}>e</p>
                <p id={`${out_in ? "second-slider-third-word-12-letter" : "second-slider-third-word-12-letter-out"}`}>r</p>
                <p id={`${out_in ? "second-slider-third-word-13-letter" : "second-slider-third-word-13-letter-out"}`}>o</p>
                <p id={`${out_in ? "second-slider-third-word-14-letter" : "second-slider-third-word-14-letter-out"}`}>s</p>
            </div>
            <div id={`${out_in ? "second-slide-in-word-underline" : "second-slide-out-word-underline"}`}></div>
            {/* <div id="static-letter">
                <p id="static-letter-1">L</p>
                <p id="static-letter-2">E</p>
                <p id="static-letter-3">E</p>
                <p id="static-letter-4">R</p>
            </div> */}
        </div>

    )
}