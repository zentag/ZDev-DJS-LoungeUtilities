const Discord = require("discord.js")

module.exports = {
    minArgs: 1,
    maxArgs: -1,
    permissions: ['BAN_MEMBERS'],
    callback: ({ message, client }) => {
        const args = message.content.split(" ")
        args.shift()
        args.shift()
        const string = args.toString()
        const reason = string.replace(/,/g, " ")
        const target = message.mentions.members.first();
        if(!target)
        return message.channel.send("Please @ the user you'd like to ban")
        let authorrolesHighest = message.member.roles.highest.position;
        let mentionrolesHighest = target.roles.highest.position;
        if(mentionrolesHighest >= authorrolesHighest) {
            message.channel.send('You can`t ban members with equal or higher position');
            return;
        };
        if(!target.bannable) {
            message.channel.send('I have no permissions to ban this user');
            return
        };
        const targetID = client.users.cache.get(target.id)
        
        
        if(!reason){
            targetID.send(`You have been banned on **${message.guild.name}**. You may **not** join back until you are unbanned.`)
            const banEmbed = new Discord.MessageEmbed()
                .setTitle("Ban")
                .setDescription(`${message.author.username} has banned ${message.mentions.users.first()}`)
                .setColor("0099ff")
                .setFooter(`Lounge Utilities v${botVersion}`)
            message.channel.send(banEmbed)
        }
        else{
            targetID.send(`You have been banned on **${message.guild.name}**. You may **not** join back until you are unbanned.\n**Reason:** ${reason}`)
            const banEmbed = new Discord.MessageEmbed()
                .setTitle("Ban")
                .setDescription(`${message.author.username} has banned ${message.mentions.users.first()}`)
                .setColor("0099ff")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .addField("Reason", reason)
            message.channel.send(banEmbed)
        }
        setTimeout(() => target.ban(), 1000)
    }
}