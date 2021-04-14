const Discord = require("discord.js")

module.exports = {
    minArgs: 1,
    maxArgs: -1,
    permissions: ['KICK_MEMBERS'],
    callback: ({ message, client }) => {
        const args = message.content.split(" ")
        args.shift()
        args.shift()
        const string = args.toString()
        const reason = string.replace(/,/g, " ")
        const target = message.mentions.members.first();
        if(!target)
        return message.channel.send("Please @ the user you'd like to kick")
        let authorrolesHighest = message.member.roles.highest.position;
        let mentionrolesHighest = target.roles.highest.position;
        if(mentionrolesHighest >= authorrolesHighest) {
            message.channel.send('You can`t kick members with equal or higher position');
            return;
        };
        if(!target.kickable) {
            message.channel.send('I have no permissions to kick this user');
            return
        };
        const targetID = client.users.cache.get(target.id)
        
        
        if(!reason){
            targetID.send(`You have been kicked on **${message.guild.name}**. You may join back if you have an invite.`)
            const kickEmbed = new Discord.MessageEmbed()
                .setTitle("Kick")
                .setDescription(`${message.author.username} has kicked ${message.mentions.users.first()}`)
                .setColor("0099ff")
                .setFooter(`Lounge Utilities v${botVersion}`)
            message.channel.send(kickEmbed)
        }
        else{
            targetID.send(`You have been kicked on **${message.guild.name}**. You may join back if you have an invite.\n**Reason:** ${reason}`)
            const kickEmbed = new Discord.MessageEmbed()
                .setTitle("Kick")
                .setDescription(`${message.author.username} has kicked ${message.mentions.users.first()}`)
                .setColor("0099ff")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .addField("Reason", reason)
            message.channel.send(kickEmbed)
        }
        setTimeout(() => target.kick(), 1000)
    }
}