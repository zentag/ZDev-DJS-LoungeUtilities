module.exports = {
    minArgs: 1,
    maxArgs: 1,
    permissions: ['ADMINISTRATOR'],
    callback: ({ message }) => {
        const args = message.content.split(" ")
        if(isNaN(args[1])){
            message.reply("Hey! Looks like you didn't use a number!\nP.S. Make sure to use Hours :D")
        }else{
            const qotdTimeInt = parseInt(args[1], 10)
            const qotdTimeInMS = qotdTimeInt * 3600000
            global.qotdTime = qotdTimeInMS
            console.log(qotdTimeInMS)
            message.reply(`You've set the QOTD remind time to ${qotdTimeInt} hours, or ${qotdTimeInMS} milliseconds.`)
        }
    }
}