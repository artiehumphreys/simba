import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './pages/Loginpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </Router>
  );
}

export default App;