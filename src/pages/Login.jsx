import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Breadcrums from "../components/Breadcrums";

const Login = ({ title }) => {
  return (
    <section>
      <Container>
        <Breadcrums title={title} />

        <div className="mt-16 lg:mt-[127px] pb-[62px] border-b-[1px] border-[#F0F0F0]">
          <p className="lg:w-[644px] font-dm font-normal text-[16px] leading-[30px] text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        <form
          action=""
          className="mt-[57px] pb-16 lg:pb-[70px] border-b-[1px] border-[#F0F0F0]"
        >
          <h3 className="font-dm font-bold text-4xl lg:text-[42px] text-primary mb-[42px]">
            Returning Customer
          </h3>

          <Flex className={`gap-10 flex-col lg:flex-row`}>
            <div className="mb-[23px]">
              <label
                className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                htmlFor=""
              >
                Email address
              </label>

              <input
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="company@domain.com"
              />
            </div>
            <div className="mb-[23px]">
              <label
                className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                htmlFor=""
              >
                Password
              </label>

              <input
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                type="password"
                name=""
                id=""
                placeholder=""
              />
            </div>
          </Flex>

          <button
            className=" font-dm font-bold text-[14px] text-primary py-4 px-[83px] border-[1px] border-primary mt-[30px] mb-[70px]"
            type="submit"
          >
            Log in
          </button>
        </form>

        <div className="mt-[58px]">
          <h3 className="font-dm font-bold text-4xl lg:text-[42px] text-primary mb-[38px]">
            New Customer
          </h3>

          <p className=" lg:w-[644px] font-dm font-normal text-[16px] leading-[30px] text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>

          <button className=" font-dm font-bold text-[14px] text-white bg-primary py-4 px-[71px] border-[1px] border-primary mt-[51px] mb-[70px]">
            Continue
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Login;
