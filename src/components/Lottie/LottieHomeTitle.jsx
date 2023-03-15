import React from "react";
import { useLottie } from "lottie-react";
import herocodding from "./herotitle.json";



const LottieHomeTitle = () => {
  const options = {
    animationData: herocodding,
    loop: true,
    speed: 1,
    height: 100,
    width: 100,
  };


  const { View } = useLottie(options);

  return <>{View}</>;
};

export default LottieHomeTitle;