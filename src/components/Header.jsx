import React from "react"
import logo from "../media/logo.png"

export default function Header() {
    return (
        <header className="nav-container">
            <nav className="navigation">
                <img src={logo} alt="Marvel Logo" />
                <ul className="nav-links">
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV Shows</a></li>
                    <li><a href="#">Characters</a></li>
                </ul>
            </nav>
        </header>
    )
}
