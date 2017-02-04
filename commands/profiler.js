/**
 * Perhion Bot
 * Profiler Bot Script
 * Created: 1/6/17
 * Last Updated: 2/3/17
 * Description: Grabs user info and server info
 */
 
//Set up modules and files
const config = require("../config.json"),
      logger = require("../utils/logger.js"),
      moment = require("moment");
      
//Define Variables for Bot Info
var timeFormat = config.time_format;

module.exports = function (bot) {
    //Profile command
    bot.registerCommand("profile", (msg) => {
        //Assign a User
        var User;
        if (0 == msg.mentions.length) {
            return;
        }
        else {
    	    User = msg.channel.guild.members.get(msg.mentions[0].id);
        }
        
        //The Embed for the Message
        let embed = {
        	author: {
        		name: User.user.username + "#" + User.user.discriminator,
        		icon_url: User.user.avatarURL,
        		url: User.user.avatarURL
        	},
        	title: "User Information:",
        	color: 16765404,
        	fields: [
        		{
        		    name: "Nickname",
        			value: User.nick !== null ? User.nick : "None",
        			inline: true
        		}, 
        		{
        			name: "Playing",
        			value: User.game !== null ? User.game.name : "Currently not Playing",
        			inline: true
        		}, 
        		{
        			name: "Join Date",
        			value: moment(User.joinedAt).utc().format(timeFormat) + " " + (moment(User.joinedAt).fromNow()),
        			inline: true
        		}, 
        		{
        			name: "User ID",
        			value: User.id,
        			inline: true
        		}, 
        		{
        			name: "Status",
        			value: User.status,
        			inline: true
        		}, 
        		{
        			name: "Creation Date",
        			value: moment(User.user.createdAt).utc().format(timeFormat) + " " + moment(User.user.createdAt).fromNow(),
        			inline: true
        		}
        	],
        	timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: bot.user.username
            }
        };
    
        //Create the Message
        bot.createMessage(msg.channel.id, {embed: embed});
        
        //Print the info that the command was used to the console
        var command = "Profile (on " + User.user.username + "#" + User.user.discriminator + ")";
        logger.commandUsed(bot, msg, command);
    });
    
    //Server Information command
    bot.registerCommand("serverinfo", (msg) => {
        if(msg.channel == msg.channel.PrivateChannel) return;
        var Server = msg.guild;
        let embed = {
    		author: {
    			name: Server.name,
    			icon_url: Server.iconURL,
    			url: Server.iconURL
    		},
    		title: "Server Information:",
    		color: 16765404,
    		fields: [
    			{
    				name: "ID",
    				value: Server.id,
    				inline: true
    			}, 
    			{
    				name: "Member Count",
    				value: Server.memberCount,
    				inline: true
    			}, 
    			{
    				name: "Verification Level",
    				value: Server.verificationLevel,
    				inline: true
    			}, 
    			{
    				name: "Creation Date",
    				value: moment(Server.createdAt).utc().format(timeFormat) + " " + moment(Server.createdAt).fromNow(),
    				inline: true
    			}, 
    			{
    			    name: "AFK Channel ID",
    			    value: Server.afkChannelID !== null ? Server.afkChannelID : "None",
    			    inline:true
    			},
    			{
    				name: "Region",
    				value: Server.region,
    				inline: true
    			}
    		],
    		thumbnail: {
            url: Server.iconURL
            },
    		timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: bot.user.username
            }
        };
    
        //Create the Message
        bot.createMessage(msg.channel.id, {embed: embed});
        
        //Print the info that the command was used to the console
        var command = "Server (in " + msg.guild.name + ")";
        logger.commandUsed(bot, msg, command);
    });
};
