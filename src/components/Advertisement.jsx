import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import add1 from "../assets/advertise1.png";
import add2 from "../assets/advertise2.png";
import add3 from "../assets/advertise3.png";
import Imege from "./Imege";

const Advertisement = () => {
  return (
    <section className=" pt-[140px]">
      <Container>
        <Flex>
          <div className=" w-1/2">
            <Imege src={add1} />
          </div>
          <div className=" w-1/2">
            <Flex className={`flex-col gap-5`}>
              <Imege src={add2} />
              <Imege src={add3} />
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Advertisement;
