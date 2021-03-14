const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
        name: "radio",
        category: "fun",
        description: "Let starts the Radio!",
    run: async (client,message,args) => {

        let radioonembed = new Discord.MessageEmbed()
    .setAuthor(`M22 Germany`)
    .setColor('#ff0505')
    .setDescription(`Radio is now active!`)
    .setFooter(`${config.prefix}help for Help!`)



let Voicechannel = message.member.voice.channel
        if(!Voicechannel)return message.react('📻').then(message.channel.send(radioembed));
    Voicechannel.join().then(connection=>{
    connection.play('https://streams.ilovemusic.de/iloveradio6.mp3')
    message.react('📻')
    message.channel.send(radioonembed)
    })
    console.log(`Radio is now activatet!`)
}
}
