import React, { useState } from "react";
import Flex from "./Flex";
import ItemListView from "./ItemListView";
import ItemGridView from "./ItemGridView";
import { MdWindow } from "react-icons/md";
import { IoIosList } from "react-icons/io";

const ProductsComponent = () => {
  const [view, setView] = useState("grid");

  const handleView = (v) => {
    setView(v);
  };

  return (
    <div>
      <Flex className={`items-center justify-between`}>
        <Flex className={`gap-5`}>
          <div className=" cursor-pointer  w-9 h-9 bg-primary flex items-center justify-center">
            <MdWindow
              onClick={() => handleView("grid")}
              className=" text-white"
            />
          </div>

          <div className=" cursor-pointer w-9 h-9 border-[1px] border-solid border-[#f0f0f0] flex items-center justify-center">
            <IoIosList
              onClick={() => handleView("list")}
              className="text-[#737373]"
            />
          </div>
        </Flex>

        <Flex className={`items-center gap-10`}>
          <div className=" flex items-center gap-[14px]">
            <label
              className=" font-dm font-normal text-[16px] leading-[30px] text-secondary"
              htmlFor=""
            >
              Sort by:
            </label>

            <select
              id="countries"
              class="w-[239px] border border-gray-300 font-dm font-normal text-[16px] leading-[30px] text-secondary px-5 py-2"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className=" flex items-center gap-[14px]">
            <label
              className=" font-dm font-normal text-[16px] leading-[30px] text-secondary"
              htmlFor=""
            >
              Show:
            </label>

            <select
              id="countries"
              class="w-[139px] border border-gray-300 font-dm font-normal text-[16px] leading-[30px] text-secondary px-5 py-2"
            >
              <option selected>36</option>
              <option selected>12</option>
              <option selected>24</option>
              <option selected>48</option>
            </select>
          </div>
        </Flex>
      </Flex>

      <div className=" text-center text-red-600 font-dm font-semibold">
        Check src/API.js for products data
      </div>

      <div className="mt-[60px]">
        {view === "grid" ? <ItemGridView /> : <ItemListView />}
      </div>
    </div>
  );
};

export default ProductsComponent;
