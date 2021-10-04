module.exports = (client) => {
  client.on('guildMemberAdd', async (member) => {
    console.log("Activated welcome.")
    const Canvas = require("discord-canvas");
    const Discord = require("discord.js");
    const { guild } = member
    const channel = guild.channels.cache.get("830958927674998815")
  const image = await new Canvas.Welcome()
  .setUsername(member.username)
  .setMemberCount(guild.memberCount)
  .setGuildName("Cozy Lounge")
  .setAvatar(member.avatarURL)
  .setColor("border", "#0099ff")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-c4d-neon-cool-background-image_205279.jpg") //may use https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-c4d-neon-cool-background-image_205279.jpg if doesnt work.
  .toAttachment();
 
const attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome-image.png");
 
channel.send(attachment);
  })
}