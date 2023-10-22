### This is a template to integrate with the Strava V3 API

It is intended to reduce the starting energy to get a third party app started and creating value for Strava users.

## Steps to get started -

1. Sign in to strava.com -> Settings -> My API Application
2. Set up your app if necessary and retrieve your "Client ID" and "Client Secret"
3. Create a .env file at the top level of your directory with the following values
   REACT_APP_STRAVA_REDIRECT=http://localhost:3010/auth
   REACT_APP_CLIENT_ID=_REPLACE_WITH_STRAVA_CLIENT_ID_
   REACT_APP_API_URL=http://localhost:3010/users
   STRAVA_CLIENT_ID=_REPLACE_WIHT_STRAVA_CLIENT_ID_
   STRAVA_CLIENT_SECRET=_REPLACE_WITH_STRAVA_CLIENT_SECRET_
   STRAVA_SUBSCRIBE_TOKEN=_REPLACE_WITH_STRAVA_SUBSCRIBE_TOKEN_CAN_BE_ANYTHING_
   MONGO_URL=_REPLACE_WITH_MONGO_URI_
   PORT=3010
4. uncomment lines 77 - 81 in your .env file so your secrets are not pushed to git
5. Setup a free mongodb instance https://www.mongodb.com/cloud/atlas/register or implement your own database and follow the steps there to get your MONGO_URL for the .env
6. Run npm i
7. run npm build
8. run npm start to run your app locally to make sure everything works as intended
9. Push to a remote git repo so you can deploy somewhere

## Deploy -

I personally recommend using railway.app which costs $5/month to get started and makes everything extremely easy including setting up a production mongodb database.
Once you have a deployed the service make sure to set your environment variables to the deployed

## Architecture -

The server folder holds the backend code and is written in typescript.
The src folder is the frontend react app
