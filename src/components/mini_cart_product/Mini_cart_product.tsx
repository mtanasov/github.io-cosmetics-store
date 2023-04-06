import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { style } from "./style_mini_cart_product.js";

interface product {
  id: "";
  img: "";
  name: "";
  price: "";
  state?: boolean;
}

export default (product: product) => {
  const [favoriteState, setFavoriteState] = useState(false);

  return (
    <div style={style.blockProduct}>
      <img style={style.image} src={product.img} alt="Oops..." />
      <h3 style={style.productName}>{product.name}</h3>
      <div style={style.noName}>
        <div style={style.productPrice}>{product.price}</div>
        <div style={style.buyProduct}></div>
        <div
          // onClick={() => setFavoriteState(!favoriteState)}
          style={style.favorite(favoriteState)}
        ></div>
      </div>
    </div>
  );
};
