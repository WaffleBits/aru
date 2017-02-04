/**
 * Perhion Bot
 * Overwatch Bot Script
 * Created: 1/7/17
 * Last Updated: 2/3/17
 * Description: Overwatch related commands
 */

//Set up modules and files
const axios = require("axios"),
      logger = require("../utils/logger.js");

module.exports = function (bot) {
    //Movie Command
    bot.registerCommand("ow", (msg, args) => {
        //Try the command
        try {
            //Assign args to a variable
            var Username = args[0].replace("#","-"); //Change the # to - based on API
            var Platform = args[1];
            var Region = args[2];
            
            //Get from Overwatch API
        	axios.get("https://api.lootbox.eu/" + Platform + "/" + Region + "/" + Username + "/profile")
        	.then(function(response){
        	    //The Embed for the Message
        		let embed = {
        			author: {
        				name: response.data.data.username,
        				icon_url: "https://pbs.twimg.com/profile_images/538246909664559104/oeOj9DtM.png",
        				url: "http://masteroverwatch.com/profile/" + Platform + "/" + Region + "/" + Username
        			},
        			title: "Overwatch Information:",
        			color: 16765404,
        			fields: [ //Strings only
        				{
        					name: "Level",
        					value: response.data.data.level != null ? response.data.data.level : "0",
        					inline: true
        				},
        				{
        					name: "Quick Wins",
        					value: response.data.data.games.quick.wins != null ? response.data.data.games.quick.wins : "0",
        					inline: true
        				},
        				{
        					name: "Competitive Wins",
        					value: response.data.data.competitive.wins != null ? response.data.data.competitive.wins : "0",
        					inline: true
        				},
        				{
        					name: "Competitive Lost",
        					value: response.data.data.competitive.lost != null ? response.data.data.competitive.lost : "0",
        					inline: true
        				},
        			    {
        					name: "Playtime (Quick)",
        					value: response.data.data.playtime.quick != null ? response.data.data.playtime.quick : "0",
        					inline: true
        				},
        				{
        					name: "Playtime (Competitive)",
        					value: response.data.data.playtime.competitive != null ? response.data.data.playtime.competitive : "0",
        					inline: true
        				}
        			],
        			thumbnail: {
        			url: response.data.data.avatar != null ? response.data.data.avatar : ""
        			},
        			timestamp: new Date(),
        			footer: {
        				icon_url: bot.user.avatarURL,
        				text: bot.user.username
        			}
        		};
                
                //Create the Message
                bot.createMessage(msg.channel.guild.id, {embed: embed});
                
                //Print the info that the command was used to the console
                var command = "Overwatch (to search for " + args + ")";
                logger.commandUsed(bot, msg, command);
            });
        } catch (err) {
        console.log(err.message);
        return;
        }
    });
};
