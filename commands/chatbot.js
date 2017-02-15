/**
 * Perhion Bot
 * Chatbot Script
 * Created: 2/4/17
 * Last Updated: 2/4/17
 * Description: Program-O Chatbot
 */

//Set up modules and files
const axios = require("axios"),
      logger = require("../utils/logger.js");

module.exports = function (bot) {
    //Chat Command
    bot.registerCommand("c", (msg, args) => {
        //Try the command
        try {
            //Get from Program-O
        	axios.get(`http://api.program-o.com/v2/chatbot/?bot_id=6&say=${args}&convo_id=discordbot_1&format=json`)
        	.then(function(response){
        	    bot.createMessage(msg.channel.id, "**" + msg.author.username + "#" + msg.author.discriminator + ":** " + response.data.botsay.replace("Program-O", bot.user.username));
        	})
        } catch (err) {
            console.log(err.message);
            return;
        }
        //Print the info that the command was used to the console
        var command = "Chat";
        logger.commandUsed(bot, msg, command);
    });
};