const Discord = require("discord.js");
const client = new Discord.Client();
const WOKCommands = require('wokcommands');
const config = require("./config.json")

global.botVersion = "1.0"
global.qotdTime = "86400000"
global.mode = "normal"
global.openOpenQotd = false
global.latestQotd = "No open QOTD"

client.on('ready', async () => {
    console.log('ready')

    client.user.setActivity("$help", { type: "PLAYING"});
    new WOKCommands(client, {
        commandsDir: 'commands',
        featureDir: 'features'
    }).setDefaultPrefix('$')
})

if(mode == "testing"){
    client.login(config.testToken);
}
if(mode == "normal"){
    client.login(process.env.token);
}