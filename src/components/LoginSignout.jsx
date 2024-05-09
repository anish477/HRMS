import React from 'react';
import googleLogo from './google-logo.jpeg';

export const LoginSignout = () => {
  const handleGoogleCalendarLink = () => {
    // Add code to handle linking to Google Calendar
    window.open('https://calendar.google.com/', '_blank');
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'relative',
  };

  const backgroundImgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const buttonContainerStyle = {
    zIndex: 1,
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '20px',
    backgroundColor: '#f28107',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
  };

  return (
    <div style={containerStyle}>
      <img src={googleLogo} alt="Google Logo" style={backgroundImgStyle} />
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={handleGoogleCalendarLink}>
          Holidays and Events
        </button>
      </div>
    </div>
  );
};
