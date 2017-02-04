/**
 * Perhion Bot
 * Guild Create Script
 * Created: 2/3/17
 * Last Updated: 2//17
 * Description: Guild Create Event
 */
 
//Set up modules and files
const logger = require("../utils/logger.js"),
      statusManager = require("../utils/statusManager.js");

module.exports = function (bot, guild) {
    statusManager.postStats(bot);
    logger.guildJoin(bot, guild);
};
