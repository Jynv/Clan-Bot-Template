const { MessageEmbed } = require('discord.js')
module.exports = {
    name : "apply-staff",
    category: "support",
    description: "Opens a new Application",
    category: "apply",
    run: async (client, message, args) => {
       const channel = '817868376407670794'
    var antworten = [];
    var fragen = [

"Whats your Name",
"How old are you",
"Why do you want Join M22 as Manager",
"Do you have Experience in Managing",
"What do you if in the Team is Beef",
"What is your Seaction | Social , Player search | Discord ?"
    ]
    /**
     * [] === ["asdasd","213124","purple"] //array[0] --> asdasd  | array[1] --> 213124  | array[2] --> purple
     */

    const stembed = new MessageEmbed()
    .setColor('#000000')
    .setTitle('1. ')
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription("Whats your Name")

    const dfembed = new MessageEmbed()
    .setColor('#000000')
    .setTitle('2. ')
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription("How old are you")

    const ghembed = new MessageEmbed()
    .setColor('#000000')
    .setTitle('3. ')
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription("Why do you want Join M22 as Manager")

    const rhembed = new MessageEmbed()
    .setColor('#000000')
    .setTitle('4. ')
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription("Do you have Experience in Managing")

    const geembed = new MessageEmbed()
    .setColor('#000000')
    .setTitle('5. ')
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription("What do you if in the Team is Beef")
    
    const ggembed = new MessageEmbed()
    .setColor('#000000')
    .setTitle('6. ')
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription("What is your Seaction | Social , Player search | Discord ?")



    var counter = 0;
 message.author.send(stembed).then(msg => {
    msg.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 120*1000, errors: ['time'] })
    .then(collected => {
        antworten.push(collected.first().content);
        counter++;
        message.author.send(dfembed).then(msg => {
            msg.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 120*1000, errors: ['time'] })
            .then(collected => {
                antworten.push(collected.first().content);
                counter++;
                message.author.send(ghembed).then(msg => {
                    msg.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 120*1000, errors: ['time'] })
                    .then(collected => {
                        antworten.push(collected.first().content);
                        counter++;
                        message.author.send(rhembed).then(msg => {
                            msg.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 120*1000, errors: ['time'] })
                            .then(collected => {
                                antworten.push(collected.first().content);
                                counter++;
                                message.author.send(geembed).then(msg => {
                                    msg.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 120*1000, errors: ['time'] })
                                    .then(collected => {
                                        antworten.push(collected.first().content);
                                        counter++;
                                        message.author.send(ggembed).then(msg => {
                                            msg.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 120*1000, errors: ['time'] })
                                            .then(collected => {
                                                antworten.push(collected.first().content);
                                                counter++;
                                        ende_apply();
                                        })
                                    .catch(collected => {
                                msg.channel.send('Looks like nobody got the answer this time.');
                                 });
                                })
                            })

            .catch(collected => {
                msg.channel.send('Looks like nobody got the answer this time.');
            });
         })
    })
    .catch(collected => {
        msg.channel.send('Looks like nobody got the answer this time.');
    });
 })
})


.catch(collected => {
    msg.channel.send('Looks like nobody got the answer this time.');
});
})
})
.catch(collected => {
    msg.channel.send('Looks like nobody got the answer this time.');
});
})
})
    .catch(collected => {
        msg.channel.send('Looks like nobody got the answer this time.');
    });
 })
 function ende_apply(){
    const embed = new MessageEmbed()
    .setColor('#000000')
    .setTitle(`${message.author.tag} hat sich beworben!`)
    .setTimestamp()
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription(`${message.author}`)
    for(let i = 0; i < antworten.length; i++){
    embed.addField(fragen[i], "> " + antworten[i]);
    }

    message.guild.channels.cache.get("816797805347209276").send(embed)
}
}
}
