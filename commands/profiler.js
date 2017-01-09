/**
 * Perhion Bot
 * Profiler Bot Script
 * Created: 1/6/17
 * Last Updated: 1/6/17
 * Author: PyroclasticMayhem#4093
 * Description: Grabs user info and server info
 */

//Load Console Debug File
var Console = require("../utils/console.js");

module.exports = function (Bot, MOMENT) {
    //Profile Command
    Bot.registerCommand("profile", (msg) => {
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
        			value: MOMENT(User.joinedAt).utc().format("ddd MMM DD YYYY | kk:mm:ss") + " " + (MOMENT(User.joinedAt).fromNow()),
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
        			value: MOMENT(User.user.createdAt).utc().format("ddd MMM DD YYYY | kk:mm:ss") + " " + MOMENT(User.user.createdAt).fromNow(),
        			inline: true
        		}
        	],
        	timestamp: new Date(),
            footer: {
                icon_url: Bot.user.avatarURL,
                text: Bot.user.username
            }
        };
    
        //Create the Message
        Bot.createMessage(msg.channel.id, {embed: embed});
        
        //Print the info that the command was used to the console
        var Command = "Profile (on " + User.user.username + "#" + User.user.discriminator + ")";
        Console.CommandUsed(Bot, msg, Command);
    });
    
    //Server Information Command
    Bot.registerCommand("serverinfo", (msg) => {
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
    				value: MOMENT(Server.createdAt).utc().format("ddd MMM DD YYYY | kk:mm:ss") + " " + MOMENT(Server.createdAt).fromNow(),
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
                icon_url: Bot.user.avatarURL,
                text: Bot.user.username
            }
        };
    
        //Create the Message
        Bot.createMessage(msg.channel.id, {embed: embed});
        
        //Print the info that the command was used to the console
        var Command = "Server (in " + msg.guild.name + ")";
        Console.CommandUsed(Bot, msg, Command);
    });
};
