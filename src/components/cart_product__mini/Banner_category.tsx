import "./banner_category.css"
import { dataProduct, categoryDATA } from "../../data/data-product.js"

export default () => {
  // const categoryProduct = Array.from(new Set(dataProduct.map((item: { category: string }) => item.category)))
  const categoryProduct = categoryDATA
  console.log(categoryProduct);

  return (
    < div className="layout__content" >
      <div className="banner-list">

        {
          categoryProduct.map((item: { title: string, imgLink: string }) => {

            return (
              <a
                href=" "
                data-block-id="19157881"
                className="banner-list__item editable-block no-text"
              >
                <div
                  className="img-ratio img-ratio_cover banner-list__item-photo"
                  style={{ backgroundImage: `url(${item.imgLink})` }}
                >
                </div>
                <h3 className="banner-list__item-title" >
                  {item.title}
                </h3 >
                <div className="after_title" ></div>
              </a>)
          })
        }
      </div>
    </ div>
  )
}

