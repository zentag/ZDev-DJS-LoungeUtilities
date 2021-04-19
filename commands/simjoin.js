module.exports = {
    requiredPermissions: ['ADMINISTRATOR'],
    callback: ({ message, client }) => {
      client.emit('guildMemberAdd', message.member)
    },
  }