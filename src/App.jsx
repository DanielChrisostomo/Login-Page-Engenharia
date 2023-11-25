import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Home from './Login/Home';
import LoginCreate from './Login/LoginCreate';
import { UserStorage } from './UserContext';
import ProtectedRoute from './Login/ProtectedRoute';

const App = () => {
  return (
    <HashRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/create" element={<LoginCreate />} />
        </Routes>
      </UserStorage>
    </HashRouter>
  );
};

export default App;
