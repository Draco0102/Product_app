import React, { useContext } from "react";
import { Button, Container, Icon, Label } from "semantic-ui-react";
import { ProductContext } from "../../../context/ProductProvider";
import "./detail.scss";
const OverviewDetail = ({ product }) => {
  const { productState } = useContext(ProductContext);
  console.log(productState, "state");
  const activeProduct = productState.products.filter(
    (item) => item.id.toString() === productState.activeProduct
  );
  if (activeProduct.length <= 0) return <div>Error in fetching</div>;
  return (
    <Container>
      <section className="detail_article_container">
        <section className={`article_image`}>
          <img className={"image"} src={activeProduct[0].image} />
        </section>
        <section className={`article_text`}>
          <p className="category">{activeProduct[0].category}</p>
          <p className="title">{activeProduct[0].title}</p>
          <p className="description">{activeProduct[0].description} There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
        </section>
      </section>
    </Container>
  );
};

export default OverviewDetail;
