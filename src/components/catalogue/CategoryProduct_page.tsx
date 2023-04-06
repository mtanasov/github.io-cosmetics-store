import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Mini_cart_product from "../mini_cart_product/Mini_cart_product";
import { style } from "./style_categoryProduct.js";

export default (props: { arrProduct: []; category: any }) => {
  const [arrCategory, setArrCategory] = useState(props.arrProduct);
  const [favoriteState, setFavoriteState] = useState(false);

  return (
    <div style={style.conteiner}>
      <h2 style={style.title}>{props.category}</h2>
      <div style={style.listProduct}>
        {arrCategory
          .filter((product: { category: "" }): any => {
            return product.category === props.category;
          })
          .map(
            (
              product: { id: ""; name: ""; price: ""; img: "" },
              index: number
            ): any => {
              return (
                <Mini_cart_product
                  key={product.id.toString()}
                  id={product.id}
                  img={product.img}
                  name={product.name}
                  price={product.price}
                />
              );
            }
          )}
      </div>
    </div>
  );
};
