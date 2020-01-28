import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navbar">
            <div className="navHeader">
                <h3>KANDY KORNER</h3>
            </div>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/productTypes">Product Types</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/order">My order</Link>
            </li>
            {
                localStorage.getItem("kandy_customer")
                    ? <li className="navbar__item">
                        <Link className="navbar__link"
                            to=""
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("kandy_customer")
                                props.history.push("/")
                            }}
                        >Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}