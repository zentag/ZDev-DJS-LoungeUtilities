module.exports = async (client) => {
    setInterval(() => {
        const guild = client.guilds.cache.get("830955821487620096")
        const channel = guild.channels.cache.get("830963116464537610")
        channel.send("Hey @here, it's time for the QOTD !")
    }, qotdTime)
}