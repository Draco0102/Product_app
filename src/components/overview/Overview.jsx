import React, { useContext } from "react";
import Article from "../article";
import Image from "../image";
import { ProductContext } from "../../context/ProductProvider";
import { productTypes } from "../../context/types/actionTypes";
const Overview = ({ product }) => {
  const {productDispatch} = useContext(ProductContext)
  const setActiveProduct = (id) => {
    productDispatch({type:productTypes.ACTIVE_PRODUCT,payload:id})
    productDispatch({type:productTypes.ACTIVE_MODE,payload:'detail'})
  }
  return (
    <React.Fragment>
      <section className="overview_conatiner">
        <Image product={product}/>
        <Article product={product} handleActiveProduct={setActiveProduct}/>
      </section>
    </React.Fragment>
  );
};

export default Overview;
