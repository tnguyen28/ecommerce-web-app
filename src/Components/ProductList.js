import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../Context/withContext";

const ProductList = (props) => {
  const { products } = props.context;

  return (
    <>
      <div className="hero is-primary">
        <div name="hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No Products Found
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);
