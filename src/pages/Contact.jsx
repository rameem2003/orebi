import React from "react";
import Container from "../components/Container";
import Breadcrums from "../components/Breadcrums";

const Contact = ({ title }) => {
  return (
    <section>
      <Container>
        <Breadcrums title={title} />

        <form action="" className="mt-[125px]">
          <h3 className="font-dm font-bold text-[42px] text-primary mb-[42px]">
            Fill up a Form
          </h3>

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
              Message
            </label>

            <input
              className="w-full md:w-[779px] block border-b border-[#f0f0f0] pt-[10px] pb-[86px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
              type="text"
              name=""
              id=""
              placeholder="Your message here"
            />
          </div>

          <button
            className=" font-dm font-bold text-[14px] text-white py-4 px-[85px] bg-primary mt-[30px]"
            type="submit"
          >
            Post
          </button>
        </form>

        <div className="my-[140px]">
          <iframe
            className=" w-full h-[572px]"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1773.1550019984672!2d90.37143508376887!3d23.810604182892966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ4JzM3LjkiTiA5MMKwMjInMTYuMyJF!5e0!3m2!1sbn!2sbd!4v1707577364725!5m2!1sbn!2sbd"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
