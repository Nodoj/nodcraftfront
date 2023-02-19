import React, { useState, useEffect } from "react";
import styles from "./HeroTitle.module.scss"

import LottieHomeTitle from "../../Lottie/LottieHomeTitle";


export const HeroTitle = () => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  const shadowX = x - 4;
  const shadowY = y - 4;
     
return(
       
<>

<div className={styles.root}>

  <div className="heroText">
  <h1 style={{
        textShadow: `${shadowX}px ${shadowY}px 3px rgba(0,0,0,0.3)`,
      }}>Nodcraft</h1>
<h2>
IT, Design, Web - Beyond Your Expectations</h2>
<p>Our team of experts is dedicated to delivering custom solutions that are tailored to your business needs. From stunning visuals to top-notch software, we'll bring your vision to life and help you stand out from the competition. Let us exceed your expectations and take your business to new heights. Contact us today to learn more.</p>

  </div>
  <LottieHomeTitle />
  </div>

</>
    )
};