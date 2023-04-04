import { Link } from "react-router-dom";
import { style } from "/src/components/header/styleHeader";
import { categoryDATA } from "../../data/data-product";
import { useState } from "react";

export default (props: { state: boolean }) => {
  const [stateOpen2, setStateOpen2] = useState(props.state);
  return (
    <div
      style={style.style_headerOpen(stateOpen2)}
      // onMouseEnter={() => setStateOpen2(true)}
      onMouseLeave={() => setStateOpen2(false)}
    >
      <ul style={style.ul}>
        <li style={style.li}>
          <a style={style.a_All}>
            Смотреть всё
            <b style={{ paddingLeft: "10px" }}>&#8250;</b>
          </a>
        </li>
        {categoryDATA.map((item: { title: ""; imgLink: "" }) => {
          return (
            <li style={style.li}>
              <a style={style.a}>{item.title}</a>
              <img
                src={item.imgLink}
                alt="oops..."
                width="240px"
                height="323px"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
