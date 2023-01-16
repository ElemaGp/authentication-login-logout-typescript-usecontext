import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import { useContext } from "react";
import { AuthContext } from './components/authContext/AuthContext';

function App() {

  const {user} = useContext(AuthContext);

  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={user ? <Home /> : <Login />} />
              <Route path="signup" element={user ? <Home /> : <Signup />} />
              <Route path="login" element={user ? <Home /> : <Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
