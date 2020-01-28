import React, { useContext } from "react"
import { ProductContext } from "../product/ProductProvider"
import Order from "./Order"
import { CustomerCandyContext } from "../customerCandy/CustomerCandyProvider"
import "./Order.css"
export default (props) => {

  const { customerCandys } = useContext(CustomerCandyContext)
  const { products } = useContext(ProductContext)

  return (
    <>
      <h1 className="orders__header">My orders</h1>
      <div className="orderList">
        {
          customerCandys.filter(cc => {
            if (cc.customerId === parseInt(localStorage.getItem("kandy_customer"))) {
              return cc
            }
          }).map(cc => {
            const foundProduct = products.find(p => p.id === cc.productId)
            return <Order key={cc.id}
                          customerCandy ={cc}
                          Product = {foundProduct} />
          })
          

      }

      </div>
    </>
  )
}






