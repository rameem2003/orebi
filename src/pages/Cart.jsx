import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { FaTimes } from "react-icons/fa";
import Imege from "../components/Imege";
import Breadcrums from "../components/Breadcrums";

const Cart = ({ title }) => {
  return (
    <section>
      <Container>
        <Breadcrums title={title} />

        <div className="mt-[136px]">
          {/* cart header start */}
          <Flex className=" items-center bg-[#f5f5f5] py-[34px] px-5 flex-wrap">
            <div className="w-1/4">
              <h2 className=" font-dm font-bold text-[16px] text-primary">
                Product
              </h2>
            </div>
            <div className="w-1/4">
              <h2 className=" font-dm font-bold text-[16px] text-primary">
                Price
              </h2>
            </div>
            <div className="w-1/4">
              <h2 className=" font-dm font-bold text-[16px] text-primary">
                Quantity
              </h2>
            </div>
            <div className="w-1/4">
              <h2 className=" font-dm font-bold text-[16px] text-primary">
                Total
              </h2>
            </div>
          </Flex>
          {/* cart header end */}

          {/* products section start */}
          <Flex className="border-[1px] border-[#F0F0F0] py-[30px] px-5 flex-wrap">
            <div className="w-1/4">
              <Flex className={`items-center gap-10`}>
                <FaTimes />
                <Flex className={`items-center gap-5`}>
                  <Imege className={`w-[100px] h-[100px]`} src={`/item1.png`} />
                  <h3 className=" font-dm font-bold text-[16px] text-primary">
                    Product name
                  </h3>
                </Flex>
              </Flex>
            </div>

            <Flex className="w-1/4 items-center">
              <h3 className=" font-dm font-bold text-[20px] text-primary">
                $44.00
              </h3>
            </Flex>

            <Flex className={`w-1/4 items-center`}>
              <Flex className={`border-[1px] border-[#F0F0F0]`}>
                <button className=" font-dm font-normal text-[16px] leading-[30px] text-secondary py-[3px] px-[21px]">
                  {" "}
                  -{" "}
                </button>
                <button className=" font-dm font-normal text-[16px] leading-[30px] text-secondary py-[3px] px-[21px]">
                  1
                </button>
                <button className=" font-dm font-normal text-[16px] leading-[30px] text-secondary py-[3px] px-[21px]">
                  +
                </button>
              </Flex>
            </Flex>

            <Flex className="w-1/4 items-center">
              <h3 className=" font-dm font-bold text-[20px] text-primary">
                $44.00
              </h3>
            </Flex>
          </Flex>
          {/* products section end */}

          {/* sise, coupon section start */}
          <Flex
            className={`border-[1px] border-[#F0F0F0] p-5 items-center justify-between`}
          >
            <Flex className="gap-6">
              <select
                className="w-[255px] py-[10px] px-[21px] border-[1px] border-[#F0F0F0] font-dm font-normal text-[16px] leading-[30px] text-secondary"
                name=""
                id=""
              >
                <option value="">Size</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">Xl</option>
                <option value="xxl">XXL</option>
              </select>

              <button className=" font-dm font-bold text-[14px] text-primary">
                Apply coupon
              </button>
            </Flex>

            <button className=" font-dm font-bold text-[14px] text-primary">
              Update cart
            </button>
          </Flex>
          {/* sise, coupon section end */}

          {/* totals start */}
          <div className="mt-[54px]">
            <h4 className=" font-dm font-bold text-[20px] text-primary text-right">
              Cart totals
            </h4>

            <div className="w-full text-center lg:w-[644px] lg:ml-auto mt-6">
              <Flex>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                  Subtotal
                </p>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                  389.99 $
                </p>
              </Flex>
              <Flex>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                  Total
                </p>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                  389.99 $
                </p>
              </Flex>
            </div>

            <button className=" font-dm font-bold text-[14px] text-white bg-primary py-4 px-8 ms-auto mt-[30px] block">
              Proceed to Checkout
            </button>
          </div>
          {/* totals end */}
        </div>
      </Container>
    </section>
  );
};

export default Cart;
