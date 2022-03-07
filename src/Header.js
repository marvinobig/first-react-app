import React from "react"

export default function Header() {
    return (
        <header>
            <nav>
                <img src="../src/media/logo.png" alt="Marvel Logo" />
                <ul className="nav-links">
                    <li>More</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
