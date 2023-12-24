import dotenv from "dotenv";

dotenv.config();

const { CLIENT_TOKEN, DISCORD_CLIENT_ID } = process.env;

if (!CLIENT_TOKEN || !DISCORD_CLIENT_ID) {
  throw new Error("Missing environment variables");
}

export const config = {
  CLIENT_TOKEN,
  DISCORD_CLIENT_ID,
};
