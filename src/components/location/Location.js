import React from "react"
import "./Locations.css"

export default ({ location }) => (
  

    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__address">{location.address}</address>
        <address className="location__size">{location.squarefootage} sq ft</address>
        <address className="location__handicap">{location.handicap ? "Wheelchair Accessible" : "Not accessible"}</address>
    </section>
)