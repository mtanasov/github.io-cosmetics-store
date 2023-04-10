import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { style } from "./styleHeader";

export default (props: { array: []; state: boolean; block: string }) => {
  // console.log("TOP___MENU", props.array);
  return (
    <>
      <div style={style.style_headerOpen(props.state, props.block)}>
        <ul style={style.ul}>
          {props.array.map(
            (
              item: { title: ""; imgLink: ""; URL_category: "" },
              index: number
            ) => {
              return (
                <li style={style.li} key={index.toString()}>
                  <Link to={item.URL_category} style={style.a}>
                    {item.title}
                  </Link>
                  <img
                    style={style.style_img(props.block)}
                    src={item.imgLink}
                    alt="oops..."
                  />
                </li>
              );
            }
          )}
        </ul>
      </div>
    </>
  );
};
