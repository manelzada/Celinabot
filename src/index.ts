import { Client, GatewayIntentBits, Events } from "discord.js";
import dotenv from "dotenv";
import { deployCommands } from "./deployCommands";
import { commands } from "./commands";
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

client.once(Events.ClientReady, (ready) => {
  console.log(`[EVENTO] Bot ligado ${ready.user.tag}`);
});

client.on(Events.GuildCreate, async (guild) => {
  await deployCommands({ guildId: guild.id });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

client.login(process.env.CLIENT_TOKEN);
