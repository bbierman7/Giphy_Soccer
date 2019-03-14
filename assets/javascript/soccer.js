$(document).ready(function(){


//API key
 //hEzp6VLdrLsUVR0RNuEqLStvSJfuIJEL

//  1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
//    * We chose animals for our theme, but you can make a list to your own liking.

var soccer = ["world cup", "ronaldinho", "messi", "cristiano ronaldo", "wayne rooney", "steven gerrard", "f.c. barcalona",
"manchester united", "sir alex ferguson", "bicycle kick", "elastico"]

// 2. Your app should take the topics in this array and create buttons in your HTML.
//    * Try using a loop that appends a button for each string in the array.



// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.


$("button").on("click", function(){

    soccer = $(this).attr("data-soccer");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q" + soccer + "api_key=hEzp6VLdrLsUVR0RNuEqLStvSJfuIJEL&limit=10";

})



$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function(response) {
        
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var soccerImage = $("<img>");
            soccerImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            givDiv.prepend(soccerImage);

            $("#soccer-gifs-appear-here").prepend(gifDiv);
        };
    });



// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// 5. Under every gif, display its rating (PG, G, so on).
//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// 7. Deploy your assignment to Github Pages.

// 8. **Rejoice**! You just made something really cool

});