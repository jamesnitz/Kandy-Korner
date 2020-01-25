import React, { useContext } from "react"
import ProductType from "./ProductType"
import { ProductTypeContext } from "./ProductTypeProvider"

export default () => {
    const { productTypes } = useContext(ProductTypeContext)
    console.log(productTypes, "types")

    return (
      <>
          <h3 className="ProductTypes__header">ProductTypes</h3>
        <div className="productTypes">
        {
            productTypes.map(pt => <ProductType key={pt.id} productType={pt} />)
        }
        </div>
        </>
    )
}