import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Breadcrums from "../components/Breadcrums";

const Account = ({ title }) => {
  const [toggleState, setToggleState] = useState(1);
  return (
    <section>
      <Container>
        <Breadcrums title={title} />

        <div className=" mt-[127px]">
          <Flex>
            <div className="w-2/12">
              <List>
                <ListItem>
                  <button
                    onClick={() => setToggleState(1)}
                    className={` block w-[233px] text-left border-b-[1px] border-[#f0f0f0] mb-5 font-dm ${
                      toggleState == 1 ? "font-bold" : "font-normal"
                    } text-[16px] leading-[30px] text-secondary pb-[19px]`}
                  >
                    Dashboard
                  </button>
                </ListItem>
                <ListItem>
                  <button
                    onClick={() => setToggleState(2)}
                    className={` block w-[233px] text-left border-b-[1px] border-[#f0f0f0] mb-5 font-dm ${
                      toggleState == 2 ? "font-bold" : "font-normal"
                    } text-[16px] leading-[30px] text-secondary pb-[19px]`}
                  >
                    Others
                  </button>
                </ListItem>
                <ListItem>
                  <button
                    onClick={() => setToggleState(3)}
                    className={` block w-[233px] text-left border-b-[1px] border-[#f0f0f0] mb-5 font-dm ${
                      toggleState == 3 ? "font-bold" : "font-normal"
                    } text-[16px] leading-[30px] text-secondary pb-[19px]`}
                  >
                    Donwloads
                  </button>
                </ListItem>
                <ListItem>
                  <button
                    onClick={() => setToggleState(4)}
                    className={` block w-[233px] text-left border-b-[1px] border-[#f0f0f0] mb-5 font-dm ${
                      toggleState == 4 ? "font-bold" : "font-normal"
                    } text-[16px] leading-[30px] text-secondary pb-[19px]`}
                  >
                    Addresses
                  </button>
                </ListItem>
                <ListItem>
                  <button
                    onClick={() => setToggleState(5)}
                    className={` block w-[233px] text-left border-b-[1px] border-[#f0f0f0] mb-5 font-dm ${
                      toggleState == 5 ? "font-bold" : "font-normal"
                    } text-[16px] leading-[30px] text-secondary pb-[19px]`}
                  >
                    Account datails
                  </button>
                </ListItem>
                <ListItem>
                  <button
                    className={` block w-[233px] text-left border-b-[1px] border-[#f0f0f0] mb-5 font-dm font-normal text-[16px] leading-[30px] text-secondary pb-[19px]`}
                  >
                    Logout
                  </button>
                </ListItem>
              </List>
            </div>
            <div className="w-10/12">
              <div className={toggleState == 1 ? "block" : "hidden"}>
                <h4 className=" font-dm font-normal text-[16px] leading-[30px] text-secondary">
                  Hello <span className=" text-primary">admin</span> (not{" "}
                  <span className="text-primary">admin</span>? {""}
                  <button className=" text-primary">Log out</button> )
                </h4>

                <p className=" font-dm font-normal text-[16px] leading-[30px] text-secondary lg:w-[918px] mt-[45px]">
                  From your account dashboard you can view your{" "}
                  <span className=" text-primary">recent orders</span>, manage
                  your{" "}
                  <span className=" text-primary">
                    shipping and billing addresses
                  </span>
                  , and{" "}
                  <span className=" text-primary">
                    edit your password and account details
                  </span>
                  .
                </p>
              </div>

              <div className={toggleState == 2 ? "block" : "hidden"}>
                others
              </div>
              <div className={toggleState == 3 ? "block" : "hidden"}>
                donwload
              </div>
              <div className={toggleState == 4 ? "block" : "hidden"}>
                address
              </div>
              <div className={toggleState == 5 ? "block" : "hidden"}>
                account details
              </div>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Account;
