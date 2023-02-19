import React from "react";
import { useLottie } from "lottie-react";
import phonological from "./phonological.json";



const LottieLogo = () => {
  const options = {
    animationData: phonological,
    loop: true,
    speed: 3,
  };


  const { View } = useLottie(options);

  return <>{View}</>;
};

export default LottieLogo;