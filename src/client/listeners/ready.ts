import { Client } from "discord.js";

export default class Ready {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async ON() {
    console.log("Ligado com sucesso.");
  }
}