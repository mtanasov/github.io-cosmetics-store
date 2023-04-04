import { useState, useEffect } from "react";
import "./style__header.css";
import PopUp_header from "./PopUp_header";

export default () => {
  const [trigger, setTrigger] = useState(false);
  const [isOpenHeader, setIsOpenHeader] = useState(false);

  const bgr = () => setTrigger(!trigger);
  const isOpen = () => setIsOpenHeader(!isOpenHeader);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setTrigger(true) : setTrigger(false);
    });
  });

  return (
    <header
      className="header"
      onMouseEnter={bgr}
      onMouseLeave={() => {
        bgr();
        isOpen();
      }}
      style={{
        backgroundColor: trigger ? "rgb(255, 255, 255)" : "transparent",
      }}
    >
      <div className="nav">
        <button
          className="menu__catalogue"
          // onMouseEnter={isOpen}
          // onMouseLeave={isOpen}
          onClick={isOpen}
        >
          Каталог
        </button>
        <button className="menu__top">Верхнее меню</button>
        <button className="menu__bottom">Нижнее меню</button>
      </div>

      <div className="logo"></div>
      <div className="controls">
        <input className="search" type="text" placeholder="Поиск" />
        <button className="user icon-btn_header"></button>
        <button className="basket icon-btn_header"></button>
      </div>
      {isOpenHeader && <PopUp_header state={isOpenHeader} />}
    </header>
  );
};
