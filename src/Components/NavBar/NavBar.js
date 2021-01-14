import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import haileyheader from "./haileyHeader1-03.png"

export const NavBar = props => {
    return (
        <>
        <img className="headerimg" src={haileyheader} height="auto" width="400px"/><br/>
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
                    <a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vTs8DiuF7D_imsb3ocNH3lC4OFwTJ0a1Qg9iLEZVSI9Wxwtq6tURvflfs9rb1ObMffm2-BZmMKnm7Ul/pub">
                    <h4 className="navtext">Resume</h4>
                    </a>
                </li>
                </div>
            </ul>

        </>
    );
};