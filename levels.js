const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema')

module.exports = (client) => {
  client.on('message', (message) => {
    const { guild, member } = message
    message.channel.messages.fetch({ limit: 2 }).then(messages => {
        global.sender = messages[1]
        console.log(sender)
      })
    if(!message.author.bot && message.channel.type == "dm"){
        addXP(guild.id, member.id, 23, message)
    }   
    
  })
}

const getNeededXP = (level) => level * level * 100

const addXP = async (guildId, userId, xpToAdd, message) => {
  await mongo().then(async (mongoose) => {
    try {
      const result = await profileSchema.findOneAndUpdate(
        {
          guildId,
          userId,
        },
        {
          guildId,
          userId,
          $inc: {
            xp: xpToAdd,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )
      let { xp, level } = result
      const needed = getNeededXP(level)

      if (xp >= needed) {
        ++level
        xp -= needed

        message.reply(
          `You are now level ${level} with ${xp} experience! You now need ${getNeededXP(
            level
          )} XP to level up again.`
        )

        await profileSchema.updateOne(
          {
            guildId,
            userId,
          },
          {
            level,
            xp,
          }
        )
      }
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.addXP = addXP