import React from "react";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import planetLottie from "./planetlottie.json";



const LottieHero = () => {
  const style = {
    height: 300,
  };
  
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: "seek",
        frames: [0, 45],
      },
      {
        visibility: [0.45, 10.0],
        type: "loop",
        frames: [100, 200],
      },
    ],
  };

  return (
    <Lottie
      animationData={planetLottie}
      style={style}
      interactivity={interactivity}
    />
  );
};

export default LottieHero;

