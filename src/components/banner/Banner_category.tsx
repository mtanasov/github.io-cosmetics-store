import "./banner_category.css";
import { Link } from "react-router-dom";
import { dataProduct, categoryDATA } from "../../data/data-product.js";

export default () => {
  // const categoryProduct = Array.from(new Set(dataProduct.map((item: { category: string }) => item.category)))
  const categoryProduct = categoryDATA;
  console.log(categoryProduct);

  return (
    <div className="layout__content">
      <div className="banner-list">
        {categoryProduct.map(
          (
            item: { title: string; imgLink: string; URL_category: string },
            index: number
          ) => {
            console.log(item.imgLink);
            return (
              <Link
                to={item.URL_category}
                data-block-id="19157881"
                className="banner-list__item editable-block no-text"
                key={index.toString()}
                onClick={() => window.scrollTo(0, 0)}
              >
                <div
                  className="img-ratio img-ratio_cover banner-list__item-photo"
                  style={{ backgroundImage: `url(../../${item.imgLink})` }}
                ></div>
                <h3 className="banner-list__item-title">{item.title}</h3>
                <div className="after_title"></div>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};
