import React from "react";

const ProductItem = (props) => {
  const { product } = props;

  return (
    <div className="column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src={product.imgSrc}
                alt="https://bulma.io/images/placeholders/128x128.png"
              />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}
              {"  "}
              <span className="tag is-primary">${product.price}</span>
            </b>
            <div>{product.shortDesc}</div>
            {product.stock > 0 ? (
              <small>{product.stock + " left"}</small>
            ) : (
              <small className="has-text-danger">Out of Stock</small>
            )}
            <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-primary is-pulled-right"
                onClick={() =>
                  props.addToCart({ id: product.name, product, amount: 1 })
                }
                disabled={product.stock > 0 ? null : true}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
