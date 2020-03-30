const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    
        var banUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

        if (!banUser) return message.channel.send("Gebruiker niet gevonden!").then(msg => msg.delete(1000));

        var reason = args.join(" ").slice(22);

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry: | U heeft niet deze permissies!").then(msg => msg.delete(1000));

        if (banUser.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry: | U kunt deze persoon niet verbannen!").then(msg => msg.delete(1000));

        var ban = new discord.RichEmbed()
            .setTitle("Ban Systeem")
            .setColor('#bcd1ff')
            .addField("Verbannen persoon", banUser)
            .addField("Gebanned door", message.author)
            .addField("Reden", reason)
            .setFooter("Minetopia Leaks", message.guild.iconURL).setTimestamp()

        var banChannel = message.guild.channels.find(c => c.name === "⛔・logs");
        if (!banChannel) return message.channel.send("Kan het logs kanaal niet vinden!").then(msg => msg.delete(1000));

        message.guild.member(banUser).ban(reason).then(e => banChannel.send(ban)).catch(e => message.channel.send("Error: " + e));

}

module.exports.help = {
    name: "ban"
}