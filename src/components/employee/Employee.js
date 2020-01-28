import React from "react"
import "./Employee.css"

export default ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <address className="employee__name">works at: {location.name}</address>
        <address className="employee__manager">{employee.manager ? "Manager" : "associate"}</address>
        <address className="employee__fullTime">{employee.fullTime ? "works Full Time" : "works part time"}</address>
        <address className="employee__hourlyRate">Salary: ${employee.hourlyRate}/hour</address>
    </section>
)