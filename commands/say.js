const Discord = require('discord.js');
const config = require('../config.json')
exports.run = async(client,message,args)=>{
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    let annouceEmbed = new Discord.MessageEmbed()
        .setDescription(sayMessage)
        .setColor("RED")
        .setAuthor(config.author,client.user.displayAvatarURL())
        .setTimestamp()
        .setFooter(config.footer);
    message.channel.send({embed:annouceEmbed});
   
}

exports.help = {
name : "say",
description: "Make the bot say a message",
aliases: ["speak","bark","echo"],
usage: process.env.PREFIX+"say/alias <message>",
permissions:false,
category:'general'
};
