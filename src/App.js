import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import HomePage from './pages/HomePage';
import PlaylistPage from './pages/PlaylistPage';

//TODO: Implement login logic
//Use protected routes.
const isAuthenticated = () => {
  return false;
};

const App = () => {
  if (!isAuthenticated()) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
          <Route path = "/" element={<HomePage />} exact />
          <Route path="/playlist/:id" element={<PlaylistPage />} />
        </Routes>
      </Router>
    );
  }
};

export default App;