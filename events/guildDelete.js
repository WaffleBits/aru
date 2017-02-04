/**
 * Perhion Bot
 * Guild Delete Script
 * Created: 2/3/17
 * Last Updated: 2/3/17
 * Description: Guild Delete Event
 */
 
//Set up modules and files
const logger = require("../utils/logger.js"),
      statusManager = require("../utils/statusManager.js");

module.exports = function (bot, guild) {
    statusManager.ostStats(bot);
    logger.guildLeave(bot, guild);
};
