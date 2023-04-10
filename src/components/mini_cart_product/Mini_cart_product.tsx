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
      <Link to={`/parfums/product`}>
        <img style={style.image} src={product.img} alt="Oops..." />
        <h3 style={style.productName}>{product.name}</h3>
      </Link>
      <div style={style.noName}>
        <div style={style.productPrice}>{product.price}</div>
        {/* todo BUY */}
        <button
          style={style.buyProduct(isBuyProduct)}
          onClick={() => {
            if (arrBuyProd === null) {
              setIsBuyProduct(!isBuyProduct);
              setArrBuyProd([
                {
                  id: product.id,
                  price: product.price,
                  quantity: 1,
                },
              ]);
            } else if (
              arrBuyProd.map((item: any) => item.id).includes(product.id)
            ) {
              setIsBuyProduct(!isBuyProduct);
              setArrBuyProd(
                arrBuyProd.filter((item: any) => item.id !== product.id) // any
              );
            } else {
              setIsBuyProduct(!isBuyProduct);
              setArrBuyProd(
                arrBuyProd.concat({
                  id: product.id,
                  price: product.price,
                  quantity: 1,
                })
              );
            }
          }}
        ></button>
        {/* todo FAVORITE */}
        <button
          style={style.favorite(isFavoriteProduct)}
          onClick={() => {
            if (arrFavoriteProd === null) {
              setIsFavoriteProduct(!isFavoriteProduct);
              setArrFavoriteProd([
                {
                  id: product.id,
                  price: product.price,
                  quantity: 1,
                },
              ]);
            } else if (
              arrFavoriteProd.map((item: any) => item.id).includes(product.id)
            ) {
              setIsFavoriteProduct(!isFavoriteProduct);
              setArrFavoriteProd(
                arrFavoriteProd.filter((item: any) => item.id !== product.id)
              );
            } else {
              setIsFavoriteProduct(!isFavoriteProduct);
              setArrFavoriteProd(
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
