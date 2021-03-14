const { MessageEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    name: "clear",
    category: "admin",
    description: "Clears Messages!",
    run: async (client, message, args) => {
        if (!message.member.roles.cache.has('817905153201537064')) {
            return}

        let nopermsembed = new MessageEmbed()
    .setColor('#2f2ebf')
    .setAuthor('M22 Germany')
    .setDescription("You don`t have the permission to use this command!")
    .setThumbnail('')

    let nonumberembed = new MessageEmbed()
    .setColor('#2f2ebf')
    .setAuthor('M22 Germany')
    .setDescription("Number is missing!")
    .setThumbnail('')




        if (message.deletable) {
            message.delete();
        }

        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return  message.channel.send(nopermsembed)
            .then(m => m.delete[5000])
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            message.channel.send(nonumberembed)
            .then(m => m.delete[5000]);
        }


        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`I deleted **${deleted.size}** messages.`))
        }
}
