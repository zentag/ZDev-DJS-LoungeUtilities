
module.exports = {
    minArgs: 1,
    maxArgs: -1,
    callback: ({ message, client }) => {
        if(openOpenQotd == false){
            message.reply("Sorry, but there is no open-ended QOTD open!")
        }
        if(openOpenQotd == true){
            const args = message.content.split(" ")
            args.shift()
            const answerWithComma = args.toString()
            const answer = answerWithComma.replace(/,/g, " ")
            message.delete()
            message.reply("Answer Submitted!").then(msg => msg.delete({ timeout: 10000 }))
            const channel = client.channels.cache.get("830958255156232202")
            channel.send(`**${message.author.tag}'s answer:** ${answer}`)
        }
    }
}