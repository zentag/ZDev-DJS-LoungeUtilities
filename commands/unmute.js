const Discord = require("discord.js")

module.exports = {
    minArgs: 1,
    maxArgs: 1,
    permissions: ['KICK_MEMBERS'],
    callback: ({ message }) => {
        const mutedRole = message.guild.roles.cache.find(
            (role) => role.name === 'Muted'
        );
        if (!mutedRole)
        return message.channel.send('There is no Muted role on this server');
        const target = message.mentions.members.first();
        if(!target)
        return message.channel.send("Please @ the user you'd like to unmute")
        target.roles.remove(mutedRole);
        const muteEmbed = new Discord.MessageEmbed()
          .setTitle("Unmute")
          .setDescription(`${message.author.username} has unmuted ${message.mentions.users.first()}`)
          .setColor("0099ff")
          .setFooter(`Lounge Utilities v${botVersion}`)
        message.channel.send(muteEmbed)
    }
}