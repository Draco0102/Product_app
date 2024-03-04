import React from "react";
import { Button } from "semantic-ui-react";
const Pagination = ({currentPage,prevPage, indexOfLastProduct, productState, nextPage}) => {
  return (
    <div className="pagination">
      <Button disabled={currentPage === 1} onClick={prevPage}>
        Previous
      </Button>
      <Button
        disabled={indexOfLastProduct >= productState.products.length}
        onClick={nextPage}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
