import { SlashCommandBuilder } from 'discord.js';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responde com Pong!'),
	// @ts-ignore
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
