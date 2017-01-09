/**
 * Perhion Bot
 * Console Info Script
 * Created: 1/6/17
 * Last Updated: 1/6/17
 * Author: PyroclasticMayhem#4093
 * Description: Print out messages to the console when called for
 */

//Print to console when a command is used
var CommandUsed = function CommandUsed(Bot, msg, Command) { 
    console.log(msg.author.username + "#" + msg.author.discriminator + " used the " + Command + " command in #" + 
                msg.channel.name + " on the " + msg.guild.name + " server.");
};

//Print to console when status is set
var StatusUpdate = function StatusUpdate(Bot) { 
    console.log("Status has been set.");
};

//Print to console when stats posted
var StatsSent = function CommandUsed(Bot) { 
    console.log("Stats have been sent.");
};

//Print when bot joins a server
var GuildJoin = function CommandUsed(Bot, guild) { 
    console.log("The bot has been added to " + guild);
};

//Print when bot leaves a server
var GuildLeave = function CommandUsed(Bot, guild) { 
    console.log("The bot has been removed from " + guild);
};

module.exports = {
  CommandUsed : CommandUsed,
  StatusUpdate : StatusUpdate,
  StatsSent : StatsSent
};