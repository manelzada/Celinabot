import { Client } from "discord.js";
import EventLoader from "./loaders/EventLoader.js";
import CommandLoader from "./loaders/CommandLoader.js";

export default class Bot extends Client {
  constructor() {
    super ({
      intents: 33415,
      failIfNotExists: false,
    });
  }  

  login() {
    return super.login(process.env.CLIENT_TOKEN)
  }

  initialize() {
    new EventLoader(this).call()
    // new CommandLoader(this).call('commands', )
  
    return this;
  }
}