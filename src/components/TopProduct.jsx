import React from "react";
import Imege from "./Imege";
import add4 from "../assets/advertise4.png";
import Container from "./Container";

const TopProduct = () => {
  return (
    <section className="mt-[130px]">
      <Container>
        <Imege src={add4} />
      </Container>
    </section>
  );
};

export default TopProduct;
