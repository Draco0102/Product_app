import React, { useContext, useEffect, useState } from "react";
import { fetchProducts } from "../../services/REST_API/products";
import Loading from "../../components/loader/Loader";
import OverviewList from "../../components/overview/OverviewList";
import { ProductContext } from "../../context/ProductProvider";
import { productTypes } from "../../context/types/actionTypes";
import OverviewDetail from "../../components/overview/detail";
import './home.scss';
const ProductsOverview = () => {
  const [loading, setLoading] = useState(true);
  const {productState,productDispatch} = useContext(ProductContext)
  console.log('mode',productState)
  useEffect(() => {
    (async () => {
      try {
        let result = await fetchProducts();
        productDispatch({type:productTypes.STORE_PRODUCTS,payload:result.data})
        setLoading(false);
      } catch (err) {
        console.error('Error in loading the products')
      }
    })();
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <section className="product_conatiner">
      {productState.activeMode === "list" && <OverviewList />}
      <OverviewDetail />
    </section>
  );
};

export default ProductsOverview;
