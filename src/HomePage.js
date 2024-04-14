import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <img src="/hrms.jpeg" alt="HR Management System" style={styles.image} />
      <h1>Welcome to Our HR Management System</h1>
      <p style={styles.description}>
        Here you can manage your human resources efficiently and effectively.
        Sign up or log in to get started!
      </p>
      <div style={styles.options}>
        <button style={styles.button}>Open App</button>
        <button style={styles.button}>Learn More</button>
        {/* Add more options/buttons as needed */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '50px auto',
    maxWidth: '600px',
  },
  image: {
    maxWidth: '100%',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  options: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
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
