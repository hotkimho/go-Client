import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Components/Auth/Login/Login';
import Auth from './Components/Auth/Auth';
import {BrowserRouter} from "react-router-dom";
import {Routes ,Route} from "react-router-dom";
import Signup from "./Components/Auth/SignUp/Signup";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
