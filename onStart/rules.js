const Discord = require("discord.js")

module.exports = async (client) => {
    const channel = await client.channels.fetch("830957001571696730")
    const text = new Discord.MessageEmbed()
      .setDescription("[1] Be respectful to other members\n[2] Don't use any slurs\n[3] Don't spam\n[4] Keep discussion related to the channel\n[5] Only play *serious* music(e.g. don't rickroll someone)")
      .setTitle("Rules")
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