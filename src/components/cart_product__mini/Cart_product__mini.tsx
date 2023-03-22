import "./cart_product__mini.css"
import { dataProduct } from "../../data/data-product.js"
console.log(dataProduct)

export default () => {
  const categoryProduct = Array.from(new Set(dataProduct.map((item: { category: string }) => item.category)))
  console.log(categoryProduct);

  return (
    < div className="layout__content" >
      <div className="banner-list">

        {
          categoryProduct.map((category: any) => {

            return (
              <a
                href=" "
                data-block-id="19157881"
                className="banner-list__item editable-block no-text"
              >

                <div className="img-ratio img-ratio_cover banner-list__item-photo">
                  <div className="img-ratio__inner">
                    <div className="img-ratio img-fit">
                      <div className="img-ratio__inner">

                      </div>
                    </div>

                  </div>
                </div>

                <div className="banner-list__item-title" >
                  {category}
                  <span className="icon icon-arrow-right"></span>
                </div >
              </a>)
          })
        }

      </div>
    </ div>
  )
}

