import React from "react"
import ReactLogo from "../reactjs-icon.png"

export default function Navbar(){
    return (
        <nav className="navbar">
            <img src={ReactLogo} alt="" className="nav-icon"/>
            <h3 className="nav-icon-text">ReactFacts</h3>
            <h4 className="blurp">React Course - Project 1</h4>
        </nav>
    )
}