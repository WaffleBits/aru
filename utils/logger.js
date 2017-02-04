/**
 * Perhion Bot
 * Logger Script
 * Created: 1/6/17
 * Last Updated: 2/3/17
 * Author: PyroclasticMayhem#4093
 * Description: Print out messages to console when called for
 */

//Print to console when a command is used
var commandUsed = function commandUsed(bot, msg, command) { 
    console.log(new Date() + ":" + msg.author.username + "#" + msg.author.discriminator + " used the " + command + " command in #" + 
                msg.channel.name + " on the " + msg.channel.guild.name + " server.");
};

//Print to console when status is set
var statusUpdate = function statusUpdate(bot) { 
    console.log("Status has been set.");
};

//Print to console when stats posted
var statsSent = function statsSent(bot) { 
    console.log("Stats have been sent.");
};

//Print when bot joins a server
var guildJoin = function guildJoin(bot, guild) { 
    console.log("The bot has been added to " + guild);
};

//Print when bot leaves a server
var guildLeave = function guildLeave(bot, guild) { 
    console.log("The bot has been removed from " + guild);
};

module.exports = {
  commandUsed : commandUsed,
  statusUpdate : statusUpdate,
  statsSent : statsSent,
  guildJoin : guildLeave
};