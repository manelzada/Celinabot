import { Client, Collection, GatewayIntentBits } from 'discord.js';
import fs from 'node:fs';
import path from 'node:path';

const dotenv = require('dotenv');
dotenv.config();

const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.ts'));


const client = new Client({
	intents: [GatewayIntentBits.Guilds],
});

client.once('ready', () => {
	console.log('Bot Online');
	client.user?.setPresence({ activities: [{ name: 'github.com/manelzada' }], status: 'online' });
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.commands = new Collection();

for (const file of commandsFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	client.commands.set(command.data.name, command);
}

client.login(process.env.TOKEN);
