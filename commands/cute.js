const Discord = require("discord.js")
const randomPuppy = require("random-puppy")
module.exports = {
    minArgs: 0,
    maxArgs: 0,
    callback: async ({ message }) => {
        const subreddits = ["hardcoreaww", "aww"]
        const random = subreddits[Math.floor(Math.random() * subreddits.length)]
        const img = await randomPuppy(random)
        const embed = new Discord.MessageEmbed()
            .setImage(img)
            .setTitle(`Cute Animal From r/${random}!`)
            .setURL(`http://reddit.com/r/${random}`)
        message.channel.send(embed)
            
    }
}