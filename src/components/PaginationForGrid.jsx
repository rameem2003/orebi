import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Flex from "./Flex";
import ItemCard from "./ItemCard";
const PaginationForGrid = ({ itemsPerPage, products }) => {
  // Example items, to simulate fetching from another resources.
  const items = products;

  function Items({ currentItems }) {
    return (
      <Flex className={`flex-wrap justify-between`}>
        {currentItems &&
          currentItems.map((item) => (
            <ItemCard item={item} className={`mb-[50px]`} />
          ))}
      </Flex>
    );
  }

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <Flex className="mt-[50px] items-center justify-between mb-[140px]">
        <ReactPaginate
          breakLabel="..."
          className=" flex gap-4 ml-[-15px] "
          activeClassName="bg-primary text-white"
          pageClassName=" p-5 border-[1px] border-[#F0F0F0] font-dm font-normal text-[14px] text-secondary"
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
        />

        <p className=" font-dm font-normal text-[14px] text-secondary leading-[30px]">
          Products from {itemOffset} to {parseInt(endOffset)} of {items.length}
        </p>
      </Flex>
    </>
  );
};

export default PaginationForGrid;
