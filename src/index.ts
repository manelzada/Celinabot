import dotenv from 'dotenv'
dotenv.config();

import Client from './Client.js'
const client = new Client();

client.initialize().login();

process.on("uncaughtException", (err) => console.error(err))
  .on("unhandledRejection", (err) => console.error(err));