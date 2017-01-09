<p align="center">
  <img src="https://github.com/PyroclasticMayhem/perhionbot/blob/master/perhion.png?raw=true"/ height="200px" width="200px">
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
    "_header1": "########Bot Information############",
    "prefix": "!",
    "bot_owner": "",
    "homepage": "",
    "description": "",
    "_header2": "########Bot Status############",
    "game_name": "",
    "streaming_status": false,
    "stream_url": "",
    "_header3": "########Tracking Keys############",
    "discord_pw_post": false,
    "discord_pw_key": "",
    "carbonitex_post": false,
    "carbonitex_key": "",
    "_header3": "########Discord Token############",
    "token": ""
}
```
`prefix` The prefix the bot will use. Space automaticly applied between between the prefix and the command.<br>
`bot_owner` Your Discord ID. Mainly for eval command coming later.<br>
`homepage` A website for the bot.<br>
`description` A description for the bot.<br>
`game_name` Name of the game the bot is set to play.<br>
`streaming_status` If set to use the streaming status.<br>
`stream_url` Twitch URL to stream.<br>
`discord_pw_post` If using discord.pw<br>
`discord_pw_key` The key for discord.pw<br>
`carbonitex_post` If using Carbonitex<br>
`carbonitex_key` The key for Carbonitex<br><br>
`token` The token for the bot<br>
3: Install the latest version of Node<br>
4: Run `node start.js`<br>
5: Profit
## Adding a Command
1: Create a new file in commands ending in .js<br>
2: Edit the main script to include the new file
```javascript
//Load Commands
var Info = require("./commands/info.js"),
    CustomCommand = require("./commands/CustomCommand.js");
```
3: Call for the new file with necessary args to send
```javascript
//Load the commands
Info(Bot, BotHomepage, PREFIX, BotDescription);
CustomCommand(Bot);
```
4: Add this in new file
```javascript
/**
 * Perhion Bot
 * Custom Command
 * Created:
 * Last Updated:
 * Author:
 * Description:
 */
//Load Console Debug File
var Console = require("../utils/console.js");

module.exports = function (Bot) {
    //Ping Command
    Bot.registerCommand("printhi", (msg) => {
        //Create the Message
        Bot.createMessage(msg.channel.id, "Hi!");
        
        //Print the info that the command was used to the console
        var Command = "PrintHi";
        Console.CommandUsed(Bot, msg, Command);
    });
};
```
