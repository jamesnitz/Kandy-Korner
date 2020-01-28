import React, {useState, useEffect } from "react"

export const CustomerCandyContext = React.createContext()

export const CustomerCandyProvider = (props) => {
  const [customerCandys, setCustomerCandys] = useState([])

  const getCustomerCandys = () => {
    return fetch("http://localhost:8088/customerCandys")
        .then(res => res.json())
        .then(setCustomerCandys)
  }


  const addCustomerCandy = CustomerCandy => {
    return fetch("http://localhost:8088/customerCandys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(CustomerCandy)
    })
      .then(getCustomerCandys)
  }

  useEffect(() => {
    getCustomerCandys()
  }, [])

  useEffect(() => {
    console.log("*** CustomerCandyS APP CHANGED")
  }, [customerCandys])

  return (
    <CustomerCandyContext.Provider value={{
      customerCandys, addCustomerCandy
    }}>
      {props.children}
    </CustomerCandyContext.Provider>
  )
}