const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523085850163019788")
setInterval(function() {
channel.send(`kontexx kontexx kontexx nfdgd fdkf`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
