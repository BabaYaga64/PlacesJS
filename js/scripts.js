$(document).ready(function() {
    $("form#new-place").submit(function(event) {

        var inputtedLocation = $("input#new-location").val();
        var inputtedNotes    = $("textarea#new-notes").val();
        var inputtedImage    = $("input#new-image").val();


        var newPlace = {
                location: inputtedLocation,
                notes:    inputtedNotes,
                image:    inputtedImage
            };

        $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

        $("input#new-location").val("");
        $("textarea#new-notes").val("");
        $("input#new-image").val("");

        $(".place").last().click(function() {
            $("#show-place").show();
            $("#show-place h2").text(newPlace.location);
            $(".location").text(newPlace.location);
            $(".notes").text(newPlace.notes);
            $(".image").text(newPlace.image);
        });

        event.preventDefault();

    });
});
