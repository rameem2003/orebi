import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Imege from "./Imege";
import List from "./List";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

const Navigation = () => {
  const [dropDown, setDropDown] = useState(false);

  const navRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      navRef.current.contains(e.target)
        ? setDropDown(true)
        : setDropDown(false);
    });
  }, []);
  return (
    <nav ref={navRef} className="py-[32px]">
      <Container>
        <Flex className=" items-center justify-between">
          <Link to="/">
            <Imege src="/images/logo.png" alt="logo" />
          </Link>
          <FaBarsStaggered
            onClick={() => setDropDown(!dropDown)}
            size={25}
            className=" block lg:hidden"
          />
          <List
            className={` ${
              dropDown ? "absolute z-50 bg-white" : "hidden"
            } top-16 left-0 w-full px-3 lg:flex lg:static lg:w-auto gap-10 `}
          >
            <ListItem className=" font-dm font-normal text-[14px] text-secondary py-3 block lg:p-0 lg:hover:text-primary hover:font-bold">
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem className=" font-dm font-normal text-[14px] text-secondary py-3 block lg:p-0 lg:hover:text-primary hover:font-bold">
              <Link to="/shop">Shop</Link>
            </ListItem>
            <ListItem className=" font-dm font-normal text-[14px] text-secondary py-3 block lg:p-0 lg:hover:text-primary hover:font-bold">
              <Link to="/about">About</Link>
            </ListItem>
            <ListItem className=" font-dm font-normal text-[14px] text-secondary py-3 block lg:p-0 lg:hover:text-primary hover:font-bold">
              <Link to="/contact">Contacts</Link>
            </ListItem>
            <ListItem className=" font-dm font-normal text-[14px] text-secondary py-3 block lg:p-0 lg:hover:text-primary hover:font-bold">
              <Link to={`*`}>Journal</Link>
            </ListItem>
          </List>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
