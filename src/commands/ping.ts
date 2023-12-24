import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Responde com pong!");

export const execute = async (interaction: CommandInteraction) => {
  return interaction.reply("Pong!");
};
