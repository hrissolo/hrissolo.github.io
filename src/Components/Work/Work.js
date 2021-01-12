import React from "react";
import { Link } from "react-router-dom";
import work1 from "./work-imgs/ReptiRomance.png"
import "./Work.css"

export const Work = props => {
    return (
        <>
            <div className="workSection">
                <h2>Recent Work</h2>
                <section className="workCards">
                    <div className="workCard1">
                        <Link to="/reptiromance">
                        <img className="workBox" src={work1} wrapped ui={false}></img>
                        </Link>
                        <div className="title">Repti-Romance</div>
                        <p>October 2020 | Capstone <br/>
                        <Link to="/reptiromance" >Read more!</Link></p>
                    </div>
                    
                </section>
            </div>
        </>
    );
};