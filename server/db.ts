import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { User } from './types';
dotenv.config();

const dbClient = new MongoClient(process.env.MONGO_URL);

export const startClient = async () => {
  await dbClient.connect();
  console.log('DB connected');
};

export const endClient = async () => {
  await dbClient.close();
  console.log('DB disconnected');
};

// *** Update with both your DB and collection name below ***
const userDb = () => dbClient.db('main').collection('users');

export const getUserById = async (id: Number): Promise<User> => {
  const user = (await userDb().findOne({ strUserId: id })) as User;
  return user;
};

export const updateUser = async (user: User) => {
  await userDb().updateOne({ strUserId: user.strUserId }, { $set: user });
};

export const createUser = async (user: User) => {
  await userDb().insertOne(user);
};
