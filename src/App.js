import React from 'react';
import './App.css'; // Import your CSS file if needed
import { LoginSignout } from './components/LoginSignout'; // Import the LoginSignout component

function App() {
  return (
    <div className="App">
      <LoginSignout /> {/* Render the LoginSignout component */}
    </div>
  );
}

export default App;
