import React from "react";
import { Link } from "react-router-dom";
import work1 from "./work-imgs/ReptiRomance.png"
import work2 from "./work-imgs/GHouse-home.png"
import "./Work.css"

export const Work = props => {
    return (
        <>
            <div className="workSection">
                <h2>Recent Work</h2>
                <section className="workCards">

                    <div className="workCard">
                        <Link to="/gratitude">
                        <img className="workBox" src={work2} wrapped ui={false}></img>
                        </Link>
                        <div className="title">Gratitude Houses</div>
                        <p>February 2021 | Final Capstone <br/>
                        <Link to="/gratitude" >Read more!</Link></p>
                    </div>

                    <div className="workCard">
                        <Link to="/reptiromance">
                        <img className="workBox" src={work1} wrapped ui={false}></img>
                        </Link>
                        <div className="title">Repti-Romance</div>
                        <p>October 2020 | Midway Capstone <br/>
                        <Link to="/reptiromance" >Read more!</Link></p>
                    </div>
                    

                </section>
            </div>
        </>
    );
};