import React from "react"
import logo from "../media/logo.png"

export default function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="Marvel Logo" />
                <ul className="nav-links">
                    <li><a href="#">More</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
