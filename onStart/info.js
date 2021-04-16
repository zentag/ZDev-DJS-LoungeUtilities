const Discord = require("discord.js")

module.exports = async (client) => {
    const channel = await client.channels.fetch("830957699890020392")
    const text = new Discord.MessageEmbed()
      .setDescription("Official Discord Invite: https://discord.gg/WgF8xWVhPj\nPlease read <#830957001571696730>!")
      .setTitle("Info")
      .setColor("0099ff")
      .setFooter("Lounge Utilities v" + botVersion)
    channel.messages.fetch().then((messages) => {
      if (messages.size === 0) {
        // Send a new message
        channel.send(text)
      } else {
        // Edit the existing message
        for (const message of messages) {
          message[1].edit(text)
        }
      }
    })
  }