const { MessageEmbed, Message } = require('discord.js')
const Client = require('./TicketSystem')

class UtilityEmbeds {
    constructor() {

    }

    errEmbed(description, footer) {
        const errorEmbed = new MessageEmbed()
        errorEmbed.setTitle('❌ Error! ❌' || title)
        errorEmbed.setDescription(description)
        errorEmbed.setColor('ff0505')
        errorEmbed.setFooter(footer)

        return (
            errorEmbed
        )
    }

    successEmbed(description, footer) {
        const success = new MessageEmbed()
        success.setTitle('✅ Success! ✅')
        success.setDescription(description)
        success.setColor('ff0505')
        success.setFooter(footer)

        return (
            success
        )
    }
}

module.exports = UtilityEmbeds;