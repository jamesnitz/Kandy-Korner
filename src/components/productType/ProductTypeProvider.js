import React, { useState, useEffect } from "react"

export const ProductTypeContext = React.createContext()


export const ProductTypeProvider = (props) => {
  const [productTypes, setProductTypes] = useState([])

  const getProductTypes = () => {
    return fetch ("http://localhost:8088/productTypes")
        .then(res => res.json())
        .then(setProductTypes)
  }

  const addProductTypes = productTypes => {
    return fetch("http://localhost:8088/productTypes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productTypes)
    })
      .then(getProductTypes)
  }

  useEffect(() => {
    getProductTypes()
  }, [])

  useEffect(() => {
    console.log("***productType APP STATE CHANGE", productTypes)
  }, [productTypes])

  return (
    <ProductTypeContext.Provider value={{
      productTypes, addProductTypes
    }}>
      {props.children}
    </ProductTypeContext.Provider>
  )
}