import React from "react"
import {Route, Redirect} from "react-router-dom"
import {ApplicationViews} from "../App"
import { Footer } from "./Footer/Footer"
import {NavBar} from "./NavBar/NavBar"

export const HaileyPortfolio = () => (
            <>
            <NavBar />
              <ApplicationViews />
            <Footer />
            </>
  );