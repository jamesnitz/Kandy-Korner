import React from "react"

export default ({ customerCandy, Product }) => (
  <section className="order">
      <address>({customerCandy.amount}) {Product.name}</address>
      <address> Total cost: ${Product.cost * customerCandy.amount}</address>
  </section>
)