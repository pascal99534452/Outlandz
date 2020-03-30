const discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {

  var sluitEmbed = new discord.RichEmbed()
                .setTitle("Minetopia Leaks")
                .setColor('#bcd1ff')
                .addField("Weet u zeker dat u dit ticket wilt sluiten? Om te bevestigen stuur:", "-bevestig")
                .setFooter("Minetopia Leaks", message.guild.iconURL).setTimestamp()
 
   const categoryId = "686844611968237568";

    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryId) {

        message.channel.delete();

    } else {

        message.channel.send(":no_entry: | Dit commando werkt alleen in een ticket!");

    }

    message.channel.send(sluitEmbed)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '-bevestig', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket sluit time-out, het ticket is niet gesloten!').then(m2 => {
              m2.delete();
          }, 4000);
        });
    });
}
module.exports.help = {
	name: "close"
}