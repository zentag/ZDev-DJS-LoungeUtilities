const Discord = require("discord.js");
const client = new Discord.Client();
const WOKCommands = require('wokcommands');
const rules = require("./onStart/rules")


global.botVersion = "1.6.2"
global.qotdTime = "86400000"
global.mode = "normal"
global.openOpenQotd = false
global.latestQotd = "No open QOTD"

client.on('ready', async () => {
    const me = await client.user.cache.get("521115847801044993")
    me.send("I have started!")
    console.log('ready')
    rules(client)
    client.user.setActivity("$help", { type: "PLAYING"});
    new WOKCommands(client, {
        commandsDir: 'commands',
        featureDir: 'features'
    }).setDefaultPrefix('$')
})

if(mode == "testing"){
    const config = require("./config.json")
    client.login(config.testToken);
}
if(mode == "normal"){
    client.login(process.env.token);
}