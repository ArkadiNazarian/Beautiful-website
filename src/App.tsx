import { useEffect, useState } from 'react';
import './App.css';
import { NavBar } from './nav-bar';
import { motion } from "framer-motion"
import { Slider } from './slider';

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

  const variant = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    }
  }

  return (
    <div className="App">
      <motion.div
        animate="default"
        variants={variant}
        className='cursor'
      />
      {/* <NavBar /> */}
      <Slider/>
    </div>
  );
}

export default App;
