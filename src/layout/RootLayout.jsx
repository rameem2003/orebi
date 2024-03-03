import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
