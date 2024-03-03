import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={` ${className} mx-auto max-w-container lg:px-2 px-3`}>
      {children}
    </div>
  );
};

export default Container;
