import React, { useEffect } from 'react'

export const LoginSignout = () => {
  const gapi = window.gapi;
  const google = window.google;

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
  const SCOPES = "https://www.googleapis.com/auth/calendar";

  const accessToken = localStorage.getItem('access_token');
  const expiresIn = localStorage.getItem('expires_in');

  let gapiInited = false, gisInited = false, tokenClient;

  useEffect(() => {
    const loadDependencies = () => {
        gapiLoaded();
        gisLoaded();
    };
    loadDependencies();
}, [gapiLoaded, gisLoaded]);



  function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
  }

  async function initializeGapiClient() {
    try {
      await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
      });
      gapiInited = true;

      if (accessToken && expiresIn) {
        gapi.client.setToken({
          access_token: accessToken,
          expires_in: expiresIn,
        });
        listUpcomingEvents();
      }
    } catch (err) {
      console.error('Error initializing GAPI client:', err);
    }
  }

  function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    });

    gisInited = true;
  }

  function handleAuthClick() {
    // Implementation remains the same
  }

  function handleSignoutClick() {
    // Implementation remains the same
  }

  async function listUpcomingEvents() {
    let response;
    try {
      const request = {
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime',
      };
      response = await gapi.client.calendar.events.list(request);
    } catch (err) {
      if (err.result && err.result.error && err.result.error.message) {
        if (err.result.error.message === 'The specified time range is empty.') {
          console.error('Error: The specified time range is empty.');
        } else {
          console.error('Error:', err.result.error.message);
        }
      } else {
        console.error('Error:', err);
      }
      return;
    }

    const events = response.result.items;
    if (!events || events.length === 0) {
      document.getElementById('content').innerText = 'No events found.';
      return;
    }
    const output = events.reduce(
      (str, event) => `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,'Events:\n');
    document.getElementById('content').innerText = output;
  }
  
  function addManualEvent(){
    // Implementation remains the same
  }

  return (
    <div>
      <button id="authorize_button" hidden={accessToken && expiresIn} onClick={handleAuthClick}>Authorize</button>
      <button id="signout_button" hidden={!accessToken && !expiresIn}   onClick={handleSignoutClick}>Sign Out</button>
      <button id='add_manual_event' hidden={!accessToken && !expiresIn} onClick={addManualEvent}>Add Event</button>
      <pre id="content" style={{ whiteSpace: 'pre-wrap' }}></pre>
    </div>
  )
}
