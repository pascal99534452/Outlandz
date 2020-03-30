const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

        const user = message.mentions.users.first() || message.author;

        const avatarEmbed = new Discord.RichEmbed()
            .setColor('#bcd1ff')
            .setTitle("**Avatar**")
            .setImage(user.avatarURL)
            .setFooter("Minetopia Leaks", message.guild.iconURL).setTimestamp();
        message.channel.send(avatarEmbed);
    
    

}

module.exports.help = {
    name: "avatar"
}