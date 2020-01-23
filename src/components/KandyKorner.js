import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"

export default () => (
    <>

<h2>Kandy Korner Kombat</h2>
         <small>Yall come on, git some cavities</small>
         <address>
          <div>We really out here</div>
         </address>

         <h2>Locations</h2>
          <LocationProvider>
            <LocationList />
          </LocationProvider>

    </>
)
    