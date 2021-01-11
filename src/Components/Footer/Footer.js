import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
import iconGithub from "./icons/icon-github.png"
import iconGmail from "./icons/icon-gmail.png"
import iconLinkedin from "./icons/icon-linkedin.png"

export const Footer = props => {
    return (
        <>
            <div className="footerSection">
                <section className="iconz">
                <a target="_blank" href="https://github.com/hrissolo"><img className="footerIcon" src={iconGithub} alt="Github"/></a>
                <a target="_blank" href="mailto:hrissolo@gmail.com?"><img className="footerIcon" src={iconGmail} alt="Gmail"/></a>
                <a target="_blank" href="https://www.linkedin.com/in/haileyrissolo/"><img className="footerIcon" src={iconLinkedin} alt="LinkedIn"/></a>
                </section>
                <section className="footerText">Hailey Rissolo 2020 | hrissolo@gmail.com 
                </section>
            </div>
        </>
    );
};