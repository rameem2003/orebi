import React, { useState } from "react";
import Slider from "react-slick";
import Imege from "./Imege";
import banner from "../assets/banner.png";
import Flex from "./Flex";
import Container from "./Container";
import { FaTruck } from "react-icons/fa";
import { RxReload } from "react-icons/rx";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  const [slide, setSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setSlide(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "144px",
          transform: "translateY(-50%)",
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === slide
            ? {
                width: "30px",
                padding: "30px 0",
                color: "#262626",
                borderRight: "2px solid #262626",
                cursor: "pointer",
                transition: "0.4s",
              }
            : {
                width: "30px",
                padding: "30px 0",
                color: "white",
                borderRight: "2px solid white",
                cursor: "pointer",
                transition: "0.4s",
              }
        }
      >
        0{i + 1}
      </div>
    ),

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                padding: "10px",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i == slide
                  ? {
                      padding: "5px 0",
                      width: "30px",
                      color: "#262626",
                      borderRight: "2px #262626 solid",
                    }
                  : {
                      padding: "5px 0",
                      width: "30px",
                      color: "white",
                      borderRight: "2px white solid",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                padding: "10px",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i == slide
                  ? {
                      padding: "5px 0",
                      width: "30px",
                      color: "#262626",
                      borderRight: "2px #262626 solid",
                    }
                  : {
                      padding: "5px 0",
                      width: "30px",
                      color: "white",
                      borderRight: "2px white solid",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                padding: "10px",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i == slide
                  ? {
                      padding: "5px 0",
                      width: "30px",
                      color: "#262626",
                      borderRight: "2px #262626 solid",
                    }
                  : {
                      padding: "5px 0",
                      width: "30px",
                      color: "white",
                      borderRight: "2px white solid",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                padding: "10px",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i == slide
                  ? {
                      padding: "20px 0",
                      width: "30px",
                      color: "#262626",
                      borderRight: "2px #262626 solid",
                    }
                  : {
                      padding: "20px 0",
                      width: "30px",
                      color: "white",
                      borderRight: "2px white solid",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <section>
      <Slider {...settings}>
        <Imege src={banner} />
        <Imege src={banner} />
        <Imege src={banner} />
        <Imege src={banner} />
        <Imege src={banner} />
      </Slider>

      <div className=" bg-white py-[30px] border-[1px] border-[#F0F0F0]">
        <Container>
          <Flex className={`justify-between`}>
            <Flex className={`items-center gap-[17px]`}>
              <span className=" font-dm font-bold text-[30px]">2</span>
              <p className=" font-dm font-normal text-[16px] text-textColor">
                Two years warranty
              </p>
            </Flex>

            <Flex className={`items-center gap-[15px]`}>
              <FaTruck size={25} />
              <p className=" font-dm font-normal text-[16px] text-textColor">
                Free shipping
              </p>
            </Flex>
            <Flex className={`items-center gap-[15px]`}>
              <RxReload size={25} className=" scale-x-[-1] font-bold" />
              <p className=" font-dm font-normal text-[16px] text-textColor">
                Return policy in 30 days
              </p>
            </Flex>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
