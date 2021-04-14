const Discord = require("discord.js")
const ms = require("ms")

module.exports = {
    minArgs: 2,
    maxArgs: -1,
    permissions: ['KICK_MEMBERS'],
    callback: ({ message }) => {
        const args = message.content.split(" ")
        const mutedRole = message.guild.roles.cache.find(
            (role) => role.name === 'Muted'
        );
        if (!mutedRole)
        return message.channel.send('There is no Muted role on this server');
        const target = message.mentions.members.first();
        if(!target)
        return message.channel.send("Please @ the user you'd like to tempmute")
        console.log(args[2])
        const time = ms(args[2])
        target.roles.add(mutedRole);
        setTimeout(() => {
            target.roles.remove(mutedRole); // remove the role
          }, time)
        args.shift()
        args.shift()
        args.shift()
        const string = args.toString()
        const reason = string.replace(/,/g, " ")
        if(!reason){
            const muteEmbed = new Discord.MessageEmbed()
          .setTitle("Temporary Mute")
          .setDescription(`${message.author.username} has temporarily muted ${message.mentions.users.first()}`)
          .setColor("0099ff")
          .setFooter(`Lounge Utilities v${botVersion}`)
          .addField("Duration", ms(time, { long: true }))
        message.channel.send(muteEmbed)
        }else{
            const muteEmbed = new Discord.MessageEmbed()
          .setTitle("Temporary Mute")
          .setDescription(`${message.author.username} has temporarily muted ${message.mentions.users.first()}`)
          .setColor("0099ff")
          .setFooter(`Lounge Utilities v${botVersion}`)
          .addField("Duration", ms(time, { long: true }))
          .addField("Reason", reason)
        message.channel.send(muteEmbed)
        }
    }
}