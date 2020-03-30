const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("U heeft niet deze permissies!");

    var text = args.slice(0).join(" ");
    message.delete()
    
    var sayEmbed = new Discord.RichEmbed()
        .setDescription(text)
        .setColor("#bcd1ff")
        .setFooter("Minetopia Leaks", message.guild.iconURL).setTimestamp()
    return message.channel.send(sayEmbed);

}
module.exports.help = {
    name: "say"
}