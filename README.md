# Strava V3 API Template

By following the steps below you can get started with a service that has all the pieces you need (frontend and backend) to access data from and update Strava activities throught the public [Strava API](https://developers.strava.com/docs/reference/).

## Steps to get started -

1. Sign in to strava.com -> Settings -> My API Application (https://www.strava.com/settings/api)
2. Set up your app and retrieve your "Client ID" and "Client Secret"
3. Create an .env file at the top level of your directory with the following values

```
   STRAVA_CLIENT_ID=REPLACE_WITH_STRAVA_CLIENT_ID
   STRAVA_CLIENT_SECRET=REPLACE_WITH_STRAVA_CLIENT_SECRET
   STRAVA_SUBSCRIBE_TOKEN=REPLACE_WITH_STRAVA_SUBSCRIBE_TOKEN_CAN_BE_ANYTHING
   MONGO_URL=REPLACE_WITH_MONGO_URI
   PORT=3010
```

4. Setup a free mongodb instance https://www.mongodb.com/cloud/atlas/register or implement your own database and follow the steps there to get your MONGO_URL for the .env (I used a free instance for dev/local and an instance attached to my railway deployment for prod)
5. Run `npm i`
6. Run `npm build`
7. Run `npm start` to run your app locally to make sure everything works as intended
8. Replace all instances of "YOUR_APP" with your app specific details
9. Push to a remote git repo so you can deploy somewhere
10. Deploy service (recommendation below)
11. Integrate your Strava account with your app through your front end. To do this, navigate to your deployed site and go through the auth process with your own account.
12. Initiate your webhook to start receiving activities. To do this, make a POST request to `https://www.strava.com/api/v3/push_subscriptions?client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&callback_url=YOUR_DEPLOYED_APP_URL/stravahook&verify_token=STRAVA_SUBSCRIBE_TOKEN` <br />
    (make sure to match your subscribe token to the one in your `.env` file)

### Deploy -

I recommend using [railway](railway.app) which is reasonably priced and has an amazing interface. It makes it easy to deploy your service, set up a public endpoint and deploy a mongodb server with a few clicks.
Once you have a deployed the service make sure to set your environment variables to the deployed app endpoint.

### Architecture -

This repo is set up as a monolith (backend and frontend in one repo) for simplicity. <br /> The `server` folder holds the backend code and is written in typescript. <br /> The `src` folder holds the frontend react app
<br /> The compiled code for the server is outputted to `dist` and the React App code is outputted to `build`. <br /> The monolith works by listening for requests to the endpoints we setup e.g. /auth and /users and if it DOES NOT match any endpoints it responds with the React App itself.

### Scripts -

This project uses Typescript to help define what you can access from Strava activities and Webhook requests. Because of this and the fact the project is a monolith, it adds some complexity to the scripts in `package.json`

```
  "scripts": {
    "start": "node dist/index.js", // Start the project. ***Make sure to run the build command first***
    "build": "react-scripts build && tsc", // Builds React App and compiles TS server code to JS to dist and build folder respectively
    "test": "jest",
    "build:server": "tsc", // compiles TS server code to JS to build folder
    "dev:server": "ts-node-dev --respawn --transpile-only server/index.ts", // Auto reload to changes for server code
    "start:client": "react-scripts start", // Start React App
    "test:client": "react-scripts test",
    "dev:client": "react-scripts start",
    "build:client": "react-scripts build" // Build React App and output to dist folder
  },
```
