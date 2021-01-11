import React from "react";
import { Link } from "react-router-dom";
import work1 from "./work-imgs/ReptiRomance.png"

import "./Work.css"
import {Card, Icon, Image} from 'semantic-ui-react'

export const Work = props => {
    return (
        <>
            <div className="workSection">
                <h2>Recent Work</h2>
                <div className="workCards">
                    <Card>
                    <Image className="workBox" src={work1} wrapped ui={false}></Image>
                        <Card.Content>
                            <Card.Header>Repti-Romance</Card.Header>
                            <Card.Description>October 2020 Capstone</Card.Description>
                            <Link to="/reptiromance">Read more!</Link>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        </>
    );
};