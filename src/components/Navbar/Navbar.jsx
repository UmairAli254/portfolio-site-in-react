import React from 'react'
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-left">
                <div className="nav-left-name">Umair</div>
                <span>Toggle</span>
            </div>
            <div className="nav-right">
                <div className="nav-right-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div className="nav-right-btn-div">
                    <button className='nav-right-btn button'>Contact Me</button>
                </div>
            </div>
        </div>
    )
}
