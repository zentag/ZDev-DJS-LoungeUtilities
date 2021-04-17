const profileSchema = require('your directory to your schema');
const Discord = require("discord.js")

module.exports = {
    minArgs: 0,
    maxArgs: 1,
    callback: ({ message }) => {
        const rank  = await profileSchema.findOne({ userID: target.id })
        const target = message.mentions.users.first() || message.author
        const rankEmbed = new Discord.MessageEmbed()
            .setTitle(`${target.tag}'s rank on this server`)
            .addField("Level", rank.level)
            .addField("XP", rank.xp)
            .setColor("0099ff")
        message.channel.send(rankEmbed)
    }
}