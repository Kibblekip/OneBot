const fs = require('fs');
global.Discord = require('discord.js');
const { prefix } = require('./config.json');
const { token } = require('./token.json')

const client = new Discord.Client();
global.client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Ready to go!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('ERROR: The command could not execute!');


}})

client.on('ready', () => {
	client.user.setActivity('My prefix is "]"')
})

// login to Discord using the app's token
client.login(token);