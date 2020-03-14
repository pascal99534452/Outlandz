const Discord = require("discord.js");
const ms = require("ms");
const customisation = require('../customisation.json');

module.exports.run = async (bot, message, args) => {

    let tomute = message.mentions.users.first() || message.guild.members.get(args[0]);
    if(!tomute) return message.reply("Ik kan die chappie niet vinden.");
    if(message.author.id === message.mentions.users.first()) return message.reply("Je kan jezelf niet muten pannenkoek!");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":no_entry: | Jij hebt geen permissies hiervoor!");
    let muteRole = message.guild.roles.find(`name`, "Muted");
    if (!muteRole) {
        try {
            muteRole = await message.guild.createRole({
                name:"Muted",
                color: "#000000",
                permissions:[]
            });
    
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muteRole, {
                    SEND_MESSAGES: false,
                    MANAGE_MESSAGES: false,
                    READ_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    }
    let mutetime = args[1];
    if(!mutetime) return message.reply("Je moet wel een tijd invullen.");
    
    const embed = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('**Mute**')
    .addField('User:', `${tomute.username}#${tomute.discriminator}`)
    .addField('Moderator:', message.author)
    .addField('Tijd:', ms(ms(mutetime)))
    .setFooter("Outlandz's Community", message.guild.iconURL).setTimestamp()
    message.channel.send({embed});

    message.guild.member(tomute).addRole(muteRole);

    setTimeout(function(){
        message.guild.member(tomute).removeRole(muteRole)
        message.channel.send(`<@${tomute.id}> is geunmute!`)
    }, ms(mutetime));
}

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tempmute','tempm'],
    permLevel: 0
  };
  
  module.exports.help = {
    name: 'mute',
    description: 'Temporary mute the mentioned user',
    usage: 'mute @user (time)'
  };