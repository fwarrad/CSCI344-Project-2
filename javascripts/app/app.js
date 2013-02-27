var $ = window.$;
var ctwitter = window.ctwitter; 
var console = window.console; 
var main = function () {
    "use strict";
    var userChoice = null,
        twitter = new ctwitter.CTwitter();
    // set value to search and start ctwitter
    $("#clientInputButton").click(function () {
        userChoice = $("#clientInput").val();
        $("#clientInputButton").hide();
        $("#clientInput").hide();
        $("#instructions").hide();
        $(".newSearch").show();
        //display search term used
        $("#twitterResults").html("<p> You are trending live on: " + userChoice + "</p>");
        // loop the twitter feed
        twitter.stream("statuses/filter", { lang: "en", track: [userChoice] }, function (stream) {
            stream.on("data", function (tweet) {
                // send twitter feed to html
             $("#twitter").delay(800000).fadeIn(900000).append("<ul>" + tweet.text + " </ul>");
            // Prints 7 tweets at a time
            if ($("ul").length > 7) {
              $("ul:first").fadeIn('slow');
              $("ul:first").remove();
              $("ul:first").fadeOut(500);
            } // count running totals for matching search term to keywords
                
            });  // end of stream.on
        }); // end of twitter.stream
    }); // end of .click function
};// end of main

$(document).ready(main);

