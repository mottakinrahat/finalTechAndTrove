"use client";
import React from "react";
import loadingLottie from "@/assets/lottie/loadingLottie.json";
import Lottie from "lottie-react";
const LoadingRound = () => {
  return (
    <div className="flex justify-center items-center my-20 h-20 w-20">
      <Lottie height={10} width={10} animationData={loadingLottie}></Lottie>
    </div>
  );
};

export default LoadingRound;
