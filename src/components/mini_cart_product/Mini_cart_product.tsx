import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@mantine/hooks";
import { style } from "./style_mini_cart_product.js";
import { getLocalStorage } from "../../data/getDataLocalStor.js";

interface product {
  id: "";
  img: "";
  name: "";
  price: "";
  state?: boolean;
}

export default (product: product) => {
  const keyLocalStorage_Favorite = "favorite";
  const keyLocalStorage_Buy = "buy";
  const [state, setState] = useState(false);
  const [favoriteState, setFavoriteState] = useState(false);
  const [arrFavoriteProd, setArrFavoriteProd] = useLocalStorage<Array<Object>>({
    key: keyLocalStorage_Favorite,
    defaultValue: [],
  });
  const [arrBuyProd, setArrBuyProd] = useLocalStorage<Array<Object>>({
    key: keyLocalStorage_Buy,
    defaultValue: getLocalStorage(keyLocalStorage_Buy) || [],
  });
  // TODO написать функцию , которая проверяет наличие товара в массиве и возвращает bool, на основе этого сделать подстветку кнопок купить и нравится

  return (
    <div style={style.blockProduct}>
      <img style={style.image} src={product.img} alt="Oops..." />
      <h3 style={style.productName}>{product.name}</h3>
      <div style={style.noName}>
        <div style={style.productPrice}>{product.price}</div>
        <button
          style={style.buyProduct}
          onClick={() => {
            if (arrBuyProd === null) {
              setState(!state);
              return setArrBuyProd([
                {
                  id: product.id,
                  price: product.price,
                  quantity: 1,
                },
              ]);
            } else if (arrBuyProd.map((item) => item.id).includes(product.id)) {
              console.log("product DELETE  local storage");
              setState(!state);
              return setArrBuyProd(
                arrBuyProd.filter((item: { id: "" }) => item.id !== product.id)
              );
            } else {
              console.log("product ADD  local storage");
              setState(!state);
              return setArrBuyProd(
                arrBuyProd.concat({
                  id: product.id,
                  price: product.price,
                  quantity: 1,
                })
              );
            }
          }}
        ></button>
        <button
          // onClick={() => setFavoriteState(!favoriteState)}
          style={style.favorite(favoriteState)}
          onClick={() => {
            if (arrFavoriteProd === null) {
              setState(!state);
              return setArrFavoriteProd([
                {
                  id: product.id,
                  price: product.price,
                  quantity: 1,
                },
              ]);
            } else if (
              arrFavoriteProd.map((item) => item.id).includes(product.id)
            ) {
              console.log("product DELETE  local storage");
              setState(!state);
              return setArrFavoriteProd(
                arrFavoriteProd.filter(
                  (item: { id: "" }) => item.id !== product.id
                )
              );
            } else {
              console.log("product ADD  local storage");
              setState(!state);
              return setArrFavoriteProd(
                arrFavoriteProd.concat({
                  id: product.id,
                  price: product.price,
                  quantity: 1,
                })
              );
            }
          }}
        ></button>
      </div>
    </div>
  );
};
