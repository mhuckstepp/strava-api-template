import dotenv from 'dotenv';
import { startClient } from './db';
import app from './app';
dotenv.config();

startClient();

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
