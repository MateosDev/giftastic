$( document ).ready(function()
    var animals = ["dog", "cat", "iguana", "frog" , "ferret" , "fish" , "rabbit"];
    function displayGifButtons(){
        $("#gifButtonsView").empty(); 
        for (var i = 0; i < animals.length; i++){
            var gifButton = $("<button>");
            gifButton.addClass("animal");
            gifButton.addClass("btn btn-info")
            gifButton.attr("data-name", animals[i]);
            gifButton.text(animals[i]);
            $("#gifButtonsView").append(gifButton);
        }
    }
    