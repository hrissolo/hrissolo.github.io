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
                    <a href="https://docs.google.com/document/d/e/2PACX-1vRBcR7Y_4DEhhWRBD8BQdk9-e6tC125tcsM37sFiaq-PYaxeYPGUWi-1OJms1llvA/pub">
                    <h4 className="navtext">Resume</h4>
                    </a>
                </li>
                </div>
            </ul>

        </>
    );
};