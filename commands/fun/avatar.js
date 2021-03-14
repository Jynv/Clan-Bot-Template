
const { MessageEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
	name: "avatar",
	category: "fun",
	aliases: [""],
  description: "Sends the Avatar of the User",
  run: async (client, message, args) => {
		let user = message.mentions.users.first() || message.author;
	let avatar = user.displayAvatarURL({dynamic: true});

	let avatarembed = new MessageEmbed()
	.setColor('#2f2ebf')
	.setAuthor('M22 Germany')
	.setURL(avatar)
	.setImage(avatar)
	message.channel.send(avatarembed)
	}
}
