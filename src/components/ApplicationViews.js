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
          <Route path="/products" >
            <ProductList />
          </Route>
        </ProductTypeProvider>
      </ProductProvider>

      <ProductTypeProvider>
        <Route path="/productTypes" >
          <ProductTypeList />
        </Route>
      </ProductTypeProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/employees" render={
            props => <EmployeeList {...props} />
          } />

          <Route  path="/employees/create" 
          render={props => <EmployeeForm {...props} />}
          />
        </LocationProvider>
      </EmployeeProvider>
    </>
  )
}