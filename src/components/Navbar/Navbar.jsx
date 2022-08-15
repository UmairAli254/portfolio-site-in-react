import React from 'react'
import "./Navbar.css";
import { Link } from "react-scroll"

export default function Navbar() {
    return (
        <div className="navbar" id='navbar'>
            <div className="nav-left">
                <Link
                    to="navbar"
                    spy={true}
                    smooth={true}
                    activeClass="activeClass"
                > <div className="nav-left-name">Umair</div> </Link>


                <Link
                    to="Portfolio-Section"
                    spy={true}
                    smooth={true}
                    activeClass="activeClass"
                ><li className='portfolioLinkRightSide'>Portfolio</li></Link>



            </div>
            <div className="nav-right">
                <div className="nav-right-list">
                    <ul>
                        <Link
                            to="navbar"
                            spy={true}
                            smooth={true}
                            activeClass="activeClass"
                        ><li>Home</li></Link>
                        <Link
                            to="ServicesDiv"
                            spy={true}
                            smooth={true}
                            activeClass="activeClass"
                        ><li>Services</li></Link>
                        <Link
                            to="experienceSection"
                            spy={true}
                            smooth={true}
                            activeClass="activeClass"
                        ><li>Experience</li></Link>
                        <Link
                            to="Portfolio-Section"
                            spy={true}
                            smooth={true}
                            activeClass="activeClass"
                        ><li>Portfolio</li></Link>
                        <Link
                            to="Testimonial"
                            spy={true}
                            smooth={true}
                            activeClass="activeClass"
                        ><li>Testimonial</li></Link>

                    </ul>
                </div>
                <div className="nav-right-btn-div">
                    <Link
                        to="Contact-Section"
                        spy={true}
                        smooth={true}
                        activeClass="activeClass"
                    ><button className='nav-right-btn button'>Contact Me</button></Link>
                </div>
            </div>
        </div>
    )
}
