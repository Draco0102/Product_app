import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";
const Article = ({product, handleActiveProduct}) => {
    const setActiveProduct = (e) => {
        handleActiveProduct(e.target.name);
    }
  return (
    <section className="article_container">
      <p className="category">{product.category}</p>
      <p className="title">{product.title}</p>
      <p className="description">{product.description}</p>
      <Button as="div" labelPosition="right">
        <Button basic color="blue" name={product.id} onClick={setActiveProduct}>
          <Icon name="caret square left outline" />
          Checkout
        </Button>
        <Label as="a" basic color="blue" pointing="left"></Label>
      </Button>
    </section>
  );
};

export default Article;
