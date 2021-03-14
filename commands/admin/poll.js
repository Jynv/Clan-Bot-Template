const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
  name: "poll",
  description: "Makes a Poll!",
  category: "admin",
  usage: "poll <channelID> <poll text>",
  run: async (bot, message, args) => {
    if (!message.member.roles.cache.has('817905153201537064')) {
      return}
    if (!message.member.permissions.has("ADMINISTRATOR"))

      return message.channel.send(
        `You do not have admin, ${message.author.username}`
      )
      let channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!channel) {
      return message.channel.send(
        `You did not mention / give the id of your channel!`
      );
    }
    let question = message.content
    args.join(' ');
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    const Embed = new Discord.MessageEmbed()
      .setAuthor('M22 Germany')
      .setTitle(`New poll!`)
      .setDescription(args.slice(1).join(' '))
      .setFooter(`${message.author.username} created this poll.`)
      .setColor('#2f2ebf');
    let msg = await bot.channels.cache.get(channel.id).send(Embed);
    await msg.react("✅");
    await msg.react("❌");
  },
};
