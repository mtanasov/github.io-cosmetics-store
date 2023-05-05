import { style } from "./style__contacts";

export default () => {
  return (
    <div style={style.container}>
      <h1>Контакты</h1>
      <h2> Інтернет-магазин Moon </h2>
      <div> гаряча лінія: щоденно з 9:00 до 20:00</div>
      <div style={style.contact}>
        <img
          src="/src/assets/img/phone-calling.png"
          alt="num-phone"
          width="25px"
          height="25px"
          style={{ margin: "0 10px 0 0 " }}
        />
        <a href="tel:0 800 400 123"> 0 800 400 123 </a>
      </div>
      <div style={style.contact}>
        <img
          src="/src/assets/img/mail-forward.png"
          alt="mail"
          width="25px"
          height="25px"
          style={{ margin: "0 10px 0 0 " }}
        />
        <a href="mailto:info@shop-moon.com"> info@shop-moon.com </a>
      </div>
      <div style={style.contact}>
        <img
          src="/src/assets/img/brand-telegram.png"
          alt="mail"
          width="25px"
          height="25px"
          style={{ margin: "0 10px 0 0 " }}
        />
        <a href="https://web.telegram.org/" target="_blank">
          {" "}
          @shop-moon{" "}
        </a>
      </div>
      <div style={style.contact}>
        <img
          src="/src/assets/img/brand-instagram.png"
          alt="mail"
          width="25px"
          height="25px"
          style={{ margin: "0 10px 0 0 " }}
        />
        <a href="https://instagram.com" target="_blank">
          {" "}
          @shop-moon{" "}
        </a>
      </div>
    </div>
  );
};
