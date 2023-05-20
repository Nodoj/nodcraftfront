import React, { useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const particleCount = 150;
const particleSpeed = 0.5;

class Particle {
  constructor(x, y, radius, speedX, speedY, ctx) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = 'black';
    this.ctx.fill();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > window.innerWidth) {
      this.speedX = -this.speedX;
    }

    if (this.y < 0 || this.y > window.innerHeight) {
      this.speedY = -this.speedY;
    }

    this.draw();
  }
}

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = randomInt(1, 3);
      const x = randomInt(radius, canvas.width - radius);
      const y = randomInt(radius, canvas.height - radius);
      const speedX = (Math.random() - 0.2) * particleSpeed;
      const speedY = (Math.random() - 0.2) * particleSpeed;
      particles.push(new Particle(x, y, radius, speedX, speedY, ctx));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return <Canvas id='bgcanvas' ref={canvasRef} css={css`width: 100%; height: 100%;`} />;
};

export default CanvasBackground;