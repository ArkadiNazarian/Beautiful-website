import './second-body.css';
import dessert from "../images/dessert.png";

export const SecondBody = () => {
    return (
        <div id="second-body" >
            <div>
                <div id="first-image-content" data-scroll data-scroll-speed="1" data-scroll-class="fadeIn" data-scroll-repeat="true">
                    <div id="first-image-bg">
                        <img src={dessert} id="first-image" alt="first" />
                    </div>
                    <p id='hover-underline-animation-1'>QUÉ HACER</p>
                    <p id='hover-underline-animation-2'>Agenda Semanal.</p>
                    <p id='hover-underline-animation-3'>Del 22 al 28 de</p>
                    <p id='hover-underline-animation-4'>mayo</p>

                </div>

                <div id="first-image-content" data-scroll data-scroll-speed="1" data-scroll-class="fadeIn" data-scroll-repeat="true">
                    <div id="first-image-bg">
                        <img src={dessert} id="first-image" alt="first" />
                    </div>
                    <p id='hover-underline-animation-1'>TENDENCIAS</p>
                    <p id='hover-underline-animation-11'>El arte más</p>
                    <p id='hover-underline-animation-12'>desafiante del</p>
                    <p id='hover-underline-animation-13'>siglo XX se ajusta</p>
                    <p id='hover-underline-animation-14'>a tus manos con</p>
                    <p id='hover-underline-animation-15'>Swatch x Basquiat</p>
                </div>
            </div>
            <div data-scroll data-scroll-speed="2" >
                <div id="planes">
                    <div id="first-line"></div>
                    <p id="planes-word">PLANES</p>
                    <div id="second-line"></div>
                </div>
            </div>
            <div>
                <div>
                    <div id="second-image-content" data-scroll data-scroll-speed="1" data-scroll-class="fadeIn" data-scroll-repeat="true">
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

                    <div id="second-image-content" data-scroll data-scroll-speed="1" data-scroll-class="fadeIn" data-scroll-repeat="true">
                        <div id="second-image-bg" >
                            <img src={dessert} id="second-image" alt="second" />
                        </div>
                        <p id='hover-underline-animation-16'>GASTRONOMÍA</p>
                        <p id='hover-underline-animation-17'>Última</p>
                        <p id='hover-underline-animation-18'>oportunidad para</p>
                        <p id='hover-underline-animation-19'>disfrutar de los</p>
                        <p id='hover-underline-animation-20'>jueves deRonqueo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}