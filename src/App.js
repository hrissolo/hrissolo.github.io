//same setup as ReptiRomance ApplicationViews.js

import React from "react";
import { Route } from "react-router-dom"
// import { ContactSection } from "./Contact/Contact";
import { NavBar } from "./Components/NavBar/NavBar"

//import all of the providers /lists + forms 

export const ApplicationViews = props => {
    return (
        <div>
            <Route exact path='/'>
            </Route>

            <Route exact path='/about'>
            </Route>
            
            <Route exact path='/contact'>
            </Route>
            
            <Route exact path='/resume'>
            </Route>
        </div>
    )
}