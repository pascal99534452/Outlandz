const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
        .setTitle("Bot Informatie")
        .addField("Bot Naam", bot.user.username)
        .setThumbnail(botIcon)
        .addField("Gemaakt op:", bot.user.createdAt)
        .setFooter("Minetopia Leaks", message.guild.iconURL).setTimestamp()
        .setColor('#bcd1ff');

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "botinfo"
}