import React from "react";
import PaginationForGrid from "./PaginationForGrid";

const ItemGridView = ({ products }) => {
  return <PaginationForGrid itemsPerPage={12} products={products} />;
};

export default ItemGridView;
