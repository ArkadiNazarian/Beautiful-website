import "./nav-bar.css"
import { AiFillControl } from "react-icons/ai";

export const NavBar = () => {
    return (
            <div id="top_menu">
                <div className="top_left_icon">
                    <AiFillControl />
                    <div id="top_left_word">
                        <p>e</p>
                        <p>l</p>
                        <p>D</p>
                        <p>u</p>
                        <p>e</p>
                        <p>n</p>
                        <p>d</p>
                        <p>e</p>   
                    </div>
                </div>
                <p>Menu</p>
            </div>
       
    )
}