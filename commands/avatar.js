const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var member = message.member.user.tag;
    
    var botEmbed = new discord.RichEmbed()
        .setTitle("**Avatar**")
        .setImage(message.author.displayAvatarURL)
        .setFooter("Excaid's Community", 'https://imgur.com/Z9RQQto').setTimestamp()
        .setColor('#ff0000');

    return message.channel.send(botEmbed);

}

module.exports.help = {
name: "avatar"
}