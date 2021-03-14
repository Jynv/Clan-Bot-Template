const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "selfroles2",
    description: "Pick your roles!",
    run: async (client, message, args) => {
       const channel =  '818444824365498378'
       const three = message.guild.roles.cache.find(role => role.id ==='814087877029527576');
       const eight = message.guild.roles.cache.find(role => role.id ==='814087877029527575');
       const nine = message.guild.roles.cache.find(role => role.id ==='796597204461682728');
       const ten = message.guild.roles.cache.find(role => role.id === '814087877029527573');
       const eleven = message.guild.roles.cache.find(role => role.id === '816358427738767370');
       const twelve = message.guild.roles.cache.find(role => role.id === '814087877021532169');



       const threeemoji = '🇩🇪';
       const eightemoji = '🇺🇸';
       const nineemoji = '🇷🇺';
       const tenemoji = '🇹🇷';
       const elevenemoji = '🇫🇷';
       const twelveemoji = '🇪🇸';


       let roleembed = new MessageEmbed()
       .setColor('#ff0505')
       .setTitle('Self Roles!')
       .setDescription(`🇩🇪 <@&814087877029527576> \n
                        🇺🇸 <@&814087877029527575> \n
                        🇷🇺 <@&814087877029527574> \n
                        🇹🇷 <@&814087877029527573> \n
                        🇫🇷 <@&816358427738767370> \n
                        🇪🇸 <@&814087877021532169>`)
       let messageEmbed = await message.channel.send(roleembed);
       messageEmbed.react('🇩🇪')
       messageEmbed.react('🇺🇸')
       messageEmbed.react('🇷🇺')
       messageEmbed.react('🇹🇷')
       messageEmbed.react('🇫🇷')
       messageEmbed.react('🇪🇸')

       client.on('messageReactionAdd', async (reaction, user ) => {
           if(reaction.message.partial) await reaction.message.fetch();
           if(reaction.message.partial) await reaction.fetch();
           if (user.bot) return;
           if (!reaction.message.guild) return;

           if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === threeemoji) {
                   await reaction.message.guild.members.cache.get(user.id).roles.add(three)
               } }
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === eightemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(eight)
                } }
            if (reaction.message.channel.id == channel) {
              if (reaction.emoji.name === nineemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(nine)
              } }
              if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === tenemoji) {
                      await reaction.message.guild.members.cache.get(user.id).roles.add(ten)
                } }
                if (reaction.message.channel.id == channel) {
                  if (reaction.emoji.name === elevenemoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(eleven)
                  } }
                  if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === twelveemoji) {
                          await reaction.message.guild.members.cache.get(user.id).roles.add(twelve)
                    } }
              else {
               return;
           }

       })

       client.on('messageReactionRemove', async (reaction, user ) => {
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.message.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === threeemoji) {
               await reaction.message.guild.members.cache.get(user.id).roles.remove(three)
           } }
        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === eightemoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(eight)
            } }
        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === nineemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(nine)
                } }
                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === tenemoji) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(ten)
                        } }
                        if (reaction.message.channel.id == channel) {
                            if (reaction.emoji.name === elevenemoji) {
                                    await reaction.message.guild.members.cache.get(user.id).roles.remove(eleven)
                                } }
                                if (reaction.message.channel.id == channel) {
                                    if (reaction.emoji.name === twelveemoji) {
                                            await reaction.message.guild.members.cache.get(user.id).roles.remove(twelve)
                                        } }
           else {
           return;
       }



    })

    }}
