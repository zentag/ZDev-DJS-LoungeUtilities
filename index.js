const Discord = require("discord.js");
const client = new Discord.Client();
const WOKCommands = require('wokcommands');
const rules = require("./onStart/rules")
const info = require("./onStart/info")
const mongo = require("./mongo")
const levels = require('./levels')
const mongoPath = "mongodb+srv://Infinity_Oofs:subtomeon_YT36021@cluster0.3y7dl.mongodb.net/loungeUtils?retryWrites=true&w=majority"


global.botVersion = "1.11.3"
global.qotdTime = "86400000"
global.mode = "normal"
global.openOpenQotd = false
global.latestQotd = "No open QOTD"

client.on('ready', async () => {
    const me = await client.users.cache.get("521115847801044993")
    me.send("Yes")
    console.log('ready')
    rules(client)
    info(client)
    levels(client)
    client.user.setActivity("$help", { type: "PLAYING"});
    new WOKCommands(client, {
        commandsDir: 'commands',
        featureDir: 'features'
    }).setDefaultPrefix('$').setMongoPath(mongoPath)

    await mongo().then(mongoose => {
        try{
            console.log("Connected to mongo!")
        }
        finally{
            mongoose.connection.close()
        }
    })
})

if(mode == "testing"){
    const config = require("./config.json")
    client.login(config.testToken);
}
if(mode == "normal"){
    client.login(process.env.token);
}