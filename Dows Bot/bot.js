const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});



client.on("ready", guild =>  {
client.user.setGame(`Your Game`, "https://www.twitch.tv/ladjayyt"); 
});


client.on("Dows TOKEN!")