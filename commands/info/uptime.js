const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
    name: "uptime",
    aliases: ["uptime"],
    category: "info",
    description: "Let you know the duration of how long the Bot is online!",
    run: async (client,message,args) => {
        let uptimeembed = new Discord.MessageEmbed()
    .setAuthor('M22 Germany')
    .setColor('#2f2ebf')
    .setDescription(`**${client.user.username}** is since ${duration(client.uptime)} online`)
    .setFooter(`${config.prefix}help for Help!`)

        function duration(ms) {
            const sec = Math.floor(ms / 1000 % 60).toString();
            const min = Math.floor(ms / (60*1000) % 60).toString();
            const hrs = Math.floor(ms / (60*60*1000) % 60).toString();
            const days = Math.floor(ms / (24*60*60*1000) % 60).toString();
            return `\`${days} Days\`, \`${hrs} Hours\`, \`${min} Minutes\`, \`${sec} Seconds\``
        }
        message.channel.send(uptimeembed);
    }
}
