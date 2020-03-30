const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var links = new discord.RichEmbed()
        .setTitle("Youtube:")
        .setColor('#bcd1ff')
        .setDescription("Klik op de onderste blauwe tekst om mijn Youtube kanaal te bezoeken! \n\n [Klik hier](https://www.youtube.com/channel/UC0cUxMS_Aa7uhQHGMUgV1hg)")
        .setFooter("Minetopia Leaks", message.guild.iconURL).setTimestamp()

        message.channel.send(links)
}

module.exports.help = {
    name: "links"
}