import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './SignUp/Signup';

function Auth() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default Auth;
