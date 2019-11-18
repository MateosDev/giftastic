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
    
    function addNewButton(){
        $("#addGif").on("click", function(){
        var animal = $("#animal-input").val().trim();
        if (animal == ""){
          return false; 
        }
        animals.push(animal);
    
        displayGifButtons();
        return false;
        });
    }
    
    function displayGifs(){
        var animal = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=jhXaJRbhytFrfrhdCuLlQzvWxM2dj97T&limit=10";
        console.log(queryURL); 
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .then(function(response) {
            console.log(response); 
            $("#gifsView").empty(); 
            var results = response.data; 
            if (results == ""){
              alert("There isn't a gif for this selected button");
            }
            for (var i=0; i<results.length; i++){
    
                var gifDiv = $("<div>");
                gifDiv.addClass("gifDiv");
                var gifRating = $("<h4>").text("Rating: " + results[i].rating);
                gifDiv.append(gifRating);
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height_small_still.url);
                gifImage.attr("data-still",results[i].images.fixed_height_small_still.url); 
                gifImage.attr("data-animate",results[i].images.fixed_height_small.url); 
                gifImage.attr("data-state", "still"); 
                gifImage.addClass("image");
                gifDiv.append(gifImage);
               
                $("#gifsView").prepend(gifDiv);
            }
        });
    }
    displayGifButtons(); 
    addNewButton();
    $(document).on("click", ".animal", displayGifs);
    $(document).on("click", ".image", function(){
        var state = $(this).attr('data-state');
        if ( state == 'still'){
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        }else{
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    });
    });