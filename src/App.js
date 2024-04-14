import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

import HomePage from './HomePage';
import LoginPage from './LoginPage'; // Import your login/sign-up page component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} /> {/* Define the route for login/sign-up page */}
        {/* Add more routes for other pages if needed */}
      </Routes>
    </Router>
  );
};

export default App;
