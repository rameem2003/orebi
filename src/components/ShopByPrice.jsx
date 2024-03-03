import React from "react";
import ListItem from "./ListItem";
import Flex from "./Flex";
import { Link } from "react-router-dom";

const ShopByPrice = ({ price }) => {
  return (
    <ListItem className={`mb-5`}>
      <Flex className={`items-center border-b border-solid pb-5`}>
        <Link className=" font-dm font-normal text-[16px] text-secondary">
          {price}
        </Link>
      </Flex>
    </ListItem>
  );
};

export default ShopByPrice;
