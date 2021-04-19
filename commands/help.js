const { MessageEmbed } = require("discord.js")
var fs = require('fs');
module.exports = {
    minArgs: 0,
    maxArgs: 1,
    callback: ({ message, args }) => {
        var commands = `Commands(do $help <command> to look at what it is.):`
        var files = fs.readdirSync("./commands")
        for( const file of files ){
            const fileNameWithoutJS = file.replace(".js", "")
            const fullCommand = "$" + fileNameWithoutJS
            commands += `\n${fullCommand}`
        }
        if(args[0].isNull()){
            const helpEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("Help Menu")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription(commands)
            message.channel.send(helpEmbed)
        }
        
        if(!args[0]) return;
        if(args[0] == "ban"){
            const banEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$ban - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("This command is only for moderators.\n\nDescription: Bans a user\nUsage: $ban <mention> [reason]")
            message.channel.send(banEmbed)
        }
        if(args[0] == "banlist"){
            const banlistEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$banlist - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("This command is only for moderators.\n\nDescription: Displays a list of banned users\nUsage: $banlist")
            message.channel.send(banlistEmbed)
        }
        if(args[0] == "clear"){
            const clearEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$clear - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("This command is only for moderators.\n\nDescription: Clears a specified amount of messages\nUsage: $clear <amount of messages>")
            message.channel.send(clearEmbed)
        }
        if(args[0] == "closeqotd"){
            const closeqotdEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$closeqotd - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("This command is only for moderators.\n\nDescription: Closes a QOTD\nUsage: $closeqotd")
            message.channel.send(closeqotdEmbed)
        }
        if(args[0] == "createqotd"){
            const createqotdEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$createqotd - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("This command is only for moderators.\n\nDescription: Creates a QOTD\nUsage: $createqotd <open | poll> <QOTD question>")
            message.channel.send(createqotdEmbed)
        }
        if(args[0] == "kick"){
            const kickEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$kick - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("This command is only for moderators.\n\nDescription: Kicks a user\nUsage: $kick <mention> [reason]")
            message.channel.send(kickEmbed)
        }
        if(args[0] == "mute"){
            const muteEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$mute - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("This command is only for moderators.\n\nDescription: Mutes a user indefinitely\nUsage: $mute <mention> [reason]")
            message.channel.send(muteEmbed)
        }
        if(args[0] == "setqotd"){
            const setqotdEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$setqotd - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("This command is only for moderators.\n\nDescription: Sets the amount of time per QOTD\nUsage: $setqotd <time>")
            message.channel.send(setqotdEmbed)
        }
        if(args[0] == "simjoin"){
            const simjoinEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$simjoin - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("This command is only for moderators.\n\nDescription: Simulates a user joining\nUsage: $simjoin")
            message.channel.send(simjoinEmbed)
        }
        if(args[0] == "tempmute"){
            const tempmuteEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$tempmute - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("This command is only for moderators.\n\nDescription: Temporarily mutes a user\nUsage: $tempmute <mention> <time> [reason]")
            message.channel.send(tempmuteEmbed)
        }
        if(args[0] == "unban"){
            const unbanEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$unban - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("This command is only for moderators.\n\nDescription: Unbans a user\nUsage: $unban <user ID>")
            message.channel.send(unbanEmbed)
        }
        if(args[0] == "unmute"){
            const unmuteEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$unmute - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("This command is only for moderators.\n\nDescription: Unmutes a user\nUsage: $unmute <mention>")
            message.channel.send(unmuteEmbed)
        }
        if(args[0] == "cute"){
            const cuteEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$cute - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("Description: Displays a cute animal\nUsage: $cute")
            message.channel.send(cuteEmbed)
        }
        if(args[0] == "meme"){
            const memeEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$meme - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("Description: Displays a meme\nUsage: $meme")
            message.channel.send(memeEmbed)
        }
        if(args[0] == "qotd"){
            const qotdEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$qotd - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("Description: Responds to a QOTD question\nUsage: $qotd <response>")
            message.channel.send(qotdEmbed)
        }
        if(args[0] == "rank"){
            const rankEmbed = new MessageEmbed()
                .setColor("0099ff")
                .setTitle("$rank - <Required Parameters> [Optional Parameters]")
                .setFooter(`Lounge Utilities v${botVersion}`)
                .setDescription("Description: Displays your rank and xp\nUsage: $rank")
            message.channel.send(rankEmbed)
        }
        if(!(args[0] == "ban" || args[0] == "banlist" || args[0] == "clear" || args[0] == "closeqotd" || args[0] == "createqotd" || args[0] == "cute" || args[0] == "help" || args[0] == "kick" || args[0] == "meme" || args[0] == "mute" || args[0] == "qotd" || args[0] == "rank" || args[0] == "setqotd" || args[0] == "simjoin" || args[0] == "tempmute" || args[0] == "unban" || args[0] == "unmute")){
            message.reply(":x: Error: invalid parameter. Example of command: $help meme :x:")
        }
    }   
}