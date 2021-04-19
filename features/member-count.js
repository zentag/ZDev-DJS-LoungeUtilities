module.exports = async (client) => {
    
    setInterval(() => {
        if(mode === "testing"){
            return
        }
        const guild = client.guilds.cache.get("830955821487620096")
        const membercount = guild.memberCount
        const channel = guild.channels.cache.get("832726325897723995")
        channel.setName(`Members: ${membercount.toLocaleString()}`)
        console.log("Updated Members.")
    }, 60000)
}