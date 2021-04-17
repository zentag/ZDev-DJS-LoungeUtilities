const profileSchema = require('../schemas/profile-schema');
const Discord = require("discord.js")

module.exports = {
    minArgs: 0,
    maxArgs: 1,
    callback: async ({ message }) => {
        const target = message.mentions.users.first() || message.author
        const rank  = await profileSchema.findOne({ userId: target.id })
        const rankEmbed = new Discord.MessageEmbed()
            .setTitle(`${target.tag}'s rank on this server`)
            .addField("Level", rank.level)
            .addField("XP", rank.xp)
            .setColor("0099ff")
        message.channel.send(rankEmbed)
    }
}