const CLIENT_ID = 'YOUR_APP_CLIENT_ID';
const APP_URL = 'YOUR_APP_URL';
const STRAVA_REDIRECT =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : APP_URL;

export const CONSTANTS = {
  STRAVA_AUTH_LINK: `http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${STRAVA_REDIRECT}/auth&approval_prompt=auto&scope=activity:read_all,activity:write,profile:read_all`,
  STRAVA_ORANGE: '#fc5200',
  APP_URL,
};
