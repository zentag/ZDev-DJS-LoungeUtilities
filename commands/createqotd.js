const Discord = require("discord.js")

module.exports = {
    minArgs: 2,
    maxArgs: -1,
    permissions: ['ADMINISTRATOR'],
    callback: ({ message, client }) => {
        const args = message.content.split(" ")
        if(args[1] == "poll"){
            
            global.openOpenQotd = false
            args.shift()
            args.shift()
            const qotdWithComma = args.toString()
            const qotd = qotdWithComma.replace(/,/g, " ")
            const qotdChannel = client.channels.cache.get("830958255156232202")
            const qotdEmbed = new Discord.MessageEmbed()
                .setTitle("Todays QOTD: Answer with :white_check_mark: or :x:!")
                .setDescription(`${qotd}`)
                .setColor("0099ff")
                .setFooter(`MoonBot v${botVersion}`)
            qotdChannel.send(qotdEmbed).then(function (message) {
                message.react("✅")
                message.react("❌")
            })
            global.latestQotd = qotd
        }
        if(args[1] == "open"){
            global.openOpenQotd = true
            args.shift()
            args.shift()
            const qotdWithComma = args.toString()
            const qotd = qotdWithComma.replace(/,/g, " ")
            const qotdChannel = client.channels.cache.get("830958255156232202")
            const qotdEmbed = new Discord.MessageEmbed()
                .setTitle("Todays QOTD: Answer with &qotd (answer) in any channel!")
                .setDescription(`${qotd}`)
                .setColor("0099ff")
                .setFooter(`MoonBot v${botVersion}`)
            qotdChannel.send(qotdEmbed)
            global.latestQotd = qotd
        }
    }
}