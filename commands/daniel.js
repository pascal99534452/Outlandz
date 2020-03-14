const discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {
     var botEmbed = new discord.RichEmbed()
         .setTitle("**Outlandz's Community**")
         .setDescription('Heeft het vaakst op de toilet spetterpoep!')
         .setFooter("Outlandz's Community", message.guild.iconURL).setTimestamp()
         .setColor('#ff0000');

     message.channel.send(botEmbed);

 }

 module.exports.help = {
     name: "daniel"
 }