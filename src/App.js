//same setup as ReptiRomance ApplicationViews.js

import React from "react";
import { Route } from "react-router-dom"
import { Work } from "./Components/Work/Work"
import { About } from "./Components/About/About"
import { Contact } from "./Components/Contact/Contact"
//import all of the providers /lists + forms 

export const ApplicationViews = props => {
    return (
        <div>
            <Route exact path='/'>
                <Work/>
            </Route>

            <Route exact path='/about'>
                <About/>
            </Route>
            
            <Route exact path='/contact'>
                <Contact/>
            </Route>
            
            <Route exact path='/resume'>
            </Route>
        </div>
    )
}