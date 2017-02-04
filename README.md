<p align="center">
  <img src="https://github.com/perhion/perhionbot/blob/master/perhionbot.png?raw=true"/ height="200px" width="200px">
</p>
# Perhion Bot
A Discord Bot Powered by Eris.<br>
A pre-hosted version of the bot can be added to your server at:<br>
https://discordapp.com/oauth2/authorize?client_id=168080204063834112&scope=bot&permissions=0

## Setting Up
1: Download a copy of the bot<br>
2: Set up the config.json in the main directory with information the correct information following the guide below
```json
{
    "prefix": "!",
    "bot_owner": "",
    "homepage": "",
    "description": "",
    "game_name": "",
    "streaming_status": false,
    "stream_url": "",
    "time_format": "ddd MMM DD YYYY | kk:mm:ss",
    "discord_pw_post": false,
    "discord_pw_key": "",
    "carbonitex_post": false,
    "carbonitex_key": "",
    "token": ""
}
```
`prefix` The prefix the bot will use. Space automaticly applied between between the prefix and the command.<br>
`bot_owner` Your Discord ID.<br>
`homepage` A website for the bot.<br>
`description` A description for the bot.<br>
`game_name` Name of the game the bot is set to play.<br>
`streaming_status` If set to use the streaming status.<br>
`stream_url` Twitch URL to stream.<br>
`time_format` How time is displayed as.
`discord_pw_post` If using discord.pw<br>
`discord_pw_key` The key for discord.pw<br>
`carbonitex_post` If using Carbonitex<br>
`carbonitex_key` The key for Carbonitex<br>
`token` The token for the bot<br>
3: Install the latest version of Node<br>
4: Run `npm install && node bot.js`<br>
5: Profit
## Adding a Command
1: Create a new file in the commands folder ending in .js<br>
2: Use this as a template for your new command
```javascript
/**
 * Perhion Bot
 * Custom Command
 * Created:
 * Last Updated:
 * Author:
 * Description:
 */
 
//Set up modules and files
const logger = require("../utils/logger.js");

module.exports = function (bot) {
    //Ping Command
    bot.registerCommand("printhi", (msg) => {
        //Create the Message
        bot.createMessage(msg.channel.id, "Hi!");
        
        //Print the info that the command was used to the console
        var command = "PrintHi";
        logger.commandUsed(bot, msg, command);
    });
};
```
