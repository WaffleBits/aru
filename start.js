/**
 * Perhion Bot
 * Main Bot Script
 * Created: 12/10/16
 * Last Updated: 1/8/17
 * Author: PyroclasticMayhem#4093
 * Description: Loads other bot files and starts the bot
 */

//Load Dependencies
const ERIS = require("eris"),
      AXIOS = require("axios"),
      MOMENT = require("moment");

//Load Configs
const CONFIG = require("./config.json"),
      PACKAGE = require("./package.json");

//Load Essential Utils
const STATUSMANAGER = require("./utils/statusmanager.js"),
      CONSOLE = require("./utils/console.js");

//Load Commands
var Info = require("./commands/info.js"),
    Profiler = require("./commands/profiler.js"),
    Anime = require("./commands/anime.js"),
    Imdb = require("./commands/imdb.js"),
    Overwatch = require("./commands/overwatch.js");

//Define Prefix
const PREFIX = CONFIG.prefix + " "; //The blank space is to allow a space between prefix and command such as !bot commandname;

//Define Variables for Bot Info
var BotDescription = CONFIG.description,
    BotHomepage = CONFIG.homepage,
    BotOwner = CONFIG.bot_owner;
    
//Define Variables for Setting Status
var GameName = CONFIG.game_name,
    StreamingStatus = CONFIG.streaming_status,
    StreamURL = CONFIG.game_name;

//Define Variables for Posting Status
var DiscordPWPostStatus = CONFIG.discord_pw_post,
    DiscordPWKey = CONFIG.discord_pw_key,
    CarbonitexPostStatus = CONFIG.carbonitex_post,
    CarbonitexKey = CONFIG.carbonitex_key;

//Assign Eris
var Bot = new ERIS.CommandClient(CONFIG.token, {}, {
    description: BotDescription,
    owner: BotOwner,
    defaultHelpCommand: false,
    prefix: PREFIX
});

//Listen for server join and leave and post stats
//Server Add Event
Bot.on("guildCreate", guild => {
    STATUSMANAGER.PostStats(Bot, AXIOS, DiscordPWPostStatus, DiscordPWKey, CarbonitexPostStatus, CarbonitexKey);
    //CONSOLE.GuildJoin(Bot, guild); - Not working atm
});

//Server Remove Event
Bot.on("guildDelete", guild => {
    STATUSMANAGER.PostStats(Bot, AXIOS, DiscordPWPostStatus, DiscordPWKey, CarbonitexPostStatus, CarbonitexKey);
   // CONSOLE.GuildLeave(Bot, guild); - Not working atm
});

//Ready Event
Bot.on("ready", () => {
    //Post bot info to console
    console.log("PerhionBot" + " is currently logged in as " + Bot.user.username + "#" + Bot.user.discriminator +
    ".\n" + "Currently on " + Bot.guilds.size + " servers and serving " + Bot.users.size + " users.");
    
    //Set the status for bot
    STATUSMANAGER.SetStatus(Bot, GameName, StreamingStatus, StreamURL);
                            
    //Post stats to sites
    STATUSMANAGER.PostStats(Bot, AXIOS, DiscordPWPostStatus, DiscordPWKey, CarbonitexPostStatus, CarbonitexKey);
    
    //Load the commands
    Info(Bot, BotHomepage, PREFIX, BotDescription);
    Profiler(Bot, MOMENT);
    Anime(Bot, AXIOS);
    Imdb(Bot, AXIOS);
    Overwatch(Bot, AXIOS);
});

//Connect to Discord
Bot.connect();
