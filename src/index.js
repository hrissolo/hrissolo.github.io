import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApplicationViews from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom"
import { HaileyPortfolio } from './Components/Portfolio';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HaileyPortfolio />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
