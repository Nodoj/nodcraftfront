import React, { useRef, useEffect, useState } from "react";
import styles from "./Hero.module.scss";


export const Hero = () => {
    const canvasRef = useRef(null);
    const [speed, setSpeed] = useState(100);
    const [circleSize, setCircleSize] = useState(23);
    const [color, setColor] = useState("#7F00FF");

  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
  
      const symbols = ["•", " "]; 
      const fontSize = circleSize;
      const columns = canvas.width / fontSize;
      let drops = [];
  
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
  
      function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        ctx.fillStyle = color;
        ctx.font = `${fontSize}px arial`;
  
        for (let i = 0; i < drops.length; i++) {
          const text = symbols[Math.floor(Math.random() * symbols.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
  
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
  
          drops[i]++;
        }
      }
  
      setInterval(draw, speed);
    }, [speed, circleSize, color]);
  
    
    return (
        <>
      <div className={styles.hero}>
        <canvas ref={canvasRef} width={window.innerWidth*1.3} height={window.innerHeight} />
      </div>
         </>
    );
  };