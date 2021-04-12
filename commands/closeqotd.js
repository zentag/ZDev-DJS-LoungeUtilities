const Discord = require("discord.js")

module.exports = {
    minArgs: 0,
    maxArgs: 0,
    permissions: ['ADMINISTRATOR'],
    callback: ({ message, client }) => {
        if(latestQotd == "No open QOTD"){
            message.reply("No QOTD Open")
        }
        else{
            let counter = 0
            const filter = m => m.author.id === message.author.id
            const collector = new Discord.MessageCollector(message.channel, filter, {
                max: 1,
                time: 1000 * 10
            })
            message.channel.send(`Would you really like to close the QOTD "${latestQotd}"? Respond with **y** or **n** in the next 10 seconds.`)
            collector.on('collect', m => {
                if(counter < 1){

                }
            })
            collector.on('end', collected => {
                if(collected.size == 1){
                    collected.forEach((value) => {
                        if(value.content == "y"){
                            didTheyClose = true
                        }
                        if(value.content == "n"){
                        didTheyClose = false
                        }
                    })
                
                    if(didTheyClose == true){
                        const channel = client.channels.cache.get("830958255156232202")
                       channel.send(`"${latestQotd}" is no longer accepting responses!`)
                       message.reply(`Great! You've closed "${latestQotd}"`)
                       global.latestQotd = "No open QOTD"
                       global.openOpenQotd = false
                    }
                    if(didTheyClose == false){
                        message.reply("Operation aborted, the qotd was not closed")
                    }
                }else{

                }
            })
            }
        
    }
}