$(window).ready(function() {
    $("#menu").on("click", function() {
        $("nav > p:not(:first-of-type)").slideToggle();
    });

    $(".album-item").on("click", function() {
        let imageText = $(this).attr("data-images");
        let imageList = imageText.split(",");

        $("#viewer-content").html("");
        $("#viewer-content").append('<p class="viewer-note">Click Close to return to the portfolio.</p>');

        imageList.forEach(function(imageName) {
            $("#viewer-content").append('<img src="' + imageName + '" alt="portfolio photo">');
        });

        $("#photo-viewer").slideDown();
    });

    $("#close-viewer").on("click", function() {
        $("#photo-viewer").slideUp();
    });
});