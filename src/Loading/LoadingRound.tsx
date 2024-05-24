"use client";
import React from "react";
import { FidgetSpinner } from "react-loader-spinner";
const LoadingRound = () => {
  return (
    <div className="flex justify-center min-h-screen items-center ">
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
      />
    </div>
  );
};

export default LoadingRound;
