import './third-body.css';
import gallery from "../images/gallery.png";

export const ThirdBody = () => {
    return (
        <div id="third-body" >
            <img src={gallery} id="image" alt="first" />
            <div id="word">
                <p>La ruta de</p>
                <p>galerías de</p>
                <p>fotografía</p>
            </div>
            <div id="second-word">
                <p id="second-word-1">V</p>
                <p id="second-word-2">E</p>
                <p id="second-word-3">R</p>
                <p id="second-word-4">T</p>
                <p id="second-word-5">O</p>
                <p id="second-word-6">D</p>
                <p id="second-word-7">A</p>
                <p id="second-word-8">S</p>
            </div>
        </div>
    )
}