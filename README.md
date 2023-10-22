## This is a template to integrate with the Strava V3 API

It is intended to reduce the starting energy to get a third party app started and creating value for Strava users.

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

4. Setup a free mongodb instance https://www.mongodb.com/cloud/atlas/register or implement your own database and follow the steps there to get your MONGO_URL for the .env
5. Run npm i
6. run npm build
7. run npm start to run your app locally to make sure everything works as intended
8. Push to a remote git repo so you can deploy somewhere

### Deploy -

I personally recommend using railway.app which costs $5/month to get started and makes everything extremely easy including setting up a production mongodb database.
Once you have a deployed the service make sure to set your environment variables to the deployed app endpoint

### Architecture -

The server folder holds the backend code and is written in typescript.
The src folder is the frontend react app
