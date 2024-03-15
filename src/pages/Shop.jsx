import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Flex from "../components/Flex";
import List from "../components/List";
import Container from "../components/Container";
import Breadcrums from "../components/Breadcrums";
import ShopByCatagory from "../components/ShopByCatagory";
import ShopByColor from "../components/ShopByColor";
import ShopByBrand from "../components/ShopByBrand";
import ShopByPrice from "../components/ShopByPrice";
import ProductsComponent from "../components/ProductsComponent";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const Shop = ({ title }) => {
  const [products, setProducts] = useState([]);
  // console.log(products);
  const [categoty, setCetegory] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [showColor, setShowColor] = useState(true);
  const [showBrand, setShowBrand] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      axios.get("https://dummyjson.com/products").then((data) => {
        setProducts(data.data.products);
        setCategoryFilter(data.data.products);
      });
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setCetegory([...new Set(products.map((item) => item.category))]);
  }, [products]);

  const showByCategory = (cat) => {
    const filterCategory = products.filter((item) => item.category == cat);
    setCategoryFilter(filterCategory);
  };

  const showAllProducts = () => {
    setCategoryFilter(products);
  };

  return (
    <section>
      <Container>
        <Breadcrums title={title} />

        <Flex
          className={`justify-between flex-col lg:flex-row gap-10 mt-10 lg:mt-[130px]`}
        >
          <div className="w-full lg:w-3/12">
            <div>
              <h2 className=" font-dm font-bold text-[20px] text-primary mb-9">
                Shop by Category
              </h2>

              <List>
                <ShopByCatagory
                  onClick={showAllProducts}
                  categoryShow={false}
                  cat={"All"}
                />
                {categoty.map((categoryName, i) => (
                  <ShopByCatagory
                    key={i}
                    onClick={showByCategory}
                    categoryShow={false}
                    cat={categoryName}
                  />
                ))}
              </List>
            </div>

            <div className="mt-[53px]">
              <h2 className=" flex items-center justify-between font-dm font-bold text-[20px] text-primary mb-9">
                Shop by Color
                {showColor ? (
                  <GoTriangleUp
                    onClick={() => setShowColor(!showColor)}
                    className=" cursor-pointer"
                  />
                ) : (
                  <GoTriangleDown
                    onClick={() => setShowColor(!showColor)}
                    className=" cursor-pointer"
                  />
                )}
              </h2>

              {showColor && (
                <List>
                  <ShopByColor color={` bg-red-500`} colorName={`Color 1`} />
                  <ShopByColor color={` bg-green-500`} colorName={`Color 2`} />
                  <ShopByColor color={` bg-blue-500`} colorName={`Color 3`} />
                  <ShopByColor color={` bg-yellow-500`} colorName={`Color 4`} />
                </List>
              )}
            </div>

            <div className="mt-[53px]">
              <h2 className=" flex items-center justify-between font-dm font-bold text-[20px] text-primary mb-9">
                Shop by Brand
                {showBrand ? (
                  <GoTriangleUp
                    onClick={() => setShowBrand(!showBrand)}
                    className=" cursor-pointer"
                  />
                ) : (
                  <GoTriangleDown
                    onClick={() => setShowBrand(!showBrand)}
                    className=" cursor-pointer"
                  />
                )}
              </h2>

              {showBrand && (
                <List>
                  <ShopByBrand brand={`Brand 1`} />
                  <ShopByBrand brand={`Brand 2`} />
                  <ShopByBrand brand={`Brand 3`} />
                  <ShopByBrand brand={`Brand 4`} />
                  <ShopByBrand brand={`Brand 5`} />
                </List>
              )}
            </div>

            <div className="mt-[53px]">
              <h2 className=" flex items-center justify-between font-dm font-bold text-[20px] text-primary mb-9">
                Shop by Price
              </h2>

              <List>
                <ShopByPrice price={`$0.00 - $9.99`} />
                <ShopByPrice price={`$10.00 - $19.99`} />
                <ShopByPrice price={`$20.00 - $29.99`} />
                <ShopByPrice price={`$30.00 - $39.99`} />
                <ShopByPrice price={`$40.00 - $69.99`} />
              </List>
            </div>
          </div>
          <div className="w-full lg:w-9/12">
            <ProductsComponent products={categoryFilter} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
