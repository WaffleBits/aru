/**
 * Perhion Bot
 * Status Manager Script
 * Created: 1/6/17
 * Last Updated: 2/3/17
 * Description: Set the game status and post to tracking sites
 */
 
//Set up modules and files
const config = require("../config.json"),
      logger = require("../utils/logger.js"),
       axios = require("axios");

//Define Variables for Setting Status
var gameName = config.game_name,
    streamingStatus = config.streaming_status,
    streamURL = config.game_name;

//Define Variables for Posting Status
var discordPWPostStatus = config.discord_pw_post,
    discordPWKey = config.discord_pw_key,
    carbonitexPostStatus = config.carbonitex_post,
    carbonitexKey = config.carbonitex_key;

//Set Status
var setStatus = function setStatus(bot) {
    bot.shards.forEach(shard => {
        //Test to see if game status is streaming or regular
        if (streamingStatus == true) {
            shard.editStatus ({
                name: gameName,
                type: 1,
                url: streamURL
            });
        }
        else {
            shard.editStatus ({
                name: gameName,
                type: 0
            });
        }
    });
    
    //Print completion to console
    logger.statusUpdate(bot);
};

//Post Stats to bots.discord.pw and Carbonitex
var postStats = function postStats(bot) {
    //Test to see if Discord.PW posting is enabled and post if true
    if (discordPWPostStatus == true) {
        axios ({
            method: "post",
            url: "https://bots.discord.pw/api/bots/" + bot.user.id + "/stats",
            headers: {
                "Authorization": discordPWKey,
                "content-type": "application/json"
            },
            data: {
                "server_count": bot.guilds.size
            }
        });
    }
    
    //Test to see if Carbonitex.net posting is enabled and post if true
    if (carbonitexPostStatus == true) {
        axios ({
            method: "post",
            url: "https://www.carbonitex.net/discord/data/botdata.php",
            headers: {
                "content-type": "application/json"
            },
            data: {
                "key": carbonitexKey,
                "servercount": bot.guilds.size
            }
        });
    }
    
    //Print completion to console
    logger.statsSent(bot);
};

module.exports = {
  setStatus : setStatus,
  postStats : postStats
};
