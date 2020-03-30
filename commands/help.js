const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
        .setTitle("Minetopia Leaks - Help")
        .setDescription("**!members** - Laat het aantal server leden zien! \n **!botinfo** - Laat informatie zien van de bot! \n **!ban** - Verban een gebruiker! \n **!kick** - Verwijder een gebruiker! \n **!ticket** - Maak een prive kanaal aan met staffleden! \n **!close** - Sluit een ticket! \n **!serverinfo** - Laat informatie zien van de discord server! \n **!avatar** - Laat je discord profiel foto zien! \n **!idee** - Plaats een idee! \n **!clear** - Verwijder berichten! \n **!say** - Laat de bot een bericht zeggen! \n **!flip** - Speel kop of munt! \n **!8ball** - Jij vraagt de bot antwoord ;)!")
        .setFooter("Minetopia Leaks", message.guild.iconURL).setTimestamp()
        .setColor('#bcd1ff');

    return message.channel.send(botEmbed);

}

module.exports.help = {
name: "help"
}