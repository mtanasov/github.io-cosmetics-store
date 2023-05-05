import { useState, useEffect } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { style } from "./style_mini_cart_product.js";
import { getLocalStorage } from "../../data/getDataLocalStor.js";

export default (prod: { id: "" }) => {
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
    return array.map((item: any) => item.id).includes(prod.id);
  };

  useEffect(() => {
    setIsBuyProduct(isInArray(arrBuyProd));
    setIsFavoriteProduct(isInArray(arrFavoriteProd));
  });

  return (
    // <div style={style.blockProduct}>
      <div style={style.noName}>
        <button
          style={style.buyProduct(isBuyProduct)}
          onClick={() => {
            if (arrBuyProd === null) {
              setIsBuyProduct(!isBuyProduct);
              setArrBuyProd([
                {
                  id: prod.id,
                  price: prod.price,
                  quantity: 1,
                },
              ]);
            } else if (
              arrBuyProd.map((item: any) => item.id).includes(prod.id)
            ) {
              setIsBuyProduct(!isBuyProduct);
              setArrBuyProd(
                arrBuyProd.filter((item: any) => item.id !== prod.id) // any
              );
            } else {
              setIsBuyProduct(!isBuyProduct);
              setArrBuyProd(
                arrBuyProd.concat({
                  id: prod.id,
                  price: prod.price,
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
                  id: prod.id,
                  price: prod.price,
                  quantity: 1,
                },
              ]);
            } else if (
              arrFavoriteProd.map((item: any) => item.id).includes(prod.id)
            ) {
              setIsFavoriteProduct(!isFavoriteProduct);
              setArrFavoriteProd(
                arrFavoriteProd.filter((item: any) => item.id !== prod.id)
              );
            } else {
              setIsFavoriteProduct(!isFavoriteProduct);
              setArrFavoriteProd(
                arrFavoriteProd.concat({
                  id: prod.id,
                  price: prod.price,
                  quantity: 1,
                })
              );
            }
          }}
        ></button>
      </div>
    // </div>
  );
};
