import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Flex from "../components/Flex";
import Breadcrums from "../components/Breadcrums";

const Checkout = ({ title }) => {
  return (
    <section>
      <Container>
        <Breadcrums title={title} />

        <div className="mt-[127px]">
          <p className=" font-dm font-normal text-[16px] leading-[30px] text-secondary">
            Have a coupon?{" "}
            <Link className=" text-primary">Click here to enter your code</Link>
          </p>
        </div>

        <form action="" className="mt-[119px] w-full lg:w-[1055px]">
          <h3 className="font-dm font-bold text-[40px] text-primary mb-[42px]">
            Billing Details
          </h3>

          <Flex className={`gap-0 flex-col lg:gap-10 lg:flex-row`}>
            <div className="mb-[23px]">
              <label
                className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                htmlFor=""
              >
                First Name *
              </label>

              <input
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="First Name"
              />
            </div>{" "}
            <div className="mb-[23px]">
              <label
                className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                htmlFor=""
              >
                Last Name *
              </label>

              <input
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="Last Name"
              />
            </div>
          </Flex>

          <div className="mb-[23px]">
            <label
              className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
              htmlFor=""
            >
              Companye Name (optional)
            </label>

            <input
              className="w-full block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
              type="text"
              name=""
              id=""
              placeholder="Companye Name"
            />
          </div>

          <div className="mb-[23px]">
            <label
              className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
              htmlFor=""
            >
              Country *
            </label>

            <select
              name=""
              id=""
              className="w-full block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
            >
              <option value="">Bangladesh</option>
              <option value="">India</option>
              <option value="">Canada</option>
            </select>
          </div>

          <div className="mb-[23px]">
            <label
              className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
              htmlFor=""
            >
              Street Address *
            </label>

            <input
              className="w-full block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
              type="text"
              name=""
              id=""
              placeholder="House number and street name"
            />
            <input
              className="w-full block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
              type="text"
              name=""
              id=""
              placeholder="House number and street name"
            />
          </div>

          <div className="mb-[23px]">
            <label
              className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
              htmlFor=""
            >
              Town/City *
            </label>

            <input
              className="w-full block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
              type="text"
              name=""
              id=""
              placeholder="Town/City *"
            />
          </div>

          <div className="mb-[23px]">
            <label
              className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
              htmlFor=""
            >
              County (optional)
            </label>

            <input
              className="w-full block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
              type="text"
              name=""
              id=""
              placeholder="County"
            />
          </div>

          <div className="mb-[23px]">
            <label
              className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
              htmlFor=""
            >
              Post Code *
            </label>

            <input
              className="w-full block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
              type="text"
              name=""
              id=""
              placeholder="Post Code"
            />
          </div>

          <div className="mb-[23px]">
            <label
              className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
              htmlFor=""
            >
              Phone *
            </label>

            <input
              className="w-full block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
              type="text"
              name=""
              id=""
              placeholder="Phone"
            />
          </div>

          <div className="mb-[23px]">
            <label
              className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
              htmlFor=""
            >
              Email Address *
            </label>

            <input
              className="w-full block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
              type="text"
              name=""
              id=""
              placeholder="Email"
            />
          </div>

          <div className="mt-[129px]">
            <h4 className=" font-dm font-bold text-[40px] text-primary mb-[42px]">
              Additional Information
            </h4>

            <div className="mb-[23px]">
              <label
                className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                htmlFor=""
              >
                Other Notes (optional)
              </label>

              <input
                className="w-full block border-b border-[#f0f0f0] pt-[10px] pb-[86px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="Notes about your order, e.g. special notes for delivery."
              />
            </div>
          </div>

          <div className="mt-[129px]">
            <h4 className=" font-dm font-bold text-[40px] text-primary mb-[42px]">
              Your Order
            </h4>

            <div className="w-full lg:w-[644px]">
              <Flex>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                  Product
                </p>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                  Total
                </p>
              </Flex>
              <Flex>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                  Product name x 1
                </p>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                  389.99 $
                </p>
              </Flex>
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

            <div className="border-[1px] border-[#f0f0f0] py-6 px-[34px] mt-[60px]">
              <div>
                <Flex className={`items-center gap-3`}>
                  <input
                    type="radio"
                    name="sub"
                    id=""
                    className="border-[1px] border-secondary appearance-none h-[11px] w-[11px] rounded-full checked:bg-roundDot checked:bg-[length:7px_7px] checked:bg-no-repeat checked:bg-center focus:outline-transparent"
                  />
                  <label className=" font-dm font-bold text-[16px] leading-[23px] text-primary">
                    Bank
                  </label>
                </Flex>

                <div className="mt-[14px] relative">
                  <div className="w-[16px] h-[16px] bg-[#F7F8F9] rotate-[45deg] absolute top-[-7px] left-8"></div>
                  <p className=" font-dm font-normal text-[14px] text-secondary bg-[#F7F8F9] p-6">
                    Pay via Bank; you can pay with your credit card if you don’t
                    have a Bank account.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Flex className={`items-center gap-3`}>
                  <input
                    type="radio"
                    name="sub"
                    id=""
                    className="border-[1px] border-secondary appearance-none h-[11px] w-[11px] rounded-full checked:bg-roundDot checked:bg-[length:7px_7px] checked:bg-no-repeat checked:bg-center focus:outline-transparent"
                  />
                  <label className=" font-dm font-bold text-[16px] leading-[23px] text-secondary">
                    Bank 2
                  </label>
                </Flex>

                <div className="mt-[14px]">
                  <p className=" font-dm font-normal text-[16px] text-secondary">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our{" "}
                    <Link className=" text-primary">privacy policy</Link>.
                  </p>
                </div>
              </div>

              <button className=" font-dm font-bold text-[14px] bg-primary text-white py-4 px-[42px] mt-6">
                Proceed to Bank
              </button>
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Checkout;
