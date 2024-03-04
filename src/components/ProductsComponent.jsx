import React, { useEffect, useState } from "react";
import axios from "axios";
import Flex from "./Flex";
import PaginationForGrid from "./PaginationForGrid";
import PaginationForList from "./PaginationForList";
import { MdWindow } from "react-icons/md";
import { IoIosList } from "react-icons/io";

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const [itemShow, setItemShow] = useState(6);
  const [view, setView] = useState("grid");

  useEffect(() => {
    const fetchProducts = () => {
      axios
        .get("https://dummyjson.com/products")
        .then((data) => setProducts(data.data.products));
    };

    fetchProducts();
  }, []);

  const handleView = (v) => {
    setView(v);
  };

  return (
    <div>
      <Flex className={`items-center justify-between`}>
        <Flex className={`gap-5`}>
          <div
            className={` cursor-pointer  w-9 h-9 border-[1px] border-solid  ${
              view === "grid"
                ? "bg-primary text-white border-primary"
                : "bg-white text-primary border-[#f0f0f0]"
            } flex items-center justify-center`}
          >
            <MdWindow onClick={() => handleView("grid")} />
          </div>

          <div
            className={` cursor-pointer  w-9 h-9 border-[1px] border-solid  ${
              view === "list"
                ? "bg-primary text-white border-primary"
                : "bg-white text-primary border-[#f0f0f0]"
            } flex items-center justify-center`}
          >
            <IoIosList onClick={() => handleView("list")} />
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
              onChange={(e) => setItemShow(parseInt(e.target.value))}
              id="countries"
              class="w-[139px] border border-gray-300 font-dm font-normal text-[16px] leading-[30px] text-secondary px-5 py-2"
            >
              <option value={6} selected>
                6
              </option>
              <option value={12}>12</option>
              <option value={18}>24</option>
            </select>
          </div>
        </Flex>
      </Flex>

      <div className="mt-[60px]">
        {view === "grid" ? (
          <PaginationForGrid itemsPerPage={itemShow} products={products} />
        ) : (
          <PaginationForList itemsPerPage={itemShow} products={products} />
        )}
      </div>
    </div>
  );
};

export default ProductsComponent;
