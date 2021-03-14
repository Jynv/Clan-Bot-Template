const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
    name: "about",
    aliases: ["about"],
    category: "info",
    description: "Let you now some facts about the Bot!",
    run: async (client,message,args) => {
    let sayembed = new Discord.MessageEmbed()
    .setColor('#2f2ebf')
    .setDescription("Offical M22 Germany Bot made by [Pearl-Bots™](https://discord.gg/RVBbZJDA8H)!")
    .setAuthor(message.author.tag , iconURL= message.author.displayAvatarURL())
    .setFooter(`${config.prefix}help for Help!`)
    message.channel.send(sayembed)
 }

}
