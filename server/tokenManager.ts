import axios from 'axios';

const BASE_URL = 'https://www.strava.com/api/v3/oauth/token';

export const getToken = async (
  refreshToken: string,
): Promise<string | null> => {
  try {
    const tokenResponse = await axios.post(
      `${BASE_URL}?client_id=${process.env.STRAVA_CLIENT_ID}&client_secret=${process.env.STRAVA_CLIENT_SECRET}&refresh_token=${refreshToken}&grant_type=refresh_token`,
    );
    return tokenResponse?.data?.access_token;
  } catch (error) {
    console.error('Refresh token failed', error);
    return null;
  }
};
