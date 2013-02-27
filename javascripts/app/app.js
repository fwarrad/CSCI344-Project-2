var $ = window.$;
var ctwitter = window.ctwitter; 
var console = window.console; 
var main = function () {
        "use strict";
        var twitter = new ctwitter.CTwitter();
        // ctwitter funtion start
        twitter.stream("statuses/filter", { lang: "en", track: ["galaxy s3", "htc m7"] }, function (stream) {
            stream.on("data", function (tweet) {

            //feeds out to html file
                $("#twitter").delay(800000).fadeIn(900000).append("<ul>" + tweet.text + " </ul>");
            // Prints 9 tweets at a time
                if ($("ul").length > 9) {
                    $("ul:first").fadeIn('slow');
                    $("ul:first").remove();
                    $("ul:first").fadeOut(500);
                }

            // feeds out to console. 
                console.log(tweet.text);            
            }); 
        });

    }


$(document).ready(main);