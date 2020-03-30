const discord = require('discord.js');
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // !warn @gebruiker reden

   if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("U heeft niet deze permissies!").then(msg => msg.delete(1000));

   var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

   if(!user) return message.channel.send("Geen gebruiker gevonden.").then(msg => msg.delete(1000));

   if(user.hasPermission("KICK_MEMBERS")) return message.channel.send("Deze persoon kan niet gewaarschuwd worden!").then(msg => msg.delete(1000));

   var reason = args.join(" ").slice(22);

   if(!reason) return message.channel.send("Geen reden gevonden!").then(msg => msg.delete(1000));

   if(!warns[user.id]) warns[user.id] = {
       warns: 0
   };

   warns[user.id].warns++;

   fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
       if(err) console.log(err);
   });

   var warnEmbed = new discord.RichEmbed()
   .setTitle("Waarschuwing")
   .setColor('#bcd1ff')
   .addField("Gewaarschuwd persoon", user)
   .addField("Gewaarschuwd door", message.author)
   .addField("Aantal waarschuwingen", warns[user.id].warns)
   .addField("Reden", reason)
   .setFooter("Minetopia Leaks", message.guild.iconURL).setTimestamp()

    var warnChannel = message.guild.channels.find(c => c.name === "⛔・logs");
    if (!warnChannel) return message.channel.send("Kan het kanaal niet vinden!").then(msg => msg.delete(1000));

    message.channel.send(warnEmbed).then(warnChannel.send(warnEmbed));

    if(warns[user.id].warns == 3){

        var warnsBericht = new discord.RichEmbed()
        .setTitle("Aantal Waarschuwingen")
        .setColor('#ff0000')
        .addField("Let op", user)
        .addField("Nog één warn en je zult worden verbannen uit de discord server.")
        .setFooter("Minetopia Leaks", message.guild.iconURL).setTimestamp()

        message.channel.send(warnsBericht);

    } else if(warns[user.id].warns == 4){

        message.guild.member(user).ban(reason);
        message.channel.send(`${user} is verbannen.`)


    }



}

module.exports.help = {
    name: "warn"
}