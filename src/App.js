import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Loginpage from './pages/Loginpage';

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
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  }
};

export default App;