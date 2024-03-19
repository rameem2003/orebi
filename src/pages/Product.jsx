import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartReducer } from "../slices/CartSlice";
import axios from "axios";
import Container from "../components/Container";
import Breadcrums from "../components/Breadcrums";
import Imege from "../components/Imege";
import Flex from "../components/Flex";
import { Rate } from "antd";
import { TiPlus, TiMinus } from "react-icons/ti";

const Product = ({ title }) => {
  const dispatch = useDispatch(); // dispatch for store the product in cart redux
  const { id } = useParams(); // get the product id from the route
  const [targetProduct, setTargetProduct] = useState(); // state for store the target product data
  const [shipping, setShipping] = useState(true); // state for shipping section
  const [section, setSection] = useState("review"); // state for toggle review & description section

  useEffect(() => {
    // for get the single product by the by from route params....

    const fetchSingleProduct = () => {
      axios.get(`https://dummyjson.com/products/${id}`).then((data) => {
        setTargetProduct(data.data);
      });
    };

    fetchSingleProduct();
  }, []);

  const addtoCart = () => {
    dispatch(cartReducer(targetProduct));
  };

  return (
    <section>
      <Container>
        <Breadcrums title={title} />

        {/* display products start */}
        <Flex className={`items-center justify-center flex-wrap gap-5`}>
          {targetProduct?.images.map((img, i) => (
            <Imege
              className={`w-[180px] h-[180px] md:w-auto md:h-auto lg:w-[600px] lg:h-[600px] object-cover`}
              src={img}
              alt={targetProduct.title}
              key={i}
            />
          ))}
        </Flex>
        {/* display products end */}

        {/* info start */}
        <div className="mt-[49px] w-full lg:w-[780px]">
          <h1 className=" font-dm font-bold text-[39px] text-primary">
            {targetProduct?.title}
          </h1>

          <Flex className={`items-center gap-[25px] mt-[18px]`}>
            <Rate allowHalf disabled defaultValue={5} />

            <p>1 Review</p>
          </Flex>

          <Flex
            className={` items-center gap-[22px] mt-[21px] pb-6 border-b-[1px] border-solid`}
          >
            <del className=" font-dm font-normal text-[16px] text-secondary">
              $88.00
            </del>
            <span className=" font-dm font-bold text-[20px] text-primary">
              $ {targetProduct?.price}
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
              ({targetProduct?.stock}) In stock
            </span>
          </Flex>

          <Flex
            className={`py-[30px] border-b-[1px] border-solid items-center gap-5`}
          >
            <button className="py-4 px-10 border-[1px] border-primary font-dm font-bold text-[14px] text-primary">
              Add to Wish List
            </button>
            <button
              onClick={addtoCart}
              className="py-4 px-[64px] border-[1px] border-primary font-dm font-bold text-[14px] text-white bg-primary"
            >
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

              {shipping ? (
                <TiMinus onClick={() => setShipping(!shipping)} />
              ) : (
                <TiPlus onClick={() => setShipping(!shipping)} />
              )}
            </Flex>

            {shipping && (
              <p className="mt-[19px] font-dm font-normal text-[16px] leading-[30px] text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            )}
          </div>
        </div>
        {/* info end */}

        {/* descryptions & reviews start */}
        <div className="mt-[123px]">
          <Flex className={` items-center gap-[62px]`}>
            <h2
              onClick={() => setSection("desc")}
              className={` font-dm  text-[20px]  ${
                section == "desc"
                  ? "text-primary font-bold"
                  : "text-secondary font-normal"
              } leading-[29px] cursor-pointer`}
            >
              Description
            </h2>
            <h2
              onClick={() => setSection("review")}
              className={` font-dm  text-[20px]  ${
                section == "review"
                  ? "text-primary font-bold"
                  : "text-secondary font-normal"
              } leading-[29px] cursor-pointer`}
            >
              Reviews (1)
            </h2>
          </Flex>

          <div className="mt-[42px]">
            {section == "review" ? (
              <div>
                <p className=" pb-4 border-b-[1px] border-solid font-dm font-normal text-[14px] leading-[30px] text-secondary">
                  1 review for Product
                </p>

                <div className="pt-6 pb-4 border-b-[1px] border-solid">
                  <Flex className={`items-center justify-between`}>
                    <Flex className={`items-center gap-[37px]`}>
                      <h1 className=" font-dm font-normal text-[16px] leading-[30px] text-primary">
                        John Ford
                      </h1>
                      <Rate disabled defaultValue={5} />
                    </Flex>

                    <span className=" font-dm font-normal text-[16px] text-secondary">
                      6 months ago
                    </span>
                  </Flex>

                  <p className=" font-dm font-normal text-[16px] leading-[30px] text-secondary mt-[14px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <p>{targetProduct?.description}</p>
              </div>
            )}
          </div>
        </div>
        {/* descryptions & reviews end */}

        {/* post review start */}

        <form action="" className="mt-[53px] mb-[341px] w-full lg:w-[780px]">
          <h1 className="mb-12 font-dm font-bold text-[20px] text-primary">
            Add a Review
          </h1>

          <div className="mb-[23px]">
            <label
              className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
              htmlFor=""
            >
              Name
            </label>

            <input
              className="w-full md:w-[779px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
              type="text"
              name=""
              id=""
              placeholder="Your name here"
            />
          </div>
          <div className="mb-[23px]">
            <label
              className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
              htmlFor=""
            >
              Email
            </label>

            <input
              className="w-full md:w-[779px] block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
              type="email"
              name=""
              id=""
              placeholder="Your email here"
            />
          </div>

          <div className="mb-[23px]">
            <label
              className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
              htmlFor=""
            >
              Review
            </label>

            <input
              className="w-full md:w-[779px] block border-b border-[#f0f0f0] pt-[10px] pb-[86px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
              type="text"
              name=""
              id=""
              placeholder="Your review here"
            />
          </div>

          <button
            className=" font-dm font-bold text-[14px] text-white py-4 px-[88px] bg-primary"
            type="submit"
          >
            Post
          </button>
        </form>
        {/* post review end */}
      </Container>
    </section>
  );
};

export default Product;
