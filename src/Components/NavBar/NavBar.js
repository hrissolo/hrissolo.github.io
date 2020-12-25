import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import haileyheader from "./haileyHeader.png"

export const NavBar = props => {
    return (
        <>
        <img src={haileyheader} height="auto" width="400px"/><br/>
            <ul className="navbar">
                <div className="nav-choices">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/">
                        <h4 className="navtext">Work</h4>
                 </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/about">
                       <h4 className="navtext">About</h4>
                </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/contact">
                    <h4 className="navtext">Contact</h4>
                </Link>
                </li>
                <li className="navbar__item">
                    {/* <Link className="navbar__link" to="/resume-pdf"> */}
                    <h4 className="navtext">Resume</h4>
                {/* </Link> */}
                </li>
                </div>
            </ul>

        </>
    );
};