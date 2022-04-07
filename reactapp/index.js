import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

import Router1 from './routes';
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Router1 />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);


reportWebVitals();
