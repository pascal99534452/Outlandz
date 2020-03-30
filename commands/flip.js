const discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {
     var kop = new discord.RichEmbed()
         .setTitle("Kop of Munt")
         .setDescription("Het is kop!")
         .setFooter("Minetopia Leaks", message.guild.iconURL).setTimestamp()
         .setColor('#bcd1ff')

     var munt = new discord.RichEmbed()
         .setTitle("Kop of Munt")
         .setDescription("Het is Munt!")
         .setFooter("Minetopia Leaks", message.guild.iconURL).setTimestamp()
         .setColor('#bcd1ff')
     var result = Math.floor((Math.random() * 2) + 1);
     if (result == 1) {
         message.channel.send(kop)
     } else if (result == 2) {
         message.channel.send(munt)
     }
 }

 module.exports.help = {
     name: "flip"
 }