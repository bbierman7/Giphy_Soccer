$(document).ready(function(){


//API key
 //hEzp6VLdrLsUVR0RNuEqLStvSJfuIJEL


var soccer = ["world cup", "ronaldinho", "messi", "cristiano ronaldo", "wayne rooney", "steven gerrard", "f.c. barcelona",
"manchester united", "bicycle kick", "elastico"]




function renderButtons(){

$("#buttons-view").empty();

for (let i = 0; i < soccer.length; i++) {
    var btn = $("<button>");
    btn.addClass("soccer");
    btn.attr("data-soccer", soccer[i]);
    btn.text(soccer[i]);
    $("#buttons-view").append(btn);
    }
}

renderButtons();

$(document).on("click", "button", function(){
   
    soccerData = $(this).attr("data-soccer");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + soccerData + "&api_key=hEzp6VLdrLsUVR0RNuEqLStvSJfuIJEL&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function(response) {
        console.log(queryURL);

        console.log(response);
        
        
        //removes duplicate buttons with each click
        $("#soccer-gifs-appear-here").empty();

        var results = response.data;

        //Loops through arrays and appends rating and gif
        for (var i = 0; i < results.length; i++) {

            var soccerDiv = $("<div>");

            var p = $("<p>").text("Rating: " + results[i].rating);

            var soccerImage = $("<img>");

            soccerImage.attr("src", results[i].images.fixed_height_still.url);

            soccerImage.addClass("still")

            var soccerImage2 = $("<img>");

            soccerImage2.attr("src", results[i].images.fixed_height.url);

            soccerImage2.addClass("active")

            soccerDiv.append(p);
            soccerDiv.append(soccerImage);
            soccerDiv.append(soccerImage2);

            $("#soccer-gifs-appear-here").prepend(soccerDiv);
        }
    
    })
})

        //Add new tags after user types in soccer topic and clicks
       $("#add-soccer").on("click", function(event){

        event.preventDefault();

        var newSoccer = $("#soccer-input").val().trim();
        soccer.push(newSoccer);

        renderButtons();

       });

      $(document).on("click", ".still", function () {
          $(this).siblings(".active").show();
          $(this).hide();
      })

      $(document).on("click", ".active", function () {
        $(this).siblings(".still").show();
        $(this).hide();
        $(this).hide();
    })

})



