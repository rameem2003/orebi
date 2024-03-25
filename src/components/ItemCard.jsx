import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartReducer } from "../slices/CartSlice";
import Imege from "./Imege";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaCartShopping } from "react-icons/fa6";

const ItemCard = ({ item, className }) => {
  const dispatch = useDispatch(); // dispatch for cart redux
  const navigate = useNavigate(); // navigate for show the product to product page which is clicked

  const handleProduct = (id) => {
    // show product in product page
    navigate(`/product/${id}`);
  };

  const handleCart = (item) => {
    // add to cart
    dispatch(cartReducer(item));
  };

  return (
    <div
      className={`w-auto md:w-[350px] lg:w-[370px] group ${className} cursor-pointer`}
    >
      <div
        onClick={() => handleProduct(item.id)}
        className=" relative overflow-hidden w-full"
      >
        <Imege
          src={item.thumbnail}
          alt={item.itemName}
          className={`w-full h-[370px] object-cover`}
        />
        <Flex className=" absolute left-0 bottom-[-150px] group-hover:bottom-0 duration-150 ease-in-out w-full h-[156px] p-[30px] bg-white flex-col items-end justify-center gap-5">
          <a
            href=""
            className=" font-dm font-normal text-[16px] text-secondary flex items-center gap-[15px] hover:font-bold hover:text-primary"
          >
            Add to Wish List <FaHeart className="text-primary" />
          </a>
          <a
            href=""
            className=" font-dm font-normal text-[16px] text-secondary flex items-center gap-[15px] hover:font-bold hover:text-primary"
          >
            Compare <TfiReload className="text-primary font-bold font-dm" />
          </a>
          <button className=" font-dm font-normal text-[16px] text-secondary flex items-center gap-[15px] hover:font-bold hover:text-primary">
            Add to Cart <FaCartShopping className="text-primary" />
          </button>
        </Flex>

        <span className=" absolute top-5 left-5 inline-block py-[9px] px-8 bg-primary font-dm font-bold text-[14px] text-white">
          {item ? item.stock : "100"} in stock
        </span>
      </div>

      <div className={`pt-6`}>
        <Flex className={`items-center justify-between`}>
          <h2 className=" font-dm font-bold text-[20px] text-primary">
            {item ? item.title : "Product"}
          </h2>
          <p className=" font-dm font-normal text-[16px] text-secondary">
            $ {item ? item.price : "100"}
          </p>
        </Flex>

        <p className=" font-dm font-normal text-[16px] text-secondary mt-[15px]">
          Black
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
