import React from "react";
import Flex from "./Flex";
import Item from "./Item";
import { productsList } from "../API";

const ItemGridView = () => {
  return (
    <Flex className={`flex-wrap justify-between`}>
      {productsList.map((p) => (
        <Item className={`mb-[50px] mx-0`} item={p} />
      ))}
    </Flex>
  );
};

export default ItemGridView;
