import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Imege from "./Imege";
import placeholder from "../assets/placeholder.png";
import { FaBarsProgress } from "react-icons/fa6";
import { FaUser, FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
const Header = () => {
  const dropDownRef = useRef();
  const accountRef = useRef();
  const cartRef = useRef();
  const [dropDown, setDropDown] = useState(false);
  const [account, setAccount] = useState(false);
  const [cartDrop, setCartDrop] = useState(false);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      // if (dropDownRef.current.contains(e.target)) {
      //   setDropDown(true);
      // } else {
      //   setDropDown(false);
      // }
      dropDownRef.current.contains(e.target)
        ? setDropDown(true)
        : setDropDown(false);

      accountRef.current.contains(e.target)
        ? setAccount(true)
        : setAccount(false);

      cartRef.current.contains(e.target)
        ? setCartDrop(true)
        : setCartDrop(false);
    });
  }, []);

  return (
    <header className="py-6 bg-[#F5f5f5]">
      <Container>
        <Flex className={`items-center justify-between gap-3 lg:gap-0`}>
          <div ref={dropDownRef} className=" relative">
            <Flex className={`items-center gap-[10px] cursor-pointer`}>
              <FaBarsProgress />
              <span className=" hidden lg:block">Shop by Category</span>
            </Flex>

            {dropDown && (
              <List className="bg-[#262626] w-[263px] mt-4 absolute z-50">
                <ListItem
                  href={`#`}
                  className=" py-4 px-5 block font-dm font-normal text-[14px] text-white opacity-50 ease-in-out duration-300 border-b border-[#2D2D2D] hover:font-bold hover:opacity-100 hover:pl-[31px]"
                >
                  Accesories
                </ListItem>
                <ListItem
                  href={`#`}
                  className=" py-4 px-5 block font-dm font-normal text-[14px] text-white opacity-50 ease-in-out duration-300 border-b border-[#2D2D2D] hover:font-bold hover:opacity-100 hover:pl-[31px]"
                >
                  Furniture
                </ListItem>
                <ListItem
                  href={`#`}
                  className=" py-4 px-5 block font-dm font-normal text-[14px] text-white opacity-50 ease-in-out duration-300 border-b border-[#2D2D2D] hover:font-bold hover:opacity-100 hover:pl-[31px]"
                >
                  Electronics
                </ListItem>
                <ListItem
                  href={`#`}
                  className=" py-4 px-5 block font-dm font-normal text-[14px] text-white opacity-50 ease-in-out duration-300 border-b border-[#2D2D2D] hover:font-bold hover:opacity-100 hover:pl-[31px]"
                >
                  Clothes
                </ListItem>
                <ListItem
                  href={`#`}
                  className=" py-4 px-5 block font-dm font-normal text-[14px] text-white opacity-50 ease-in-out duration-300 border-b border-[#2D2D2D] hover:font-bold hover:opacity-100 hover:pl-[31px]"
                >
                  Bags
                </ListItem>
                <ListItem
                  href={`#`}
                  className=" py-4 px-5 block font-dm font-normal text-[14px] text-white opacity-50 ease-in-out duration-300 border-b border-[#2D2D2D] hover:font-bold hover:opacity-100 hover:pl-[31px]"
                >
                  Home appliances
                </ListItem>
              </List>
            )}
          </div>

          <div className=" relative w-[600px]">
            <input
              className=" w-full py-4 pl-5 placeholder:font-dm text-[14px] placeholder:text-[#c4c4c4]"
              type="text"
              name=""
              id=""
              placeholder="Search Products"
            />
            <FaSearch className=" absolute text-[15px] font-bold top-[50%] translate-y-[-50%] right-4 " />
          </div>

          <Flex className={`items-center gap-10`}>
            <div ref={accountRef} className=" relative">
              <Flex className={`items-center gap-1 cursor-pointer`}>
                <FaUser className="text-primary" />
                <IoMdArrowDropdown className="text-primary" />
              </Flex>

              {account && (
                <List className={`mt-[15px] absolute right-0 z-50`}>
                  <ListItem
                    className={` w-[200px] py-4 px-[58px] block font-dm text-center font-bold text-white text-[14px] bg-primary`}
                  >
                    <Link to="/login">My Account</Link>
                  </ListItem>
                  <ListItem
                    className={` w-[200px] py-4 px-[58px] block font-dm text-center font-normal text-primary text-[14px] bg-white`}
                  >
                    Log Out
                  </ListItem>
                </List>
              )}
            </div>

            <div ref={cartRef} className=" relative">
              <FaShoppingCart className="text-[17px] text-primary cursor-pointer" />

              {cartDrop && (
                <div className=" w-[360px] bg-white mt-[15px] absolute right-0 top-0 z-50">
                  <Flex
                    className={`h-[120px] items-center justify-between p-5 bg-[#f5f5f3]`}
                  >
                    <div className="w-4/12">
                      <Imege
                        className={`h-[80px] w-[80px]`}
                        src={placeholder}
                      />
                    </div>
                    <div className="w-8/12 relative">
                      <h3 className=" font-dm font-bold text-[14px] text-primary">
                        Black Smart Watch
                      </h3>

                      <p className=" font-dm font-bold text-[14px] text-primary mt-3">
                        $44.00
                      </p>

                      <FaTimes className=" absolute right-3 top-[50%] translate-y-[-50%]" />
                    </div>
                  </Flex>

                  <div className="p-5">
                    <p className=" font-dm font-normal text-[16px] text-secondary">
                      Subtotal:{" "}
                      <span className=" font-dm font-bold text-[16px] text-primary">
                        $44.00
                      </span>
                    </p>

                    <Flex className={` items-center justify-between mt-[13px]`}>
                      <Link
                        to={`/cart`}
                        className=" font-dm font-bold text-[14px] text-primary px-10 py-4 border-[1px] border-primary"
                      >
                        View Cart
                      </Link>
                      <Link
                        to={`/checkout`}
                        className=" font-dm font-bold text-[14px] text-white bg-primary px-10 py-4 border-[1px] border-primary"
                      >
                        Checkout
                      </Link>
                    </Flex>
                  </div>
                </div>
              )}
            </div>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
