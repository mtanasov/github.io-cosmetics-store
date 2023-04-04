import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style__footer.css";

export default () => {
  return (
    <footer className="footer">
      <div className="info f_block">
        <div className="tel">+380503456798 | +380673456798</div>
        <div className="address"> г.Одесса, ул.Преображенская, 1 </div>
        <div className="createSite"> Интернет магазин создан на React TS </div>
      </div>
      <div className="logo"></div>
      <div className="social_pay f_block">
        <div className="f_sp_block">
          <a
            target="blank"
            href="https://web.telegram.org/"
            className="telegram soc"
          ></a>
          <a
            target="blank"
            href="https://www.instagram.com/"
            className="instagram soc"
          ></a>
        </div>
        <div className="f_sp_block">
          <div className="visa card"></div>
          <div className="mastercard card"></div>
        </div>
      </div>
    </footer>
  );
};
