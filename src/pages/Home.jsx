import React from "react";
import Banner from "../components/Banner";
import Advertisement from "../components/Advertisement";
import NewArrivals from "../components/NewArrivals";
import BestSellers from "../components/BestSellers";
import TopProduct from "../components/TopProduct";
import SpecialOffer from "../components/SpecialOffer";

const Home = () => {
  return (
    <main>
      <Banner />
      <Advertisement />
      <NewArrivals />
      <BestSellers />
      <TopProduct />
      <SpecialOffer />
    </main>
  );
};

export default Home;
