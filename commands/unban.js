const Discord = require("discord.js")

module.exports = {
    minArgs: 1,
    maxArgs: -1,
    permissions: ['BAN_MEMBERS'],
    callback: async ({ message, client }) => {
        const args = message.content.split(" ")
        const target = args[1]
        message.guild.fetchBans().then(async bans => {
            
            global.bUser = await bans.find(b => b.user.id == target)
            
        })
        if(!bUser){
            message.channel.send("This user does not exist")
            return;
        } 
        args.shift()
        args.shift()
        const string = args.toString()
        const reason = string.replace(/,/g, " ")    
        
        if(!reason){
            const kickEmbed = new Discord.MessageEmbed()
                .setTitle("Unban")
                .setDescription(`${message.author.username} has unbanned ${target}`)
                .setColor("0099ff")
                .setFooter(`Lounge Utilities v${botVersion}`)
            message.channel.send(kickEmbed)
        }
        else{
            const kickEmbed = new Discord.MessageEmbed()
                .setTitle("Unban")
                .setDescription(`${message.author.username} has unbanned ${target}`)
                .setColor("0099ff")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .addField("Reason", reason)
            message.channel.send(kickEmbed)
        }
        setTimeout(() => message.guild.members.unban(target), 1000)
    }
}