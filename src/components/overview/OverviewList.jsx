import React, { useContext, useState } from "react";
import Overview from "./Overview";
import { Container, Button } from "semantic-ui-react";
import "./overview.scss";
import { ProductContext } from "../../context/ProductProvider";
import Pagination from "../pagination";
const OverviewList = () => {
  const { productState } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4; // Number of products to display per page

  // Calculate index of the first and last product to be displayed
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productState.products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  let products = currentProducts.map((item, key) => {
    return (
      <section key={item.id}>
        <Overview product={item} key={item.id} />
      </section>
    );
  });
  return (
    <Container>
      {products}
      <Pagination
        currentPage={currentPage}
        prevPage={prevPage}
        indexOfLastProduct={indexOfLastProduct}
        productState={productState}
        nextPage={nextPage}
      />
    </Container>
  );
};

export default OverviewList;
