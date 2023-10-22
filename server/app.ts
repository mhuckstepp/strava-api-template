import express from 'express';
import { getActivityAndDoStuff } from './activityHandler';
import { WebhookRequest } from './types';
import path from 'path';
import { getUserById, updateUser, createUser } from './db';

const BASE_URL = 'https://www.strava.com/api/v3/oauth/token';

const app = express();
app.use(express.json());

app.get('/health', (_, response) => {
  console.log('Health check');
  response.sendStatus(200);
});

app.post('/users', async function (req, res) {
  const { stravaCode } = req.body;

  if (!stravaCode) {
    return res
      .status(400)
      .json({ error: "Missing 'stravaCode' in request body" });
  }

  const url = `${BASE_URL}?client_id=${process.env.STRAVA_CLIENT_ID}&client_secret=${process.env.STRAVA_CLIENT_SECRET}&code=${stravaCode}&grant_type=authorization_code`;
  const response = await fetch(url, { method: 'POST' });

  const { athlete, access_token, refresh_token, expires_at } =
    await response.json();

  if (!access_token) {
    return res.status(400).json({
      error: 'Error getting access token from Strava, please try again',
    });
  }

  const latestFromStrava = {
    firstName: athlete.firstname,
    lastName: athlete.lastname,
    city: athlete.city,
    strAuthToken: access_token,
    strRefreshToken: refresh_token,
    strAuthExpiresAt: expires_at,
    strUserId: athlete.id,
    weight: athlete.weight,
    sex: athlete.sex === 'F' ? 'female' : 'male',
    profileImage: athlete.profile,
  };

  try {
    const user = await getUserById(athlete.id);

    if (user) {
      await updateUser({
        ...user,
        ...latestFromStrava,
      });
    } else {
      await createUser(latestFromStrava);
    }
    res.json({
      stravaUserId: athlete.id,
      firstName: latestFromStrava.firstName,
      lastName: latestFromStrava.lastName,
    });
  } catch (error) {
    console.error('Could not retrieve user when adding user');
    console.error(error);
    res.status(500).json({ error: 'Could not retrieve user' });
  }
});

app.post('/stravahook', async function (req: WebhookRequest, res) {
  try {
    console.log('Strava webhook hook called, request body:', req.body);
    getActivityAndDoStuff(req);
  } catch (error) {
    console.log(error);
  }
  res.sendStatus(200);
});

app.get('/stravahook', async function (req, res) {
  try {
    console.log('Subscription start hook called');
    const token = req.query['hub.verify_token'];
    if (token === process.env.STRAVA_SUBSCRIBE_TOKEN) {
      res.status(200).json({ 'hub.challenge': req.query['hub.challenge'] });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: 'Bad Token',
    });
  }
});

// If the request does not match any of the above routes
// for api endpoints, send the React app
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', express.static(path.join(__dirname, '../build')));

export default app;
