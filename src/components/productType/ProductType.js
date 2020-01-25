import React from "react"
import "./ProductType.css"

export default ({ productType }) =>  (  
    <section className="productType">
          <h3 className="productType__name">{productType.name}</h3>
      </section>
)

