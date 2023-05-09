import { useState } from 'react';
import './slider.css';
import useInterval from 'use-interval';

export const Slider = () => {

    const [in_out, set_in_out] = useState<boolean>(true)

    useInterval(
        () => {
          set_in_out(!in_out)
        },
        6000,
      )

    console.log(in_out)
    return (
        <div id="second-menu">
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
        </div>
    )
}