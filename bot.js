/**
 * Perhion Bot
 * Main Bot Script
 * Created: 12/10/16
 * Last Updated: 2/3/17
 * Description: Loads other bot files and starts the bot
 */

//Set up modules and files
const eris = require("eris");
const fs = require("fs");
const config = require("./config.json");
const events = {
	ready: require("./events/ready.js"),
    guildCreate: require("./events/guildCreate.js"),
    guildDelete: require("./events/guildDelete.js")
};

//Define Prefix
const prefix = config.prefix;

//Assign Eris
var bot = new eris.CommandClient(config.token, {}, {
    defaultHelpCommand: false,
    prefix: prefix
});

//Ready Event
bot.on("ready", () => {
    events.ready(bot);
    //Get name of files in the folder
    fs.readdir(__dirname + "/./commands/", (err, commands) => {
        //For each file run the function
        commands.forEach(command => {
            const realCommandz = require(__dirname + "/./commands/" + command);
            realCommandz(bot);
        });
    })
});

//Server Add Event
bot.on("guildCreate", guild => {
    events.guildCreate(bot);
});

//Server Remove Event
bot.on("guildDelete", guild => {
    events.guildDelete(bot);
});

//Connect to Discord
bot.connect();
