import React from "react";
import Container from "../components/Container";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import Flex from "../components/Flex";
import Imege from "../components/Imege";
import Breadcrums from "../components/Breadcrums";

const About = ({ title }) => {
  return (
    <section>
      <Container>
        <Breadcrums title={title} />

        <Flex
          className={`items-center justify-center flex-col lg:flex-row gap-10 mt-[130px]`}
        >
          <div className="w-full lg:w-1/2">
            <Imege className={`w-full lg:w-auto `} src={about1} />
          </div>

          <div className="w-full lg:w-1/2">
            <Imege className={`w-full lg:w-auto `} src={about2} />
          </div>
        </Flex>

        <p className=" font-dm font-normal text-xl lg:text-[39px] text-justify lg:text-left leading-[52px] text-primary w-auto lg:w-[1433px] mt-[128px]">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </p>

        <Flex
          className={`mt-[118px] mb-[131px] flex-col gap-5 lg:flex-row lg:gap-0`}
        >
          <div className=" w-full lg:w-4/12">
            <h3 className=" font-dm font-bold text-[22px] text-primary">
              Our Vision
            </h3>
            <p className=" font-dm font-normal text-[16px] text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div className=" w-full lg:w-4/12">
            <h3 className=" font-dm font-bold text-[22px] text-primary">
              Our Vision
            </h3>
            <p className=" font-dm font-normal text-[16px] text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div className=" w-full lg:w-4/12">
            <h3 className=" font-dm font-bold text-[22px] text-primary">
              Our Vision
            </h3>
            <p className=" font-dm font-normal text-[16px] text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
