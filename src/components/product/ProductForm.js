import React, { useContext, useRef } from "react"
import { ProductContext } from "./ProductProvider"
import { CustomerCandyContext } from "../customerCandy/CustomerCandyProvider"

export default props => {
  const { addCustomerCandy } = useContext(CustomerCandyContext)
  const { products } = useContext(ProductContext)
  const product = useRef(0)
  const amount = useRef(0)

  const constructNewCandy = () => {
    const productId = parseInt(product.current.value)
    const amountValue = parseInt(amount.current.value)
  
    if (productId === 0 || amount === 0) {
      window.alert("You need to select candy")
    } else {
      addCustomerCandy({
        productId: productId,
        amount: amountValue,
        customerId: parseInt(localStorage.getItem("kandy_customer"))
      }).then(props.history.push("/order"))
    } 
  }



  return (
    <>
    <div className="form-group">
      <label htmlFor="product">What you want to buy?</label>
      <select
        defaultValue=""
        name="product"
        ref={product}
        id="product"

      >
        <option value="0">Choose a Kandy</option>
        {products.map(e => (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        ))}
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="amount">How many you want?</label>
      <input
        type="number"
        id="amount"
        min= "1"
        ref={amount}
        required
        autoFocus
 
      />
    </div>

    <button
    type="submit"
    onClick={
      evt => {
        evt.preventDefault();
        constructNewCandy();
        
      }
    }
    className="btn btn-primary">Buy NOW!</button>
    </>
  )
}