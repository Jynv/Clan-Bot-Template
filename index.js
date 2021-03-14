const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({
  disableEveryone: true
  , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
  const jointocreate = require("./jointocreate");
  jointocreate(client);

client.on("ready", ()=>console.log("READY"));
client.on("message", (message)=>{
  if(message.author.bot || !message.guild) return;
  if(!message.content.startsWith(config.prefix)) return;
  let args = message.content.slice(config.prefix.length).split(" ");
  let cmd = args.shift();

  if(cmd === "applystart1"){
      console.log(args)
      let newargs = args.join(" ").split("+")
      console.log(newargs)
      message.channel.send(
          new Discord.MessageEmbed()
          .setColor('#2f2ebf')
          .setTitle("Apply")
          .setDescription("Apply now as Player for M22 Germany!")
          .setFooter("React with the emoji!")
      )
  }
  else if (cmd === "react"){
      message.channel.messages.fetch(args[0]).then(msg => message.react(args[1]));
  }
});

client.on("messageReactionAdd", async (reaction, user) => {
  const { message } = reaction;
  if(user.bot || !message.guild) return;
  if(message.partial) await message.fetch();
  if(reaction.partial) await reaction.fetch();

  if(message.guild.id === "788503167490457631" && message.channel.id === config.apply_channel_id && (reaction.emoji.name === "✅")){
      let guild = await message.guild.fetch();
      let channel_tosend = guild.channels.cache.get(config.finished_applies_channel_id);
      if(!channel_tosend) return console.log("RETURN FROM !CHANNEL_TOSEND");
      const answers = [];
      let counter = 0;

      ask_question(config.QUESTIONS1[counter]);

      function ask_question(qu){
          if(counter === config.QUESTIONS1.length) return send_finished();
          user.send(qu).then(msg => {
              msg.channel.awaitMessages(m=>m.author.id === user.id, {max: 1, time: 60000, errors: ["time"]}).then(collected => {
                  answers.push(collected.first().content);
                  ask_question(config.QUESTIONS1[++counter]);
              })
          })
      }
      function send_finished(){
          let embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTitle("A new application from: " + user.tag)
          .setDescription(`${user}  |  ${new Date()}`)
          .setFooter(user.id, user.displayAvatarURL({dynamic:true}))
          .setTimestamp()
          for(let i = 0; i < config.QUESTIONS1.length; i++){
              try{
                  embed.addField(config.QUESTIONS1[i], String(answers[i]).substr(0, 1024))
              }catch{
              }
          }
          channel_tosend.send(embed);
          user.send("Thanks for applying to: " + message.guild.name)
      }


  }

})
const fs = require("fs");
const { Client, Collection, DiscordAPIError } = require("discord.js");
const { id } = require("common-tags");

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('ready', () => {
    console.log(`Der Bot ${client.user.tag} ist jetzt online!`);
    function randomStatus() {
       let status = [`${config.prefix}help for help`, "Join now!", "M22 Germany", "Made by Pearl Bots™"]
       let rstatus = Math.floor(Math.random() * status.length);
       client.user.setActivity(status[rstatus],{type: "STREAMING",url: "https://youtu.be/hJHxAHweEbI"});
      };  setInterval(randomStatus, 30000)

   console.log('RichPresens is now activated!')
   })

   client.on("guildMemberAdd", member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '788522057280258065');
    if (!channel) return;
    let welcomeembed = new Discord.MessageEmbed()
    .setColor('#2f2ebf')
    .setDescription(`Welcome <@${member.id}> to M22 Germany!`)
    .setAuthor("Welcome to the Server!")
    .setFooter(`${config.prefix}help for Help!`)
    member.roles.add('788555239267500052')
    channel.send(welcomeembed);
  });
    client.on("guildMemberRemove", member => {
     const channel = member.guild.channels.cache.find(ch => ch.id === '817868780264620052');
      if (!channel) return;
      let leaveembed = new Discord.MessageEmbed()
      .setColor('#2f2ebf')
      .setDescription(`Bye <@${member.id}>!`)
      .setAuthor("Bye!")
      .setFooter(`${config.prefix}help for Help!`)
      channel.send(leaveembed);
  });


client.on("message", async message => {
    const prefix = (config.prefix);
    if (message.author.bot) return;
    if (!message.guild) return;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));


    if (command)
        command.run(client, message, args);



});

client.login(config.token);
