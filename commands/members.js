const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL

    var memberCount = message.guild.memberCount
   
    var botEmbed = new discord.RichEmbed()
        .setTitle("Aantal Discord Leden:")
        .addField("Leden:", memberCount)
        .setThumbnail(botIcon)
        .setFooter("Minetopia Leaks", message.guild.iconURL).setTimestamp()
        .setColor('#bcd1ff')

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "members"
}