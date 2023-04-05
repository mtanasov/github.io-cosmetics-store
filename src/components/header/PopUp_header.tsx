import { Link } from "react-router-dom";
import { style } from "/src/components/header/styleHeader";
import { useState } from "react";

export default (props: { array: []; state: boolean; block: string }) => {
  console.log("TOP___MENU", props.array);
  return (
    <div style={style.style_headerOpen(props.state, props.block)}>
      <ul style={style.ul}>
        {props.array.map((item: { title: ""; imgLink: "" }) => {
          return (
            <li style={style.li}>
              <a style={style.a}>{item.title}</a>
              <img
                style={style.style_img(props.block)}
                src={item.imgLink}
                alt="oops..."
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
