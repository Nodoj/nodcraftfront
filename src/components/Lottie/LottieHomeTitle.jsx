import React from "react";
import { useLottie } from "lottie-react";
import herocodding from "./herocodding.json";



const LottieHomeTitle = () => {
  const options = {
    animationData: herocodding,
    loop: true,
    speed: 0.2,
    height: 500,
    width: 500,
  };


  const { View } = useLottie(options);

  return <>{View}</>;
};

export default LottieHomeTitle;