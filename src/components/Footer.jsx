import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Imege from "./Imege";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f3] pt-[55px]">
      <Container>
        <Flex className={`flex-col gap-8 lg:flex-row lg:gap-0`}>
          <div className="w-full lg:w-5/12">
            <Flex
              className={`justify-between lg:justify-start gap-5 lg:gap-[143px]`}
            >
              <div>
                <h3 className=" font-dm font-bold text-[16px] text-primary leading-[23px] uppercase">
                  Menu
                </h3>

                <List className={`mt-[17px]`}>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    <Link to={`/`}>Home</Link>
                  </ListItem>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    <Link to={`/shop`}>Shop</Link>
                  </ListItem>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    <Link to={`/about`}>About</Link>
                  </ListItem>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    <Link to={`/contact`}>Contact</Link>
                  </ListItem>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    Journal
                  </ListItem>
                </List>
              </div>
              <div>
                <h3 className=" font-dm font-bold text-[16px] text-primary leading-[23px] uppercase">
                  shop
                </h3>

                <List className={`mt-[17px]`}>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    Category 1
                  </ListItem>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    Category 2
                  </ListItem>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    Category 3
                  </ListItem>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    Category 4
                  </ListItem>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    Category 5
                  </ListItem>
                </List>
              </div>
              <div>
                <h3 className=" font-dm font-bold text-[16px] text-primary leading-[23px] uppercase">
                  help
                </h3>

                <List className={`mt-[17px]`}>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    Privacy Policy
                  </ListItem>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    Terms & Conditions
                  </ListItem>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    Special E-shop
                  </ListItem>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    Shopping
                  </ListItem>
                  <ListItem
                    className={`font-dm font-normal text-[14px] leading-[23px] text-textColor mb-[6px]`}
                  >
                    Secure Payments
                  </ListItem>
                </List>
              </div>
            </Flex>
          </div>
          <div className="w-full lg:w-7/12">
            <Flex
              className={`items-start justify-start gap-20 lg:gap-[160px] flex-col lg:flex-row`}
            >
              <div>
                <h3 className=" w-[186px] font-dm font-bold text-[16px] text-primary leading-[27px] uppercase">
                  (052) 611-5711 company@domain.com
                </h3>

                <p className="font-dm font-normal text-[14px] leading-[23px] text-textColor mt-[15px]">
                  575 Crescent Ave. Quakertown, PA 18951
                </p>
              </div>

              <Imege src={`/images/logo.png`} />
            </Flex>
          </div>
        </Flex>

        <Flex
          className={`items-center justify-center flex-col gap-3 pt-[65px] pb-[60px]  lg:justify-between lg:flex-row lg:gap-0`}
        >
          <div>
            <List className={`flex gap-7`}>
              <ListItem>
                <FaFacebookF size={20} />
              </ListItem>
              <ListItem>
                <FaLinkedinIn size={20} />
              </ListItem>
              <ListItem>
                <FaInstagram size={20} />
              </ListItem>
            </List>
          </div>

          <p className="font-dm font-normal text-center lg:text-left text-[14px] leading-[23px] text-textColor">
            2024 Orebi Minimal eCommerce Figma Template by Mahmood Hassan Rameem
          </p>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
