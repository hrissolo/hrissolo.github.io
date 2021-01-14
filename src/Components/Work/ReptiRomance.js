import React from "react";
import ERD from "./work-imgs/repti-ERD.png"
import outline from "./work-imgs/repti-outline.png"
import papi from "./work-imgs/papi.jpeg"
import "./Work.css"

export const ReptiRomanceCaseStudy = props => {
    return (
        <>
            <div className="caseStudy">
                <h2>Repti-Romance</h2>
                <b>Repti-Romance Case Study</b>
                    <p>
                    <a target="_blank" className="githubLink" href="https://github.com/hrissolo/repti-romance"><b>Github Repository</b></a>
                    </p>
                    <p>
                    <b>Overview: </b><br/>
                    Repti-Romance is a silly tinder-esque messaging & dating app designed for reptilians to meet. 
                    The purpose of this Capstone project was to show that I could <b className="highlightText"> manage fetch calls to an API</b> and implement 
                    <b className="highlightText"> CRUD:</b> create, read, update & delete. 
                    </p>
                    <p>
                    <b>Problem Statement: </b><br/>
                    With the rise of COVID-19, pet reptiles can not depend on their humans to be around forever. 
                    Repti-Romance was created to be launched in 2030 when reptiles will inevitably rule as the main sentient species on Earth. 
                    This app is important for the future of lizard mingling and conversing.
                    </p>
                    <p>
                    <b>Users & Audience: </b><br/>
                    The user is any and all reptiles or amphibians. 
                    We expect that these creatures will have no problem messaging each other without human supervision.  
                    </p>
                    <b>ERD: </b><br/>
                    <img className="reptiWORK" src={ERD} width="75%"></img><br/>
                    <b>Outline: </b><br/>
                    <img className="reptiWORK" src={outline} width="75%"></img>
                    <p>
                    <b>Roles & Responsibilities: </b><br/>
                    I planned, created, designed and built this app solo in two weeks. I began by creating an <br/>
                    • ERD, <br/> • wireframe <br/> • an outline of the data & components. 
                    </p>
                    <p>
                    <b>Scope & Constraint: </b><br/>
                    The biggest constraint I faced was the two week time limit. 
                    I had less than 3 months of formal Javascript instruction and not even two weeks of using React. 
                    This was the first app I created and coded by myself. 
                    </p>
                    <p>
                    <b>Process: </b><br/>
                    I started off by planning out my app. The “matching” component seemed like it would be the trickiest to execute. 
                    <b className="highlightText"> I created a database</b> of reptile users that the logged in lizard could swipe through. 
                    The database includes the name of the reptile, their species, what they’re looking for & their about me bio.  
                    <b className="highlightText"> I considered my users</b> by implementing a magnifying glass when hovering over photos - for the lizards with poor vision. 
                    Saving messages in the database in a way that both matches could view them was a tough challenge and what I spent most time working through.  
                    </p>
                    <p>
                    <b>Outcome & Results: </b><br/>
                    In the end, I learned a lot about javascript, React and my own ability to work through tricky coding problems. 
                    <br/>• I tackled complicated <b className="highlightText"> user-to-user data relationships</b> for the first time. 
                    {/* Users can scroll through potential matches, mutually match and message each other.  */}
                    <br/>• I used CRUD in the messaging component where you can send, edit and delete messages. 
                    {/* In V2 of Repti-Romance, I would create a ‘negative match’ part of the match database. 
                    This is so if the user clicks “pass” instead of “match” the potential match would no longer show up again. 
                    Currently when the user clicks “pass”, the app shows you the next user but would still show who you “passed” on when you refresh the page.  */}
                    </p>
                    <img className="reptiWORK" src={papi} width="50%"></img><br/>
                    <b>My user tester & pet dragon, Papaya </b>
            </div>
        </>
    );
};