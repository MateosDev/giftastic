var animals = ["Cats",  "Dogs", "Lizards", "Rabbits", "Hamsters" , "snakes"];
var queryURL = "";
var results;

for (i = 0; i < animals.length; i++) {
    var button = $('<div class="gif-button" value=' + animals[i] + '>' + animals[i] + '</div>')
    $("#buttons-container").append(button);
}

$(".gif-button").on("click", function() {
    queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).attr("value") + "&api_key=BLgUdpFjMDUr7iqMDGqhYQR0M9K9klCD";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);

        results = response.data;
        
        document.getElementById("gifs-container").innerHTML = "";

        for(i = 0; i < results.length; i++) {
            var topicDiv = $("<div>");
            var topicImg = $("<img>");
            topicDiv.attr("class", "gif");
            topicImg.attr("src", results[i].images.fixed_height.url);
            topicDiv.append(topicImg);
            $("#gifs-container").append(topicDiv);
        }
    })
})