import React from "react";
import Flex from "./Flex";
import Imege from "./Imege";
import { Rate } from "antd";
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaCartShopping } from "react-icons/fa6";

const ItemLIst = ({ item }) => {
  return (
    <Flex className=" p-4 mb-4 bg-[#f0f0f0] flex-col gap-4 md:flex-row md:gap-0 md:items-center items-start justify-between">
      <Flex className={`items-center gap-5`}>
        <div>
          <Imege src={item.thumbnail} className={`w-32 h-32 object-cover`} />
        </div>

        <div>
          <h1 className=" font-dm font-bold text-[20px] text-primary">
            {item ? item.title : "Product"}
          </h1>

          <h2 className="font-dm font-semibold text-[14px] text-primary my-3">
            {item ? item.description : "fvwierwer"}
          </h2>

          <Rate allowHalf disabled defaultValue={item ? item.rating : 5} />
        </div>
      </Flex>

      <div>
        <h3 className="font-dm font-bold text-3xl">
          ${item ? item.price : "45"}
        </h3>

        <Flex className={`gap-3 mt-3`}>
          <button className="p-4 bg-primary text-white">
            <FaHeart />
          </button>
          <button className="p-4 bg-primary text-white">
            <TfiReload />
          </button>
          <button className="p-4 bg-primary text-white">
            <FaCartShopping />
          </button>
        </Flex>
      </div>
    </Flex>
  );
};

export default ItemLIst;
