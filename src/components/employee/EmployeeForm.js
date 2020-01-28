import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"

export default props => {
  const { addEmployee } = useContext(EmployeeContext)
  const { locations } = useContext(LocationContext)
  const employeeName = useRef("") 
  const employeeLocation = useRef(0)
  const rate = useRef(0)
  const manager = useRef(Boolean)
  const fullTime = useRef(Boolean)

  const constructNewEmployee = () => {
    const locationId = parseInt(employeeLocation.current.value)
    const hourlyRate = parseInt(rate.current.value)
  
    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      addEmployee({
        name: employeeName.current.value,
        locationId: locationId,
        hourlyrate: hourlyRate,
        manager: manager.current.checked,
        fullTime: fullTime.current.checked
      }).then(props.history.push("/employees"))
    } 
  }

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
        <div className="form-group">
          <label htmlFor="employeeName">Employee name</label>
          <input
            type="text"
            id="employeeName"
            ref={employeeName}
            required
            autoFocus
            className="form-control"
            placeholder="Employee name"
        />
        </div>
      <div className="form-group">
        <label htmlFor="location">Assign to location</label>
        <select
          defaultValue=""
          name="location"
          ref={employeeLocation}
          id="employeeLocation"
          className="form-control"
        >
          <option value="0">Select a location</option>
          {locations.map(e => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="hourlyRate">Employee's hourly rate</label>
        <input
          type="text"
          id="hourlyRate"
          ref={rate}
          required
          autoFocus
          className="form-control"
          placeholder="$$$$$"
      />

      </div>
      <div className="form-group">
        <label htmlFor="manager">Are they a manager?</label>
        <input
          type="checkbox"
          id="manager"
          ref={manager}
          required
          autoFocus
          className="form-control"
          defaultChecked = {false}
          />
      </div>

      <div className="form-group">
        <label htmlFor="fullTime">Are they full time?</label>
        <input
          type="checkbox"
          id="fullTime"
          ref={fullTime}
          required
          autoFocus
          className="form-control"
          defaultChecked = {false}
      />
      </div>



      <button type="submit"
        onClick={
          evt => {
            evt.preventDefault(); // Prevent browser from submitting the form
            constructNewEmployee();
          }
        }
        className="btn btn-primary">
        Save Employee
      </button>
    </form>
  )
}