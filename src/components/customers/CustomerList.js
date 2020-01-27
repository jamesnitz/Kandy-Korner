import React, { useContext } from "react"
import Customer from "./Customer"
import "./Customer.css"
import { CustomerContext } from "./CustomerProvider"

export default () => {
  const {customers} = useContext(CustomerContext)

  return (
    <>
    <h1 className="customer_Header">Customers</h1>
    <div className="customerList">
      {
        customers.map(singleCustomer => <Customer key={singleCustomer.id} customer={singleCustomer} />)
      }
    </div>
    </>
  )
}