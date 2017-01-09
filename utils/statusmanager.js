/**
 * Perhion Bot
 * Status Manager Script
 * Created: 1/6/17
 * Last Updated: 1/6/17
 * Author: PyroclasticMayhem#4093
 * Description: Set the game status and post to tracking sites
 */

//Load Console Debug File
var Console = require("../utils/console.js");

//Set Status
var SetStatus = function SetStatus(Bot, GameName, StreamingStatus, StreamURL) {
    Bot.shards.forEach(shard => {
        //Test to see if game status is streaming or regular
        if (StreamingStatus == true) {
            shard.editStatus ({
                name: GameName,
                type: 1,
                url: StreamURL
            });
        }
        else {
            shard.editStatus ({
                name: GameName,
                type: 0
            });
        }
    });
    
    //Print completion to console
    Console.StatusUpdate(Bot);
};

//Post Stats to bots.discord.pw and Carbonitex
var PostStats = function PostStats(Bot, AXIOS, DiscordPWPostStatus, DiscordPWKey, CarbonitexPostStatus, CarbonitexKey) {
    //Test to see if Discord.PW posting is enabled and post if true
    if (DiscordPWPostStatus == true) {
        AXIOS ({
            method: "post",
            url: "https://bots.discord.pw/api/bots/" + Bot.user.id + "/stats",
            headers: {
                "Authorization": DiscordPWKey,
                "content-type": "application/json"
            },
            data: {
                "server_count": Bot.guilds.size
            }
        });
    }
    
    //Test to see if Carbonitex.net posting is enabled and post if true
    if (CarbonitexPostStatus == true) {
        AXIOS ({
            method: "post",
            url: "https://www.carbonitex.net/discord/data/botdata.php",
            headers: {
                "content-type": "application/json"
            },
            data: {
                "key": CarbonitexKey,
                "servercount": Bot.guilds.size
            }
        });
    }
    
    //Print completion to console
    Console.StatsSent(Bot);
};

module.exports = {
  SetStatus : SetStatus,
  PostStats : PostStats
};
