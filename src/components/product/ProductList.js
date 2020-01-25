import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import { ProductTypeContext } from "../productType/ProductTypeProvider"


export default () => {
  const { products } = useContext(ProductContext)
  const { productTypes } =useContext(ProductTypeContext)

  return(
    <>
      <h3 className="product__header">Products</h3>
    <div className="products">
      {
        products.map(product => {
          const matchingProductType = productTypes.find(pt => pt.id === product.productTypeId)

          return <Product key={product.id}
            productType={matchingProductType}
            product={product}
           />
        })
      }
    </div>
    </>
  )
}