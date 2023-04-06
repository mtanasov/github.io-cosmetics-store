import { useState } from "react";
import { arrayOfArticles } from "../../data/data-blog";
import Blog_item from "./Blog_item";
import "./style_blog.css";

export default () => {
  interface blogInterface {
    id?: string;
    title?: string;
    description?: string;
    img: string;
    fullText?: string;
  }

  return (
    <div className="blog">
      {arrayOfArticles.map((item: blogInterface, index: number) => {
        if (index % 2 === 0) {
          return (
            <Blog_item
              title={item.title}
              description={item.description}
              img={item.img}
            />
          );
        } else {
          return (
            <Blog_item
              title={item.title}
              description={item.description}
              img={item.img}
              class="reverse"
              pl="30px"
            />
          );
        }
      })}
    </div>
  );
};
