import { useState, useEffect, memo } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  categoryDATA,
  items_topMenu,
  items_bottomMenu,
} from "../../data/data-product";
import "./style__header.css";
import PopUp_header from "./PopUp_header";
import Counter from "../counter/Counter";
import { getLocalStorage } from "../../data/getDataLocalStor";

export default memo(() => {
  const [trigger, setTrigger] = useState(false);
  const [isOpenCatalogue, setIsOpenCatalogue] = useState(false);
  const [isOpenTopMenu, setIsOpenTopMenu] = useState(false);
  const [isOpenBottomMenu, setIsOpenBottomMenu] = useState(false);

  const scroll_Y: number = 30;
  const id_btn_catalogue = "btn_catalogue";
  const id_btn_topMenu = "btn_topMenu";
  const id_btn_bottomMenu = "btn_bottomMenu";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > scroll_Y) {
        setTrigger(true);
      } else {
        setTrigger(false);
        isOpenCatalogue ? setIsOpenCatalogue(true) : setIsOpenCatalogue(false);
      }
    });
  });

  const arrBuyProductOnBasket = getLocalStorage("buy");
  const arrFavoriteProduct = getLocalStorage("favorite");

  return (
    <>
      <header
        className="header"
        onMouseEnter={() => {
          setTrigger(true);
        }}
        onMouseLeave={() => {
          window.scrollY > scroll_Y ? setTrigger(true) : setTrigger(false);
          setIsOpenCatalogue(false);
        }}
        style={{
          backgroundColor: trigger ? "rgb(255, 255, 255)" : "transparent",
        }}
      >
        <div className="nav">
          <button
            id={id_btn_catalogue}
            className="menu__catalogue"
            onMouseEnter={() => {
              setIsOpenCatalogue(true);
              setIsOpenTopMenu(false);
              setIsOpenBottomMenu(false);
            }}
            onClick={() => setIsOpenCatalogue(!isOpenCatalogue)}
          >
            Каталог
          </button>
          <button
            id={id_btn_topMenu}
            className="menu__top"
            onClick={() => {
              setIsOpenCatalogue(false);
              setIsOpenTopMenu(!isOpenTopMenu);
              setIsOpenBottomMenu(false);
            }}
            // onMouseLeave={() => setIsOpenTopMenu(false)}
          >
            Верхнее меню
          </button>
          <button
            id={id_btn_bottomMenu}
            className="menu__bottom"
            onClick={() => {
              setIsOpenCatalogue(false);
              setIsOpenTopMenu(false);
              setIsOpenBottomMenu(!isOpenBottomMenu);
            }}
          >
            Нижнее меню
          </button>
        </div>

        <div className="logo">
          <Link
            to="/"
            style={{
              display: "inline-block",
              width: "inherit",
              height: "inherit",
            }}
          ></Link>
        </div>

        <div className="controls">
          <input className="search" type="text" placeholder="Поиск" />
          <button className="user icon-btn_header"></button>
          <button className="basket icon-btn_header">
            <Counter
              count={
                arrBuyProductOnBasket
                  ? Array.isArray(arrBuyProductOnBasket) &&
                    arrBuyProductOnBasket.length
                  : Number(0)
              }
              state={true}
              context={"basket"}
            />
          </button>
          <button className="favorite icon-btn_header">
            <Counter
              count={
                arrFavoriteProduct
                  ? Array.isArray(arrFavoriteProduct) &&
                    arrFavoriteProduct.length
                  : Number(0)
              }
              state={true}
              context={"favorite"}
            />
          </button>
        </div>
        <div style={{ padding: "0", margin: "0" }}>
          <div style={{ padding: "0", margin: "0" }}>
            {trigger && isOpenCatalogue ? (
              <PopUp_header
                state={trigger}
                array={categoryDATA}
                block={id_btn_catalogue}
              />
            ) : null}
          </div>
          <div>
            {trigger && isOpenTopMenu ? (
              <PopUp_header
                state={trigger}
                array={items_topMenu}
                block={id_btn_topMenu}
              />
            ) : null}
          </div>
          <div>
            {trigger && isOpenBottomMenu ? (
              <PopUp_header
                state={trigger}
                array={items_bottomMenu}
                block={id_btn_bottomMenu}
              />
            ) : null}
          </div>
        </div>
      </header>
    </>
  );
});
