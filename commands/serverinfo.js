const Discord = require('discord.js');

module.exports.run = (client, message, args) =>{

    function checkBots(guild) {
        let botCount = 0;
        guild.members.forEach(member => {
            if(member.user.bot) botCount++;
        });
        return botCount;
    }
    
    function checkMembers(guild) {
        let memberCount = 0;
        guild.members.forEach(member => {
            if(!member.user.bot) memberCount++;
        });
        return memberCount;
    }

    function checkOnlineUsers(guild) {
        let onlineCount = 0;
        guild.members.forEach(member => {
            if(member.user.presence.status === "online")
                onlineCount++; 
        });
        return onlineCount;
    }

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
        .setAuthor(`Minetopia Leaks - Informatie`)
        .setColor('#bcd1ff')
        .addField('Server eigenaar', message.guild.owner, true)
        .addField('Server regio', message.guild.region, true)
        .addField("Server Naam", message.guild.name)
        .addField('Aantal kanalen', message.guild.channels.size, true)
        .addField('Aantal gebruikers', message.guild.memberCount)
        .addField('Mensen', checkMembers(message.guild), true)
        .addField('Bots', checkBots(message.guild), true)
        .addField('Online', checkOnlineUsers(message.guild))
        .setFooter("Minetopia Leaks", message.guild.iconURL).setTimestamp()
        .setThumbnail(sicon);

    return message.channel.send(serverembed);

}

module.exports.help = {
    name: "serverinfo"
}