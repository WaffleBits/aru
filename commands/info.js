/**
 * Perhion Bot
 * Info Bot Script
 * Created: 1/6/17
 * Last Updated: 1/6/17
 * Author: PyroclasticMayhem#4093
 * Description: Stores bot information commands such as the help, ping, and about command
 */

//Load Console Debug File
var Console = require("../utils/console.js");

module.exports = function (Bot, BotHomepage, PREFIX, BotDescription) {
    //Help Command
    Bot.registerCommand("help", (msg) => {
        //The Embed for the Message
        let embed = {
            color: 16765404,
            author: {
                name: Bot.user.username,
                icon_url: Bot.user.avatarURL,
                url: BotHomepage
            },
            title: "Commands:",
            description: 
                         `**Info Commands:**\n` +
                         `**${PREFIX}help** - This help menu\n` +
                         `**${PREFIX}ping** - Get bot stats\n` + 
                         `**${PREFIX}about** - Get information about the bot\n\n` +
                         `**Profiler Commands:**\n` +
                         `**${PREFIX}profile @UserName** - Get user details\n` +
                         `**${PREFIX}serverinfo** - Get info about the server\n\n` +
                         `**Anime Commands:**\n` +
                         `**${PREFIX}anime animename** - Get information about an anime via kitsu.io\n` +
                         `**${PREFIX}manga manganame** - Get information about a manga via kitsu.io\n\n` +
                         `**IMDb Commands:**\n` +
                         `**${PREFIX}movie moviename** - Get information about a movie via IMDb\n\n` +
                         `**Game Info Commands:**\n` +
                         `**${PREFIX}ow username platform region** - Get information from a Overwatch profile. Replace username with Battletag, platform with pc, xbl, or psn, and region with eu, kr, us, global, cn\n\n`,
            timestamp: new Date(),
            footer: {
                icon_url: Bot.user.avatarURL,
                text: Bot.user.username
            }
        };
    
        //Create the Message
        Bot.createMessage(msg.channel.id, {embed: embed});
        
        //Print the info that the command was used to the console
        var Command = "Help";
        Console.CommandUsed(Bot, msg, Command);
    });
    
    //About Command
    Bot.registerCommand('about', (msg) => {
        let embed = {
            color: 16765404,
            author: {
                name: Bot.user.username,
                icon_url: Bot.user.avatarURL,
                url: BotHomepage
            },
            title: "Description:",
            description: BotDescription,
            thumbnail: {
            url: Bot.user.avatarURL
            },
            timestamp: new Date(),
            footer: {
                icon_url: Bot.user.avatarURL,
                text: Bot.user.username
            }
        };
        Bot.createMessage(msg.channel.id, {embed: embed});
        
        //Print the info that the command was used to the console
        var Command = "About";
        Console.CommandUsed(Bot, msg, Command);
    });

    //Ping Command
    Bot.registerCommand("ping", (msg) => {
        //Create the Message
        Bot.createMessage(msg.channel.id, "Pong! " + Bot.user.username + " is currently on " + Bot.guilds.size + " servers and serving " + Bot.users.size + " users.");
        
        //Print the info that the command was used to the console
        var Command = "Ping";
        Console.CommandUsed(Bot, msg, Command);
    });
};