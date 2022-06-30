import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Auth/SignUp/Signup';
import React from 'react';
import Header from './Components/Header';
import Login from './Components/Auth/Login/Login';
import CreatePost from './Components/board/Post/CreatePost';
import axios from 'axios';
import Board from './Components/board/Board';
import Post from './Components/board/Post/Post';
import EditPost from './Components/board/Post/EditPost';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/board/edit/:id/post' element={<EditPost />} />
        <Route path='/board/remove/:id/post' element={<EditPost />} />
        <Route path='/board/post' element={<CreatePost />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/:id/post' element={<Post />} />
      </Routes>
    </div>
  );
}

axios.defaults.withCredentials = true;
export default App;
