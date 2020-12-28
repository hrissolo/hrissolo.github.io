import React from "react";
import { Contact } from "../Contact/Contact";
// import { Link } from "react-router-dom";
import "./About.css"

export const About = props => {
    return (
        <>
            <div className="aboutSection">
                <h2>About Me!</h2>
                    <p>I find fulfillment in problem solving, working on a team, and being presented with new challenges. My background in Multimedia Design has given me the confidence to reliably produce detail oriented, well planned and curated content. I’m excited to enter a field with plenty of potential to learn more. I am currently attending Nashville Software School and will graduate from the bootcamp program in February 2021.</p>
            </div>

            <div className="techStack">
                <h2>Tech Stack</h2>
                <p><ul><li>Javascript</li>
                    <li>HTML5 + CSS3 </li>
                    <li>React </li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe InDesign</li>
                    <li>Git & Github </li>
                    <li>Sass </li>
                    <li>Visual Studio Code</li>
                    <li>Firebase</li>
                </ul></p>
            </div>
        </>
    );
};