import React, { useRef, useEffect, useState } from "react";
import styles from "./Hero.module.scss";

export const Hero = () => {
  const canvasRef = useRef(null);
  const [speed, setSpeed] = useState(120);
  const [color, setColor] = useState("#fff");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const symbols = ["•", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
    const columns = Math.floor(canvas.width / 10);
    let drops = new Array(columns).fill(0).map(() => ({
      y: Math.random() * canvas.height,
      size: Math.random() * (25 - 10) + 10 // random size between 10 and 30
    }));

    function draw() {
      ctx.fillStyle = "rgba(37, 6, 68, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < columns; i++) {
        const drop = drops[i];
        const fontSize = drop.size;
        ctx.fillStyle = color;
        ctx.font = `${fontSize}px arial`;

        const text = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(text, i * 10, drop.y);

        if (drop.y > canvas.height && Math.random() > 0.975) {
          drop.y = 0;
          drop.size = Math.random() * (30 - 10) + 10; // random size between 10 and 30
        }

        drop.y += fontSize;
      }
    }

    const intervalId = setInterval(draw, speed);

    return () => clearInterval(intervalId);
  }, [speed, color]);

  return (
    <div className={styles.hero}>
      <canvas ref={canvasRef} width={window.innerWidth * 1.3} height={window.innerHeight} />
    </div>
  );
};
