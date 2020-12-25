import React from "react"
import {Route, Redirect} from "react-router-dom"
import {ApplicationViews} from "../App"
import {NavBar} from "./NavBar/NavBar"

export const HaileyPortfolio = () => (
            <>
            <NavBar />
              <ApplicationViews />
            </>
  );