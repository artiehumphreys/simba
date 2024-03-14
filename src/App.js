import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Loginpage from './pages/Loginpage';

//TODO: Implement login logic
//Use protected routes.
const isAuthenticated = () => {
  return false;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/" element={!isAuthenticated() ? <Navigate to="/login" /> : <div> Logged in </div>} />
        // TODO: Change this for when user is already logged in
      </Routes>
    </Router>
  );
};

export default App;