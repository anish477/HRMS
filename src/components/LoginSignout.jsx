import React, { useEffect } from 'react'
import googleLogo from './google-logo.jpeg';


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
    //const expiryTime = new Date().getTime() + expiresIn * 1000;
    gapiLoaded()
    gisLoaded()
  }, [])

  function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
  }

  async function initializeGapiClient() {
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
  }

  function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    });

    gisInited = true;
  }

  //Enables user interaction after all libraries are loaded.

  function handleAuthClick() {
    tokenClient.callback = async (resp) => {
      if (resp.error) {
        throw (resp);
      }
      await listUpcomingEvents();
      const { access_token, expires_in } = gapi.client.getToken();
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('expires_in', expires_in)
    };

    if (!(accessToken && expiresIn)) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: '' });
    }
  }

  //Sign out the user upon button click.

  function handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken('');
      localStorage.clear();
    }
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
      document.getElementById('content').innerText = err.message;
      return;
    }

    const events = response.result.items;
    if (!events || events.length === 0) {
      document.getElementById('content').innerText = 'No events found.';
      return;
    }
    // Flatten to string to display
    const output = events.reduce(
      (str, event) => `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,'Events:\n');
    document.getElementById('content').innerText = output;
  }
  
  function addManualEvent(){
    var event = {
      'kind': 'calendar#event',
      'summary': 'Event 1',
      'location': 'Herald College, Kathmandu',
      'description': 'I am just checking this time.',
      'start': {
        'dateTime': '2024-05-08T16:55:00.000Z',
        'timeZone': 'UTC'
      },
      'end': {
        'dateTime': '2024-05-08T17:15:00.000Z',
        'timeZone': 'UTC'
      },
      'recurrence': [
        'RRULE:FREQ=DAILY;COUNT=1'
      ],
      'attendees': [
        {'email': 'tarawebber29@gmail.com','responseStatus':'needsAction'},
      ],
      'reminders': {
        'useDefault': true,
      },
      "guestsCanSeeOtherGuests": true,
    }

      var request = gapi.client.calendar.events.insert({'calendarId': 'primary','resource': event,'sendUpdates': 'all'});
      request.execute((event)=>{
          console.log(event)
          window.open(event.htmlLink)
      },(error)=>{
        console.error(error);
      });
  }
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <img src={googleLogo} alt="Google Logo" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      
      <div style={{ position: 'fixed', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
        <button id="authorize_button" hidden={accessToken && expiresIn} onClick={handleAuthClick} style={{ marginRight: '10px', marginBottom: '20px', padding: '10px 20px', fontSize: '16px',backgroundColor: 'black',
    color: 'white'}}>Authorize</button>
        <button id="signout_button" hidden={!accessToken && !expiresIn} onClick={handleSignoutClick} style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px' }}>Sign Out</button>
        <button id='add_manual_event' hidden={!accessToken && !expiresIn} onClick={addManualEvent} style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px' }}>Add Event</button>
      </div>
  
      <pre id="content" style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'pre-wrap', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 1 }}></pre>
    </div>
  )  
}  