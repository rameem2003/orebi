import React, { useState } from "react";
import Container from "../components/Container";
import Breadcrums from "../components/Breadcrums";
import Flex from "../components/Flex";
import { useLocation } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const ProductsFilter = () => {
  const location = useLocation();

  const [filter, setFilter] = useState(location.state.key);

  // let filter = location.state.key;

  console.log(filter);
  return (
    <section>
      <Container>
        <Breadcrums title={"Product Filter "} />

        <Flex className={`items-center flex-wrap gap-5 mb-10`}>
          {filter.length > 0 ? (
            filter.map((item, i) => <ItemCard item={item} key={i} />)
          ) : (
            <h1>No Arguments to filter</h1>
          )}
        </Flex>
      </Container>
    </section>
  );
};

export default ProductsFilter;
