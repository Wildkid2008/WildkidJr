const Discord = require('discord.js');
require('dotenv').config();
const bot = new Discord.Client();
const ms = require('ms');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
bot.commands = new Discord.Collection();
 
const prefix = '?';
 
const fs = require('fs')
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}
 
 
bot.once('ready', () => {
    bot.user.setStatus('dnd')
    console.log('The Bot is online!');
});

bot.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'clear'){

        bot.commands.get('clear').execute(message, args);

		} else if (command === 'kick'){
			bot.commands.get('kick').execute(message, args);

		} else if (command === 'ban'){
			bot.commands.get('ban').execute(message, args);

		} else if (command === 'mute'){
			bot.commands.get('mute').execute(message, args);

		} 

});
 
bot.login(process.env.token);