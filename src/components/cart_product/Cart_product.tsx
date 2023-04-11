import { Form, useParams } from "react-router-dom";
import Header from "../header/Header";
import { Breadcrumbs, Anchor } from "@mantine/core";
import { dataProduct, categoryDATA } from "../../data/data-product";
import Slider_products from "../slider_products/Slider_products";
import { style } from "./style_cartProduct";

interface productCosmetics {
  id: "";
  name: "";
  category: "";
  description: "";
  price: "";
  img: "";
  URL_link: "";
  country: "";
  fabric: "";
  sex: "";
  class: "";
  typeAroma: "";
  beginNote: "";
  middleNote: "";
  endNote: "";
  year: "";
  inStock: boolean;
  volume: string[];
}

export default () => {
  const { atr } = useParams();

  const product: productCosmetics = dataProduct.filter(
    (item: { URL_link: "" }) => item.URL_link === atr
  )[0];

  const items = [
    { title: "Главная", href: "/" },
    {
      title: product.category,
      href: categoryDATA.filter(
        (item: any) => item.title === product.category
      )[0].URL_category,
    },
    { title: product.name, href: "" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <div style={style.conteiner}>
      <Breadcrumbs
        separator="→"
        mt="xs"
        style={{ width: "90vw", padding: "10px" }}
      >
        {items}
      </Breadcrumbs>
      <div style={style.wrapper}>
        <div style={style.blockInfo}>
          <h1>
            <div style={style.name}>{product.name}</div>
            <div style={style.category}>{product.category}</div>
          </h1>
          <div style={style.itemBlockInfo}>
            Год выпуска:{" "}
            <span style={style.valueBlockInfo}>{product.year}</span>
          </div>
          <div style={style.itemBlockInfo}>
            Страна бренда:{" "}
            <span style={style.valueBlockInfo}>{product.country}</span>
          </div>
          <div style={style.itemBlockInfo}>
            Страна производства:{" "}
            <span style={style.valueBlockInfo}>{product.fabric}</span>
          </div>
          <div style={style.itemBlockInfo}>
            Пол: <span style={style.valueBlockInfo}>{product.sex}</span>
          </div>
          <div style={style.itemBlockInfo}>
            Класификация:
            <span style={style.valueBlockInfo}> {product.class}</span>
          </div>
          <div style={style.itemBlockInfo}>
            Тип аромата:{" "}
            <span style={style.valueBlockInfo}>{product.typeAroma}</span>
          </div>
          <div style={style.itemBlockInfo}>
            Начальная нота:{" "}
            <span style={style.valueBlockInfo}>{product.beginNote}</span>
          </div>
          <div style={style.itemBlockInfo}>
            Стредняя нота:{" "}
            <span style={style.valueBlockInfo}>{product.middleNote}</span>
          </div>
          <div style={style.itemBlockInfo}>
            Последняя нота:{" "}
            <span style={style.valueBlockInfo}>{product.endNote}</span>
          </div>
        </div>
        <div style={style.blockGallery}>
          <img style={style.img} src={product.img} alt="oops.." />
        </div>
        <div style={style.control}>
          <div style={style.price}> {product.price} </div>
          <select style={style.selectList} name="" id="">
            {product.volume.map((item, index) => {
              return (
                <option
                  key={index.toString()}
                  style={{
                    padding: "10px",
                    height: "20px",
                  }}
                >
                  {item}
                </option>
              );
            })}
          </select>
          <div style={style.art}>
            код товара: <span>{product.URL_link}</span>{" "}
          </div>
          {/* <div> */}
          {product.inStock ? (
            <div
              style={{
                color: "#03aa20",
                paddingBottom: "10px",
                fontSize: "13px",
                fontWeight: "900",
              }}
            >
              в наличии
            </div>
          ) : (
            <div
              style={{
                color: "red",
                paddingBottom: "10px",
                fontSize: "13px",
                fontWeight: "900",
              }}
            >
              нет в наличии{" "}
            </div>
          )}
          {/* </div> */}
          <div style={{ display: "flex", gap: "25px" }}>
            <button style={style.btnBuy(product.inStock)}> </button>
            <button style={style.btnFavorite(product.inStock)}> </button>
          </div>
          <div style={style.freePost}>
            <div style={style.iconPost}></div>
            Бесплатная доставка
          </div>
          <div style={style.freePost}>
            <div style={style.iconGuarantee}></div> Гарантия{" "}
          </div>
        </div>
      </div>

      <div style={style.description}>
        <h2>Описание товара {product.name}</h2>
        <div>{product.description}</div>
      </div>
      <Slider_products
        arrayProduct={dataProduct.filter(
          (item: any) => item.category === "Волосы"
        )}
        title={"Покупают вместе"}
      />
    </div>
  );
};
