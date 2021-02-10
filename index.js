require('dotenv').config()
const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require("fs");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


client.on('ready',async()=>{
  console.log(`Bot has started in ${client.guilds.cache.size} servers with ${client.users.cache.size} members and ${client.channels.cache.size} channels`)
})

fs.readdir("./commands/", (err, files) => {
  if (err) throw err;

  let jsFiles = files.filter(f => f.split(".").pop() === "js");

  jsFiles.forEach(f => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
    if(props.help.aliases){
      props.help.aliases.forEach(alias =>{
        client.aliases.set(alias,props.help.name)

      })
   }
   console.log(`Successfully loaded ${f}`)
  });
});

fs.readdir('./events/', (err, files) => {
  if (err) console.log(err);
  files.forEach(file => {
      let eventFunc = require(`./events/${file}`);
      console.log("Successfully loaded " + file)
      let eventName = file.split(".")[0];
      client.on(eventName, (...args) => eventFunc.run(client, ...args));
  });
});
client.login(process.env.BOT_TOKEN)
