# Strava V3 API Template

By following the steps below you can get started with a service that has all the components you need (frontend and backend) to access data from and update Strava activities.

## Steps to get started -

1. Sign in to strava.com -> Settings -> My API Application
2. Set up your app if necessary and retrieve your "Client ID" and "Client Secret"
3. Create a .env file at the top level of your directory with the following values

```
   REACT_APP_STRAVA_REDIRECT=http://localhost:3010/auth
   REACT_APP_CLIENT_ID=REPLACE_WITH_STRAVA_CLIENT_ID
   REACT_APP_API_URL=http://localhost:3010/users
   STRAVA_CLIENT_ID=REPLACE_WITH_STRAVA_CLIENT_ID
   STRAVA_CLIENT_SECRET=REPLACE_WITH_STRAVA_CLIENT_SECRET
   STRAVA_SUBSCRIBE_TOKEN=REPLACE_WITH_STRAVA_SUBSCRIBE_TOKEN_CAN_BE_ANYTHING
   MONGO_URL=REPLACE_WITH_MONGO_URI
   PORT=3010
```

4. Setup a free mongodb instance https://www.mongodb.com/cloud/atlas/register or implement your own database and follow the steps there to get your MONGO_URL for the .env (I used a free instance for dev/local and an instance attached to my railway deployment for prod)
5. Run npm i
6. run npm build
7. run npm start to run your app locally to make sure everything works as intended
8. Push to a remote git repo so you can deploy somewhere
9. Deploy service (recommendation below)
10. Integrate with your app through your front end. Navigate to your deployed site and go through the auth process with your own account.
11. Initiate your webhook to start receiving activities. Make a POST request to `https://www.strava.com/api/v3/push_subscriptions?client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&callback_url=YOUR_DEPLOYED_APP_URL/stravahook&verify_token=STRAVA_SUBSCRIBE_TOKEN`

### Deploy -

I recommend using [railway](railway.app) which is reasonably priced and has an amazing interface. It makes it easy to deploy your service, set up a public endpoint and deploy a mongodb server.
Once you have a deployed the service make sure to set your environment variables to the deployed app endpoint

### Architecture -

The `server` folder holds the backend code and is written in typescript. <br />  The `src` folder holds the frontend react app code


