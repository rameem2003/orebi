import React from "react";
import ListItem from "./ListItem";
import Flex from "./Flex";
import { Link } from "react-router-dom";

const ShopByBrand = ({ brand, onClick }) => {
  return (
    <ListItem className={`mb-5`}>
      <Flex className={`items-center border-b border-solid pb-5`}>
        <Link
          onClick={() => onClick(brand)}
          className=" font-dm font-normal text-[16px] text-secondary"
        >
          {brand}
        </Link>
      </Flex>
    </ListItem>
  );
};

export default ShopByBrand;
