import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productReducer } from "../slices/ProductSlice";
import { removeProduct } from "../slices/CartSlice";
import axios from "axios";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Imege from "./Imege";
import { FaBarsProgress } from "react-icons/fa6";
import { FaUser, FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = () => {
  const cartProducts = useSelector((state) => state.cartArray.cart); // data of cart products
  const dispatch = useDispatch(); // dispatch for cart redux
  const navigate = useNavigate(); // for navigation
  const dropDownRef = useRef();
  const accountRef = useRef();
  const cartRef = useRef();
  const searchResultRef = useRef();
  const [total, setTotal] = useState(0); // for calculate & store the price
  const [dropDown, setDropDown] = useState(false);
  const [account, setAccount] = useState(false);
  const [cartDrop, setCartDrop] = useState(false);
  const [searchRef, setSearchRef] = useState(false);
  const [search, setSearch] = useState([]); // initial state all products for searching
  const [filterResult, setFilterResult] = useState([]); // state for storing the products after searching

  const calculateTotal = () => {
    // calculate the grand total
    let p = 0;
    cartProducts.map(
      (cItem) =>
        (p =
          p +
          Math.round(
            (cItem.price - (cItem.price * cItem.discountPercentage) / 100) *
              cItem.qun
          ))
    );
    setTotal(p);
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      // all referances
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

      searchResultRef.current.contains(e.target)
        ? setSearchRef(true)
        : setSearchRef(false);
    });
  }, []);

  useEffect(() => {
    calculateTotal();
  });

  useEffect(() => {
    /**
     * for storing the initial all products in search state and
     * store in redux store for global
     */
    const fetchProducts = () => {
      axios.get("https://dummyjson.com/products").then((data) => {
        setSearch(data.data.products);
        dispatch(productReducer(data.data.products));
      });
    };

    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    // for search evet when by typing anything in serrch box
    if (e.target.value == "") {
      setFilterResult([]);
    } else {
      const searchResult = search.filter((searchItem) =>
        searchItem.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilterResult(searchResult); // stae for store the search result
    }
  };

  const goToFilter = () => {
    // after filter show the filtered result in productfilter route
    navigate("/productfilter", { state: { key: filterResult } });
  };

  const removeItemFromCart = (item) => {
    // for remove the item from redux
    dispatch(removeProduct(item.id));
    toast.warn(`${item.title} is removed from the cart`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      // transition: Bounce,
    });
  };

  const goToCheckOut = () => {
    // for navigate to checkout page and send data
    // console.log("qwef");
    navigate("/checkout", { state: { price: total, cartProducts } });
  };

  return (
    <header className="py-6 bg-[#F5f5f5]">
      <ToastContainer />
      <Container>
        <Flex className={`items-center justify-between gap-3 lg:gap-0`}>
          {/* catagory start */}
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
          {/* catagory end */}

          {/* search start */}
          <div ref={searchResultRef} className=" relative w-[600px]">
            <input
              onChange={handleSearch}
              className=" w-full py-4 pl-5 placeholder:font-dm text-[14px] placeholder:text-[#c4c4c4]"
              type="text"
              name=""
              id=""
              placeholder="Search Products"
            />
            <FaSearch
              onClick={goToFilter}
              className=" absolute text-[15px] font-bold top-[50%] translate-y-[-50%] right-4 cursor-pointer"
            />

            {/* search result start */}
            {searchRef && (
              <div className=" w-full h-[300px] overflow-y-scroll bg-white absolute top-14 left-0 z-[1]">
                {filterResult.length > 0 ? (
                  filterResult.map((filterItem, i) => (
                    <Flex
                      key={i}
                      className={`p-2 mb-2 bg-white items-center justify-between hover:bg-gray-200`}
                    >
                      <Flex className={`items-center gap-4`}>
                        <Imege
                          src={filterItem.thumbnail}
                          alt={""}
                          className={`w-[80px] h-[80px] object-cover`}
                        />
                        <div>
                          <h2 className=" font-dm font-semibold text-xl">
                            {filterItem.title}
                          </h2>

                          <h3 className=" font-dm font-normal text-sm mt-1">
                            $ {filterItem.price}
                          </h3>
                        </div>
                      </Flex>

                      <button className=" px-4 py-2 bg-primary text-white font-dm font-normal text-sm mr-2">
                        View
                      </button>
                    </Flex>
                  ))
                ) : (
                  <h1 className=" font-dm font-semibold text-xl text-center mt-2">
                    No Products Found
                  </h1>
                )}
              </div>
            )}
            {/* search result end */}
          </div>
          {/* search end */}

          {/* account and cart start */}
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
                  {/* all cart items start */}
                  <div className=" w-full max-h-[300px] overflow-y-scroll">
                    {cartProducts.length > 0 ? (
                      cartProducts.map((cItem, i) => (
                        <Flex
                          key={i}
                          className={`h-[120px] items-center justify-between p-5 bg-[#f5f5f3]`}
                        >
                          <div className="w-4/12">
                            <Imege
                              className={`h-[80px] w-[80px]`}
                              src={cItem.thumbnail}
                            />
                          </div>
                          <div className="w-8/12 relative">
                            <h3 className=" font-dm font-bold text-[14px] text-primary">
                              {cItem.title}
                            </h3>

                            <p className=" font-dm font-bold text-[14px] text-primary mt-3">
                              ${cItem.price}
                            </p>

                            <FaTimes
                              onClick={() => removeItemFromCart(cItem)}
                              className=" absolute right-3 top-[50%] translate-y-[-50%]"
                            />
                          </div>
                        </Flex>
                      ))
                    ) : (
                      <h1 className=" font-dm font-semibold text-xl text-center">
                        Cart is Empty
                      </h1>
                    )}
                  </div>

                  {/* all cart items end */}

                  {/* cart & check navigation start */}
                  <div className="p-5">
                    <p className=" font-dm font-normal text-[16px] text-secondary">
                      Subtotal:
                      <span className=" font-dm font-bold text-[16px] text-primary">
                        ${total}
                      </span>
                    </p>

                    <Flex className={` items-center justify-between mt-[13px]`}>
                      <Link
                        to={`/cart`}
                        className=" font-dm font-bold text-[14px] text-primary px-10 py-4 border-[1px] border-primary"
                      >
                        View Cart
                      </Link>
                      <button
                        onClick={goToCheckOut}
                        className=" font-dm font-bold text-[14px] text-white bg-primary px-10 py-4 border-[1px] border-primary"
                      >
                        Checkout
                      </button>
                    </Flex>
                  </div>
                  {/* cart & check navigation end */}
                </div>
              )}
            </div>
          </Flex>
          {/* account and cart end */}
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
