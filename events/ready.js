/**
 * Perhion Bot
 * Ready Event Script
 * Created: 2/3/17
 * Last Updated: 2/3/17
 * Description: Ready Event
 */
 
//Set up modules and files
const statusManager = require("../utils/statusManager.js");

module.exports = function (bot) {
    //Post bot info to console
    console.log("Bot" + " is currently logged in as " + bot.user.username + "#" + bot.user.discriminator +
    ".\n" + "Currently on " + bot.guilds.size + " servers and serving " + bot.users.size + " users.");
    
    //Set the status for bot
    statusManager.setStatus(bot);
                            
    //Post stats to sites
    statusManager.postStats(bot);
};
