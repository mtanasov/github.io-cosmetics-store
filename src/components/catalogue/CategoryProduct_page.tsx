import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Breadcrumbs, Anchor } from "@mantine/core";
import { categoryDATA } from "../../data/data-product";
import Mini_cart_product from "../mini_cart_product/Mini_cart_product";
import { style } from "./style_categoryProduct.js";

export default (props: { arrProduct: []; category: any }) => {
  const [arrCategory, setArrCategory] = useState(props.arrProduct);

  const items = [
    { title: "Главная", href: "/" },
    { title: props.category, href: "" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index.toString()}>
      {item.title}
    </Anchor>
  ));

  return (
    <div style={style.conteiner}>
      <>
        <Breadcrumbs separator="→" mt="xs" style={{ width: "90vw" }}>
          {items}
        </Breadcrumbs>
      </>
      <h1 style={style.title}>{props.category}</h1>
      <div style={style.listProduct}>
        {arrCategory
          .filter((product: { category: "" }): any => {
            return product.category === props.category;
          })
          .map(
            (product: {
              id: "";
              name: "";
              price: "";
              img: "";
              URL_link: "";
            }): any => {
              return (
                <Mini_cart_product
                  key={product.id}
                  id={product.id}
                  img={product.img}
                  name={product.name}
                  price={product.price}
                  URL_link={product.URL_link}
                />
              );
            }
          )}
      </div>
    </div>
  );
};
