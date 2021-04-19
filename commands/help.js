const { MessageEmbed } = require("discord.js")
var fs = require('fs');
module.exports = {
    minArgs: 0,
    maxArgs: 0,
    callback: ({ message, args }) => {
        const commands = `Commands(do $help <command> to look at what it is.):`
        var files = fs.readdirSync("../commands")
        for( const file of files ){
            const fileNameWithoutJS = file.replace(".js", "")
            const fullCommand = "$" + fileNameWithoutJS
            commands += `\n${fullCommand}`
        }
        const helpEmbed = new MessageEmbed()
            .setColor("0099ff")
            .setTitle("Help Menu")
            .setFooter(`Lounge Utilities v${botVersion}`)
            .setDescription(commands)
        message.channel.send(helpEmbed)
    }   
}