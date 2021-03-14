
const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../config.json");

module.exports = {
    name: "help",
    aliases: ["h", "cmds", "cmd"],
    category: "info",
    description: "Returns all Commands, or one specific Command information!",
    usage: "[command], [aliases], [command <cmd>]",
    run: async (client,message,args) => {
        if(args[0]){
            return getCMD(client,message,args[0]);
        }
        else{
            return getAll(client, message);
        }
    }
}

function getAll(client,message){
const embed = new MessageEmbed()
    .setAuthor('M22 Germany')
    .setColor("#ff0505")
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle("Help Menu:")
    .setFooter(`To see command descriptions and inforamtion, type: ${config.prefix}help [CMD NAME]`)
    const commands = (category) => {
        return client.commands.filter(cmd => cmd.category === category)
                .map(cmd => `\`${cmd.name}\``).join(", ")
    }
    const info = client.categories.map(cat => stripIndents`**__${cat[0].toUpperCase() + cat.slice(1)}__**\n> ${commands(cat)}`)
    .reduce((string, category) => string + "\n" + category);
    return message.channel.send(embed.setDescription(info))

}
function getCMD(client,message,input){
    const embed = new MessageEmbed()
    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()))
    let info = `No Information found for command **${input.toLowerCase()}**`;
    if(!cmd){
        return message.channel.send(embed.setColor("#ff0505").setDescription(info));
    }
    info = "";
    if(cmd.name) info += `**Command name**: \`${cmd.name}\``
    if(cmd.aliases) info += `**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`
    if(cmd.description) info += `**Description**: \`${cmd.description}\``
    if(cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`;
        embed.setFooter("Syntax: <> = required, [] = optional");
    }
    return message.channel.send(embed.setColor("#ff0505").setDescription(info))
}
