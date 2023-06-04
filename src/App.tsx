import { useEffect, useRef, useState } from 'react';
import './App.css';
import { motion } from "framer-motion"
import {Slider} from './slider/slider';
import {FirstBody} from './first-body/first-body';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import {SecondBody} from './second-body/second-body';
import {ThirdBody} from './third-body/third-body';
import {ForthBody} from './forth-body/forth-body';
import { Footer } from './footer/footer';

function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });


  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const ref = useRef(null);

  const options = {
    smooth: true,
    multiplier: 0.5
  }

  return (
    <div className="App">

      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <motion.div
          animate={{ x: mousePosition.x + 2, y: mousePosition.y + 2 }}
          className='cursor'
        />
        <main data-scroll-container ref={ref}>
          <Slider data-scroll-section />
          <FirstBody data-scroll-section />
          <SecondBody data-scroll-section />
          <ThirdBody data-scroll-section/>
          <ForthBody data-scroll-section/>
          <Footer/>
        </main>
      </LocomotiveScrollProvider>
    </div>
  );
}

export default App;
