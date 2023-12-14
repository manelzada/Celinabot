import { Client, Collection } from "discord.js";
import readFile from "../utils/FileUtils.js";

interface CustomClient extends Client {
  commands: Collection<string, any>;
}

export default class CommandLoader {
  client: CustomClient;
  commands: Collection<string, any>;

  constructor(client: CustomClient) {
    this.client = client;
    this.commands = new Collection();
  }

  async call() { 
    try {
      await this.loadCommands();

      this.client.commands = this.commands;
    } catch (error) {
      console.error(error);
    }
  }

  async loadCommands() {
    readFile('src/commands', (error: any, Command: any) => {
      if (error) throw new Error(error);
      //Comments

      const command = new Command(this.client);

      this.commands.set(command.name, command);
    });
  }
}
