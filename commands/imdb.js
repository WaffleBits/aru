/**
 * Perhion Bot
 * IMDB Bot Script
 * Created: 1/7/17
 * Last Updated: 1/7/17
 * Author: PyroclasticMayhem#4093
 * Description: IMDB related commands
 */

//Load Console Debug File
var Console = require("../utils/console.js");

module.exports = function (Bot, AXIOS) {
    //Movie Command
    Bot.registerCommand("movie", (msg, args) => {
        //Try the command
        try {
            //Get from OMDb API
        	AXIOS.get("http://www.omdbapi.com/?t=" + args + "&y=&plot=short&r=json")
        	.then(function(response){
        	    //The Embed for the Message
        		let embed = {
        			author: {
        				name: response.data.Title,
        				icon_url: "http://ia.media-imdb.com/images/M/MV5BMTczNjM0NDY0Ml5BMl5BcG5nXkFtZTgwMTk1MzQ2OTE@._V1_.png",
        				url: "http://www.imdb.com/title/" + response.data.imdbID
        			},
        			title: "Movie Information:",
        			color: 16765404,
        			fields: [ //Strings only
        				{
        					name: "Year",
        					value: response.data.Year,
        					inline: true
        				},
        				{
        					name: "Rated",
        					value: response.data.Rated,
        					inline: true
        				},
        				{
        					name: "Released",
        					value: response.data.Released,
        					inline: true
        				},
        				{
        					name: "Runtime",
        					value: response.data.Runtime,
        					inline: true
        				},
        				{
        					name: "Genre",
        					value: response.data.Genre,
        					inline: true
        				},
        				{
        					name: "Director",
        					value: response.data.Director,
        					inline: true
        				},
        				{
        					name: "Writer",
        					value: response.data.Writer,
        					inline: true
        				},
        				{
        					name: "Actors",
        					value: response.data.Actors,
        					inline: true
        				},
        				{
        					name: "Language",
        					value: response.data.Language,
        					inline: true
        				},
        				{
        					name: "Country",
        					value: response.data.Country,
        					inline: true
        				},
        				{
        					name: "Awards",
        					value: response.data.Awards,
        					inline: true
        				},
        				{
        					name: "Metascore",
        					value: response.data.Metascore,
        					inline: true
        				},
        				{
        					name: "Plot",
        					value: response.data.Plot,
        					inline: false
        				}
        			],
        			thumbnail: {
        			url: response.data.Poster != "N/A" ? response.data.Poster : ""
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
                var Command = "Movie (to search for " + args + ")";
                Console.CommandUsed(Bot, msg, Command);
                
                //Uncomment and change to test path
                //console.log(response);
            });
        } catch (err) {
        console.log(err.message);
        return;
        }
    });
};
