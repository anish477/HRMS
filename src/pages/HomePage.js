import React from 'react';
import { useHistory } from 'react-router-dom'; 

const HomePage = () => {
  const history = useHistory(); 
  
  const handleOpenApp = () => {
    history.push('/login'); 
  };
  
  return (
    <div style={styles.container}>
      <h1>Welcome to Our HR Management System</h1>
      <p style={styles.description}>
        Here you can manage your human resources efficiently and effectively.
        Sign up or log in to get started!
      </p>
      <button style={styles.button} onClick={handleOpenApp}>Open App</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '50px auto',
    maxWidth: '600px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default HomePage;
