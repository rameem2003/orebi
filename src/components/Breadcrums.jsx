import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const Breadcrums = ({ title }) => {
  return (
    <div className="my-16 lg:mt-[124px] lg:mb-[140px]">
      <h2 className=" font-dm font-bold text-[50px] text-primary mb-3">
        {title}
      </h2>

      <ul className=" flex items-center gap-1 font-dm font-normal text-[12px] text-secondary">
        <li>
          {" "}
          <Link to={`/`}>Home</Link>
        </li>
        <FaAngleRight />
        <li>{title}</li>
      </ul>
    </div>
  );
};

export default Breadcrums;
