

module.exports = {
    minArgs: 0,
    maxArgs: 0,
    permissions: ['BAN_MEMBERS'],
    callback: ({ message }) => {
        message.guild.fetchBans().then(bans=> {
            function logMapElements(value, key, map) {
                const list = bans.get(key)
            
                message.channel.send(`${list.user.tag} - ${key}`)
              }
            bans.forEach(logMapElements);
        })
    }
}