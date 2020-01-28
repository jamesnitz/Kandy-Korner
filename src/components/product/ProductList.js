import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import { ProductTypeContext } from "../productType/ProductTypeProvider"


export default (props) => {
  const { products } = useContext(ProductContext)
  const { productTypes } =useContext(ProductTypeContext)

  return(
    <>
      <h1 className="product__header">Products</h1>
    <button onClick={() => props.history.push("/products/create")}>
      Purchase Kandy
    </button>
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