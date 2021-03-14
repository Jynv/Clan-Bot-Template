const Discord = require("discord.js");
const config = require("../../config.json");


module.exports = {
    name: "ping",
	aliases: ["latency", "p"],
    category: "info",
    description: "Let you know latency of the Bot!",
    run: async (client, message, args) => {

    let pingembed = new Discord.MessageEmbed()
    .setColor('#2f2ebf')
    .setDescription(` :ping_pong: Pong! \n
    My latency is !${Math.round(client.ws.ping)}ms`)
    .setAuthor(message.author.tag , iconURL= message.author.displayAvatarURL())
    .setFooter(`${config.prefix}help for Help!`)
    message.channel.send(pingembed)
    }
}
