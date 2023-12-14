import { promises } from "fs";

import { Client } from "discord.js";

export default class EventLoader {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async call() {
    console.log("Eventos carregados com sucesso.")

    this.loadEvents("./src/client/listeners")
  }

  async loadEvents(path: string) {
    const files = await promises.readdir(path);
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const eventModule = await import(`../client/listeners/${file}`);
      const event = new eventModule.default(this.client);
  
      this.client.on(file.split(".")[0], (...args) => event.ON(...args));
    }
  }
  
}

