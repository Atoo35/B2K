const config = require("../config.json");

exports.run = async (client, message) => {
    if(message.channel.id === '691580355672670248'){
        message.member.setNickname(message.content).then(message.react(message.guild.emojis.cache.get('840190149434146886')));
        return;
    }
    if(!message.content.startsWith(config.PREFIX)) return;
    var command = message.content.split(" ")[0].slice(config.PREFIX.length);
    // Get the params in an array of arguments to be used in the bot
  
    var params = message.content.split(" ").slice(1);
    // run the `elevation` function to get the user's permission level
  
    let cmd;
    if (client.commands.has(command)) {
        // Assign the command, if it exists in Commands
        cmd = client.commands.get(command)
      // Check if the command exists in Aliases
      } else if (client.aliases.has(command)) {
        // Assign the command, if it exists in Aliases
        cmd = client.commands.get(client.aliases.get(command));
      }
    
    if(cmd) cmd.run(client,message,params)
}