const discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
  name: "kick",
  category: "admin",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <raeson>",
  run: (client, message, args) => {
    if (!message.member.roles.cache.has('817905153201537064')) {
      return}
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(
        `**${message.author.username}**, You do not have enough permission to use this command`
      );
    }

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(
        `**${message.author.username}**, I do not have enough permission to use this command`
      );
    }

    let target = message.mentions.members.first();

    if (!target) {
      return message.channel.send(
        `**${message.author.username}**, Please mention the person who you want to kick`
      );
    }

    if (target.id === message.author.id) {
      return message.channel.send(
        `**${message.author.username}**, You can not kick yourself`
      );
    }

    if (!args[1]) {
      return message.channel.send(
        `**${message.author.username}**, Please Give Reason to kick`
      );
    }

    let embed = new discord.MessageEmbed()
      .setAuthor('M22 Germany')
      .setTitle("Action: Kick")
      .setDescription(`Kicked ${target} (${target.id})`)
      .setColor("#2f2ebf")
      .setFooter(`Kicked by ${message.author.username}`);

    message.channel.send(embed);

    target.kick(args[1]);
  }
};
