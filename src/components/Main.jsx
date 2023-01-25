import React from "react"
import ReactLogoBg from "../reactjs-icon-large.png"


export default function Main(){
    return (
        <main 
            className="main"
            style={{
                backgroundImage: `url(${ReactLogoBg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 75%"
                }} >
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}