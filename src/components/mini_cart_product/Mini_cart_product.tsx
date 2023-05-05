import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, Router, Route } from "react-router-dom";
import { useLocalStorage } from "@mantine/hooks";
import { style } from "./style_mini_cart_product.js";
import { getLocalStorage } from "../../data/getDataLocalStor.js";
import ButtonBut from "../controls/ButtonBut";
import { ListItem } from "@mantine/core/lib/List/ListItem/ListItem.js";

interface product {
  id: "";
  img: "";
  name: "";
  price: "";
  state?: boolean;
  URL_link: "";
}

export default (product: product) => {
  const keyLocalStorage_Favorite = "favorite";
  const keyLocalStorage_Buy = "buy";
  const [isBuyProduct, setIsBuyProduct] = useState<Boolean>();
  const [isFavoriteProduct, setIsFavoriteProduct] = useState<Boolean>();
  const [arrFavoriteProd, setArrFavoriteProd] = useLocalStorage<Array<Object>>({
    key: keyLocalStorage_Favorite,
    defaultValue: getLocalStorage(keyLocalStorage_Favorite) || [],
  });
  const [arrBuyProd, setArrBuyProd] = useLocalStorage<Array<Object>>({
    key: keyLocalStorage_Buy,
    defaultValue: getLocalStorage(keyLocalStorage_Buy) || [],
  });

  const isInArray = (array: any): any => {
    return array.map((item: any) => item.id).includes(product.id);
  };

  useEffect(() => {
    setIsBuyProduct(isInArray(arrBuyProd));
    setIsFavoriteProduct(isInArray(arrFavoriteProd));
  });

  return (
    <div style={style.blockProduct}>
      <Link
        to={`/product/${product.URL_link}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <img style={style.image} src={product.img} alt="Oops..." />
        <h3 style={style.productName}>{product.name}</h3>
      </Link>
      <div>{product.price}</div>
      <ButtonBut id={product.id} />
    </div>
  );
};
