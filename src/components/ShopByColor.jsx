import React from "react";
import ListItem from "./ListItem";
import Flex from "./Flex";
import { Link } from "react-router-dom";

const ShopByColor = ({ color, colorName }) => {
  return (
    <ListItem className={`mb-5`}>
      <Flex className={`items-center gap-[10px] border-b border-solid pb-5`}>
        <div className={`w-[11px] h-[11px] ${color} rounded-full`}></div>

        <Link className=" font-dm font-normal text-[16px] text-secondary">
          {colorName}
        </Link>
      </Flex>
    </ListItem>
  );
};

export default ShopByColor;
