const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready',async()=>{
  console.log(`Bot has started in ${client.guilds.cache.size} servers with ${client.users.cache.size} members and ${client.channels.cache.size} channels`)
})

client.on('message',async(message)=>{
    if(message.channel.id === '691580355672670248'){
        message.member.setNickname(message.content).then(message.react(message.guild.emojis.cache.get('726419799176904757')));
    }
})
client.login(process.env.BOT_TOKEN)
