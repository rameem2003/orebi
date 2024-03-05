import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Breadcrums from "../components/Breadcrums";

const Signup = ({ title }) => {
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

        <form action="" className="mt-[57px] pb-16 lg:pb-[70px] ">
          {/* personal details*/}
          <h3 className="font-dm font-bold text-4xl lg:text-[42px] text-primary mb-[42px]">
            Your Personal Details
          </h3>

          <Flex className={`gap-10 flex-wrap flex-col lg:flex-row`}>
            <div className="mb-[23px]">
              <label
                className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                htmlFor=""
              >
                First Name
              </label>

              <input
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="First Name"
              />
            </div>
            <div className="mb-[23px]">
              <label
                className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                htmlFor=""
              >
                Last Name
              </label>

              <input
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="Last Name"
              />
            </div>
            <div className="mb-[23px]">
              <label
                className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                htmlFor=""
              >
                Email address
              </label>

              <input
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                type="email"
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
                Telephone
              </label>

              <input
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="Your phone number"
              />
            </div>
          </Flex>
          {/* personal details end*/}

          <div className=" bg-[#f0f0f0] w-full h-[1px] mt-[69px] mb-[58px]"></div>

          {/* new customer */}

          <h3 className="font-dm font-bold text-4xl lg:text-[42px] text-primary mb-[42px]">
            New Customer
          </h3>

          <Flex className={`gap-10 flex-wrap flex-col lg:flex-row`}>
            <div className="mb-[23px]">
              <label
                className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                htmlFor=""
              >
                Address 1
              </label>

              <input
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="4279 Zboncak Port Suite 6212"
              />
            </div>
            <div className="mb-[23px]">
              <label
                className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                htmlFor=""
              >
                Address 2
              </label>

              <input
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="-"
              />
            </div>
            <div className="mb-[23px]">
              <label
                className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                htmlFor=""
              >
                City
              </label>

              <input
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                type="email"
                name=""
                id=""
                placeholder="Your City"
              />
            </div>
            <div className="mb-[23px]">
              <label
                className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                htmlFor=""
              >
                Post Code
              </label>

              <input
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="145644"
              />
            </div>
            <div className="mb-[23px]">
              <label
                className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                htmlFor=""
              >
                Country
              </label>

              <select
                name=""
                id=""
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
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
                Region / State
              </label>

              <select
                name=""
                id=""
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
              >
                <option value="">Bangladesh</option>
                <option value="">India</option>
                <option value="">Canada</option>
              </select>
            </div>
          </Flex>
          {/* new customer end */}

          <div className=" bg-[#f0f0f0] w-full h-[1px] mt-[69px] mb-[58px]"></div>

          {/* password */}
          <h3 className="font-dm font-bold text-4xl lg:text-[42px] text-primary mb-[42px]">
            Your Password
          </h3>

          <Flex className={`gap-10 flex-wrap flex-col lg:flex-row`}>
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
                placeholder="Password"
              />
            </div>
            <div className="mb-[23px]">
              <label
                className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                htmlFor=""
              >
                Repeat Password
              </label>

              <input
                className="w-full md:w-[508px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                type="password"
                name=""
                id=""
                placeholder="Repeat Password"
              />
            </div>
          </Flex>
          {/* password end */}

          <div className=" bg-[#f0f0f0] w-full h-[1px] mt-[69px] mb-[58px]"></div>

          <Flex className={`items-center gap-4`}>
            <input
              type="radio"
              name=""
              id=""
              className="border-[1px] border-secondary appearance-none h-[11px] w-[11px] checked:bg-dot checked:bg-[length:7px_7px] checked:bg-no-repeat checked:bg-center"
            />
            <label className=" font-dm font-normal text-[14px] text-secondary">
              I have read and agree to the Privacy Policy
            </label>
          </Flex>
          <Flex className={`items-center gap-[30px] mt-[23px]`}>
            <p className=" font-dm font-normal text-[14px] text-secondary">
              Subscribe Newsletter
            </p>

            <Flex className={`items-center gap-4`}>
              <input
                type="radio"
                name="sub"
                id=""
                className="border-[1px] border-secondary appearance-none h-[11px] w-[11px] checked:bg-dot checked:bg-[length:7px_7px] checked:bg-no-repeat checked:bg-center focus:outline-transparent"
              />
              <label className=" font-dm font-normal text-[14px] text-secondary">
                Yes
              </label>
            </Flex>
            <Flex className={`items-center gap-4`}>
              <input
                type="radio"
                name="sub"
                id=""
                className="border-[1px] border-secondary appearance-none h-[11px] w-[11px] checked:bg-dot checked:bg-[length:7px_7px] checked:bg-no-repeat checked:bg-center focus:outline-transparent"
              />
              <label className=" font-dm font-normal text-[14px] text-secondary">
                No
              </label>
            </Flex>
          </Flex>

          <button
            className=" font-dm font-bold text-[14px] text-white bg-primary py-4 px-[83px] border-[1px] border-primary mt-[27px]"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Signup;
