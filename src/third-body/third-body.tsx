import './third-body.css';
import gallery from "../images/gallery.png";

const ThirdBody = () => {
    return (
        <div id="third-body" >
            <img src={gallery} id="image" alt="first" />
            <div id="word">
                <p>La ruta de</p>
                <p>galerías de</p>
                <p>fotografía</p>
            </div>
        </div>
    )
}

export default ThirdBody