/**
 * Perhion Bot
 * Anime Bot Script
 * Created: 1/6/17
 * Last Updated: 1/7/17
 * Author: PyroclasticMayhem#4093
 * Description: Anime related commands
 */

//Load Console Debug File
var Console = require("../utils/console.js");

module.exports = function (Bot, AXIOS) {
    //Anime Command
    Bot.registerCommand("anime", (msg, args) => {
        //Try the command
        try {
            //Get from Kitsu.io
        	AXIOS.get("https://kitsu.io/api/edge/anime?filter[text]=" + args)
        	.then(function(response){
        	    //The Embed for the Message
        		let embed = {
        			author: {
        				name: response.data.data[0].attributes.titles.en,
        				icon_url: "https://pbs.twimg.com/profile_images/807964865511862278/pIYOVdsl_400x400.jpg",
        				url: "https://kitsu.io/anime/" + response.data.data[0].attributes.slug
        			},
        			title: "Anime Information:",
        			color: 16765404,
        			fields: [ //Strings only
        				{
        					name: "Episode Count",
        					value: response.data.data[0].attributes.episodeCount != null ? response.data.data[0].attributes.episodeCount.toString() : "None",
        					inline: true
        				},
        				{
        					name: 'Episode Length',
        					value: response.data.data[0].attributes.episodeLength != null ? response.data.data[0].attributes.episodeLength.toString() : "None",
        					inline: true
        				},
        				{
        					name: 'Started Airing',
        					value: response.data.data[0].attributes.startDate != null ? response.data.data[0].attributes.startDate : "None",
        					inline: true
        				}, 
        				{
        					name: 'Finished Airing',
        					value: response.data.data[0].attributes.endDate != null ? response.data.data[0].attributes.endDate : "None",
        					inline: true
        				},
        				{
        					name: 'Kitsu.io Rating',
        					value: response.data.data[0].attributes.averageRating != null ? response.data.data[0].attributes.averageRating.toString() : "None",
        					inline: true
        				},
        				{
        					name: 'Age Rating',
        					value: response.data.data[0].attributes.ageRating != null ? response.data.data[0].attributes.ageRating : "None",
        					inline: true
        				},
        				{
        					name: 'Synopsis',
        					value: response.data.data[0].attributes.synopsis != null ? response.data.data[0].attributes.synopsis : "None",
        					inline: false
        				}
        			],
        			thumbnail: {
        			url: response.data.data[0].attributes.posterImage.medium,
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
                var Command = "Anime (to search for " + args + ")";
                Console.CommandUsed(Bot, msg, Command);
                
                //Uncomment and change to test path
                //console.log(response.data.data[0].attributes.episodeCount);
            });
        } catch (err) {
        console.log(err.message);
        return;
        }
    });
    //Manga Command
    Bot.registerCommand("manga", (msg, args) => {
        //Try the command
        try {
            //Get from Kitsu.io
        	AXIOS.get("https://kitsu.io/api/edge/manga?filter[text]=" + args)
        	.then(function(response){
        	    //The Embed for the Message
        		let embed = {
        			author: {
        				name: response.data.data[0].attributes.titles.en,
        				icon_url: "https://pbs.twimg.com/profile_images/807964865511862278/pIYOVdsl_400x400.jpg",
        				url: "https://kitsu.io/manga/" + response.data.data[0].attributes.slug
        			},
        			title: "Anime Information:",
        			color: 16765404,
        			fields: [ //Strings only
        				{
        					name: "Episode Count",
        					value: response.data.data[0].attributes.episodeCount != null ? response.data.data[0].attributes.episodeCount.toString() : "None",
        					inline: true
        				},
        				{
        					name: 'Episode Length',
        					value: response.data.data[0].attributes.episodeLength != null ? response.data.data[0].attributes.episodeLength.toString() : "None",
        					inline: true
        				},
        				{
        					name: 'Started Airing',
        					value: response.data.data[0].attributes.startDate != null ? response.data.data[0].attributes.startDate : "None",
        					inline: true
        				}, 
        				{
        					name: 'Finished Airing',
        					value: response.data.data[0].attributes.endDate != null ? response.data.data[0].attributes.endDate : "None",
        					inline: true
        				},
        				{
        					name: 'Kitsu.io Rating',
        					value: response.data.data[0].attributes.averageRating != null ? response.data.data[0].attributes.averageRating.toString() : "None",
        					inline: true
        				},
        				{
        					name: 'Age Rating',
        					value: response.data.data[0].attributes.ageRating != null ? response.data.data[0].attributes.ageRating : "None",
        					inline: true
        				},
        				{
        					name: 'Synopsis',
        					value: response.data.data[0].attributes.synopsis != null ? response.data.data[0].attributes.synopsis : "None",
        					inline: false
        				}
        			],
        			thumbnail: {
        			url: response.data.data[0].attributes.posterImage.medium,
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
                var Command = "Manga (to search for " + args + ")";
                Console.CommandUsed(Bot, msg, Command);
                
                //Uncomment and change to test path
                //console.log(response.data.data[0].attributes.episodeCount);
        });
        } catch (err) {
        console.log(err.message);
        return;
        }
    });
};
