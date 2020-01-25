import React from "react"
import "./Product.css"

export default ({ product, productType }) => (
  <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <address className="product__type">Product type: {productType.name}</address>
    </section>
)