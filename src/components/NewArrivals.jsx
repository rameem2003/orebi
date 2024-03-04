import React from "react";
import Slider from "react-slick";
import Container from "./Container";
import ItemCard from "./ItemCard";
import { productsList } from "../API";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: "0",
        zIndex: "99999",
        height: "64px",
        width: "64px",
        background: "#979797",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        color: "white",
      }}
      onClick={onClick}
    >
      <IoIosArrowRoundForward size={25} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "0",
        zIndex: "99999",
        height: "64px",
        width: "64px",
        background: "#979797",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        color: "white",
      }}
      onClick={onClick}
    >
      <IoIosArrowRoundBack size={25} />
    </div>
  );
}

const NewArrivals = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <section className="mt-[128px]">
      <Container>
        <h1 className=" font-dm font-bold text-[40px] text-primary mb-12">
          New Arrivals
        </h1>

        <div className="slider-container">
          <Slider {...settings}>
            {productsList.map((p, i) => (
              <ItemCard className={` mx-auto`} item={p} key={i} />
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default NewArrivals;
