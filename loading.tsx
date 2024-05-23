"use client";
import { FidgetSpinner } from "react-loader-spinner";
import React from "react";

const loading = () => {
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

export default loading;
