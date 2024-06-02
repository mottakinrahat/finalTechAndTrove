"use client";
import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

const CategoryLoading = () => {
  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div>
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="fidget-spinner-loading"
          wrapperStyle={{}}
          wrapperClass="fidget-spinner-wrapper"
        />
      </div>
    </div>
  );
};

export default CategoryLoading;
