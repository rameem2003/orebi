import React, { useState } from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import Flex from "./Flex";
import { FiPlus, FiMinus } from "react-icons/fi";

const ShopByCatagory = ({ cat, categoryShow }) => {
  const [catDropDown, setCatDropDown] = useState(false);
  return (
    <ListItem className={`mb-5`}>
      <Flex
        className={`items-center justify-between border-b border-solid pb-5`}
      >
        <Link className=" font-dm font-normal text-[16px] text-secondary">
          {cat}
        </Link>
        {categoryShow && (
          <div>
            {catDropDown ? (
              <FiMinus
                onClick={() => setCatDropDown(!catDropDown)}
                className=" text-secondary cursor-pointer"
              />
            ) : (
              <FiPlus
                onClick={() => setCatDropDown(!catDropDown)}
                className=" text-secondary cursor-pointer"
              />
            )}
          </div>
        )}
      </Flex>

      {catDropDown && (
        <div>
          <Link className=" font-dm font-normal text-[16px] text-secondary pb-5 ml-5 mt-5 block border-b border-solid">
            {cat}
          </Link>
          <Link className=" font-dm font-normal text-[16px] text-secondary pb-5 ml-5 mt-5 block border-b border-solid">
            {cat}
          </Link>
          <Link className=" font-dm font-normal text-[16px] text-secondary pb-5 ml-5 mt-5 block border-b border-solid">
            {cat}
          </Link>
        </div>
      )}
    </ListItem>
  );
};

export default ShopByCatagory;
