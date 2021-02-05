require('dotenv').config()
const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready',async()=>{
  console.log(`Bot has started in ${client.guilds.cache.size} servers with ${client.users.cache.size} members and ${client.channels.cache.size} channels`)
})

client.on('message',async(message)=>{
    if(message.channel.id === '799690707471827017'){
        message.member.setNickname(message.content).then(message.react(message.guild.emojis.cache.get('802340993864957994')))
    }
})
client.login(process.env.BOT_TOKEN)
