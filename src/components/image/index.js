import React from "react";

const Image = ({product}) => {
  return (
    <section className="image_container">
      <img className={"image"} src={product.image} />
    </section>
  );
};

export default Image;
