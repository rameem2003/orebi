import React from "react";
import Container from "../components/Container";
import Breadcrums from "../components/Breadcrums";
import Imege from "../components/Imege";
import Flex from "../components/Flex";
import { Rate } from "antd";
import { TiPlus } from "react-icons/ti";

const Product = ({ title }) => {
  return (
    <section>
      <Container>
        <Breadcrums title={title} />

        {/* display products start */}
        <Flex className={`items-center flex-wrap gap-5`}>
          <Imege className={`w-[780px] h-[780px]`} src={`/item1.png`} />
          <Imege className={`w-[780px] h-[780px]`} src={`/item1.png`} />
          <Imege className={`w-[780px] h-[780px]`} src={`/item1.png`} />
          <Imege className={`w-[780px] h-[780px]`} src={`/item1.png`} />
        </Flex>
        {/* display products end */}

        {/* info start */}
        <div className="mt-[49px] w-[780px]">
          <h1 className=" font-dm font-bold text-[39px] text-primary">
            Product 1
          </h1>

          <Flex className={`items-center gap-[25px] mt-[18px]`}>
            <Rate disabled defaultValue={5} />

            <p>1 Review</p>
          </Flex>

          <Flex
            className={` items-center gap-[22px] mt-[21px] pb-6 border-b-[1px] border-solid`}
          >
            <del className=" font-dm font-normal text-[16px] text-secondary">
              $88.00
            </del>
            <span className=" font-dm font-bold text-[20px] text-primary">
              $44.00
            </span>
          </Flex>

          <div className="pb-[30px] border-b-[1px] border-solid">
            <Flex className={`items-center gap-[53px] mt-[30px]`}>
              <h3 className=" font-dm font-bold text-[16px] leading-[23px] text-primary">
                COLOR:
              </h3>

              <Flex className={`items-center gap-[15px]`}>
                <div className="w-5 h-5 hover:w-7 hover:h-7 rounded-full bg-gray-500"></div>
                <div className="w-5 h-5 hover:w-7 hover:h-7 rounded-full bg-red-500"></div>
                <div className="w-5 h-5 hover:w-7 hover:h-7 rounded-full bg-blue-500"></div>
                <div className="w-5 h-5 hover:w-7 hover:h-7 rounded-full bg-green-500"></div>
                <div className="w-5 h-5 hover:w-7 hover:h-7 rounded-full bg-teal-500"></div>
              </Flex>
            </Flex>

            <Flex className={`items-center gap-[76px] mt-[30px]`}>
              <h3 className=" font-dm font-bold text-[16px] leading-[23px] text-primary">
                SIZE:
              </h3>

              <div className=" flex items-center">
                <select
                  id="countries"
                  class="w-[139px] border border-gray-300 font-dm font-normal text-[16px] leading-[30px] text-secondary px-5 py-2"
                >
                  <option value={"S"} selected>
                    S
                  </option>
                  <option value={"M"}>M</option>
                  <option value={"xl"}>XL</option>
                </select>
              </div>
            </Flex>

            <Flex className={`items-center gap-[29px] mt-[30px]`}>
              <h3 className=" font-dm font-bold text-[16px] leading-[23px] text-primary">
                QUANTITY:
              </h3>

              <Flex className="w-[139px] h-[30px] border-[1px] border-solid items-center justify-between">
                <button className="w-1/3 font-dm font-normal text-[16px] text-secondary">
                  -
                </button>
                <span className="w-1/3 flex justify-center font-dm font-normal text-[16px] text-secondary">
                  1
                </span>
                <button className="w-1/3 font-dm font-normal text-[16px] text-secondary">
                  +
                </button>
              </Flex>
            </Flex>
          </div>

          <Flex
            className={`py-5 border-b-[1px] border-solid gap-[27px] items-center`}
          >
            <h3 className=" font-dm font-bold text-[16px] leading-[23px] text-primary">
              STATUS:
            </h3>
            <span className=" font-dm font-normal text-[16px] leading-[23px] text-secondary">
              In stock
            </span>
          </Flex>

          <Flex
            className={`py-[30px] border-b-[1px] border-solid items-center gap-5`}
          >
            <button className="py-4 px-10 border-[1px] border-primary font-dm font-bold text-[14px] text-primary">
              Add to Wish List
            </button>
            <button className="py-4 px-[64px] border-[1px] border-primary font-dm font-bold text-[14px] text-white bg-primary">
              Add to Cart
            </button>
          </Flex>

          <div>
            <Flex
              className={`py-6 border-b-[1px] border-solid items-center justify-between`}
            >
              <h2 className=" font-dm font-bold text-[16px] leading-[23px] text-primary">
                FEATURES & DETAILS
              </h2>

              <TiPlus />
            </Flex>
          </div>

          <div>
            <Flex
              className={`py-6 border-b-[1px] border-solid items-center justify-between`}
            >
              <h2 className=" font-dm font-bold text-[16px] leading-[23px] text-primary">
                SHIPPING & RETURNS
              </h2>

              <TiPlus />
            </Flex>

            <p className="mt-[19px] font-dm font-normal text-[16px] leading-[30px] text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        {/* info end */}
      </Container>
    </section>
  );
};

export default Product;
