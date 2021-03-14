const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "esay",
	category: "fun",
  description: "Resends the message in embed",
  run: async (client, message, args) => {
    args.slice(0).join(" ");
    message.delete()
    if (!message.member.roles.cache.has('819276952405540864')) {
      return}
    
    let sayembed = new MessageEmbed()
    .setColor('#ff0505')
    .setAuthor('M22 Germany')
    .setDescription(args.slice(0).join(" "))
    .setThumbnail('')
    message.channel.send(sayembed)


    
	}
}


bot.on('message', async message=>{
  let prefix = "#";
 if(!message.guild) return;
 if(message.author.bot) return;
 //embed cmd
 if(message.content.toLowerCase().startsWith(`${prefix}embed`)){ 
      message.delete();
      if (!message.member.roles.cache.has('820718234894336021')) {
        return}
             const text = message.content.split(" ").slice(1).join(" ");
             if(!text) return message.reply("> Please provide a text!")
             if(text.length >= 2000) return message.reply("> Your text must be under 2000 characters!")
             const embed = new Discord.MessageEmbed()
              .setColor("RED")
              .setFooter(bot.user.username, bot.user.displayAvatarURL({dynamic: true}))
              .setDescription(text)
              .setFooter(bot.user.username)
             .setTimestamp()
             message.channel.send(embed);
}})