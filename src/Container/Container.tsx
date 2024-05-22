import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="lg:px-[112px] px-20 ">{children}</div>;
};

export default Container;
