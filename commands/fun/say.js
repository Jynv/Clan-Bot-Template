module.exports = {
	name: "say",
	category: "fun",
  	description: "Resends your Message!",
	aliases: ["s"],
  run: async (client, message, args) => {
	if (!message.member.roles.cache.has('819276952405540864')) {
		return}
	message.delete();
	message.channel.send(args.join(" "))
	}
}
