const Discord = require("discord.js");
const client = new Discord.Client();
const WOKCommands = require('wokcommands');
const rules = require("./onStart/rules")
const info = require("./onStart/info")
const mongo = require("./mongo")
const levels = require('./levels')


global.botVersion = "1.14.6"
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
    }).setDefaultPrefix('$').setMongoPath(process.env['mongoPath'])

    await mongo().then(mongoose => {
        try{
            console.log("Connected to mongo!")
        }
        finally{
            mongoose.connection.close()
        }
    })
})

client.on('message', message => {
    let confirm = false;
   
    var i;
    const { badwords } = require("./data.json")
    for(i = 0;i < badwords.length; i++) {
      if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        confirm = true;      
    }

    if(confirm) {
      const log = client.channels.cache.get("833832055636361228");
      const logEmbed = new Discord.MessageEmbed()
            .setTitle(`Automod: ${message.author.username}`)
            .setDescription(`Message: ${message.content}`)

      message.delete()
      message.channel.send(`**${message.author}, you are not allowed to send that here! More warnings will result in a mute!**`)
      log.send(logEmbed)
    }    
})

if(mode == "testing"){
    const config = require("./config.json")
    client.login(config.testToken);
}
if(mode == "normal"){
    client.login(process.env['token']);
}