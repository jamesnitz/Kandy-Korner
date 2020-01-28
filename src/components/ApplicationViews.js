import React from "react"
import { Route } from "react-router-dom"
import LocationList from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./product/ProductProvider"
import ProductList from "./product/ProductList"
import { ProductTypeProvider } from "./productType/ProductTypeProvider"
import ProductTypeList from "./productType/ProductTypeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"
import EmployeeForm from "./employee/EmployeeForm"
import ProductForm from "./product/ProductForm"
import CustomerList from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerCandyProvider } from "./customerCandy/CustomerCandyProvider"
import OrderList from "./order/OrderList"

export default () => {
  return (
    <>
      <LocationProvider>
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      <ProductProvider>
        <ProductTypeProvider>
          <CustomerCandyProvider>
            <CustomerProvider>
            <Route exact path="/products" render={
              props => <ProductList {...props} />
            } />

            <Route path="/products/create"
              render={props => <ProductForm {...props} />}
            />

            <Route path="/order"
              render={props => <OrderList {...props} />}
            />

            </CustomerProvider>
          </CustomerCandyProvider>
        </ProductTypeProvider>
      </ProductProvider>






      <ProductTypeProvider>
        <Route path="/productTypes" >
          <ProductTypeList />
        </Route>
      </ProductTypeProvider>

      <CustomerProvider>
        {/* Render the animal list when http://localhost:3000/animals */}
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/employees" render={
            props => <EmployeeList {...props} />
          } />

          <Route path="/employees/create"
            render={props => <EmployeeForm {...props} />}
          />
        </LocationProvider>
      </EmployeeProvider>
    </>
  )
}