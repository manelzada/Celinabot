import fs from 'node:fs';
import path from 'node:path';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}


// ----- Old
// import { SlashCommandBuilder, Routes } from 'discord.js';
// import { REST } from '@discordjs/rest';
// import dotenv from 'dotenv';
// dotenv.config();


// const commands = [
// 	new SlashCommandBuilder().setName('ping').setDescription('Responde com Pong!'),
// 	new SlashCommandBuilder().setName('server').setDescription('Mostra informações básicas do servidor!'),
// ].map(command => command.toJSON());

// const rest = new REST({ version: '10' }).setToken(process.env.TOKEN || '');

// rest.put(Routes.applicationGuildCommands(process.env.APPLICATION_ID || '', process.env.GUILD_ID || ''), { body: commands })
// 	.then(() => console.log('Successfully registered application commands.'))
// 	.catch(console.error);
