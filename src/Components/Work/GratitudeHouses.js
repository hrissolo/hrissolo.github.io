import React from "react";
import ERD from "./work-imgs/ERD-gratitude.png"
import "./Work.css"

export const GHousesCaseStudy = props => {
    return (
        <>
            <div className="caseStudy">
                <h2>Gratitude Houses</h2>
                <b>Gratitude Houses Case Study</b>
                    <p>
                    <a target="_blank" className="githubLink" href="https://github.com/hrissolo/gratitude"><b>Github Repository</b></a>
                    </p>
                    <p>
                    <b>Overview: </b><br/>
                    The Rissolo’s business requires staying organized. 
                    The Gratitude Houses app is used for keeping track of residents, applications, intake dates and which houses and rooms the residents stay in. 
                    Sara pays for a <b className="highlightText">healthcare app</b> which she finds very confusing and includes many unused, useless components. 
                    Sara explained to me the few parts of the current app that she does use and important elements that she would like to easily navigate to. 
                    </p>
                    <p>
                    <b>Problem Statement: </b><br/>
                    How might we <b className="highlightText">redesign & customize</b> The Gratitude House app according to the users needs of simpler navigation and accessibility - 
                    while also handling and displaying a ton of data.
                    </p>
                    <p>
                    <b>Users & Audience: </b><br/>
                    Sara & Mike Rissolo - The Gratitude House owners will be the primary users of this app. 
                    Anyone with a healthcare business keeping track of residents’ information could find an app like this useful. 
                    </p>
                    <b>ERD: </b><br/>
                    <img className="WORKimgs" src={ERD} width="75%"></img><br/>
                    <b>Outline: </b><br/>
                    <a target="_blank" className="githubLink" href="https://www.figma.com/file/AC6NmSo1VKLzRZZC9XsCNA/Gratitude-House?node-id=0%3A1"><b>Figma Prototype</b></a>
                    <br/><br/><p>
                    <b>Roles & Responsibilities: </b><br/>
                    I started by clicking around in the current Behave health app that my client uses. 
                    I then began creating an <b className="highlightText">ERD and wireframe</b> considering the information that she wants displayed on the new app. 
                    </p>
                    <p>
                    <b>Scope & Constraint: </b><br/>
                    I planned, designed and created V1 of The Gratitude House app in just three weeks. 
                    This was my final capstone at Nashville Software School to be presented on Demo Day. 
                    </p>
                    <p>
                    <b>Process: </b><br/>
                    After planning, sharing my prototype mock-up with my client for user testing, I got to work with building the database. 
                    A lot of the planning revolved around thinking of how I can sort the residents according to:<br/> 
                    • houses and rooms, <br/>• applying applicants, <br/>• accepted & denied applicants, <br/>• and alumni. <br/>
                    Every person has time stamps and keys for each stage of residency - but depending on the component, 
                    this information is <b className="highlightText">displayed on the front end</b> in different ways. 
                    </p>
                    <p>
                    <b>Outcome & Results: </b><br/>
                    The Gratitude House app now displays resident’s information in a more direct, easy to read & navigate through way. 
                    The app also includes a resident application form which saves right to the database, unlike the app my client used before. 
                    This application turned into a huge project - there is much more I’d like to add & work on for V2. 
                    I learned a lot about how to <b className="highlightText">accurately represent & arrange information</b> while handling an intricate database. 
                    </p>
            </div>
        </>
    );
};