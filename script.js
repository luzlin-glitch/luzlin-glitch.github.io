$(window).ready(function() {
    $("#menu").on("click", function() {
        $("nav > p:not(:first-of-type)").slideToggle();
    });

    $("nav a").on("click", function() {
        if ($(window).width() <= 1200) {
            $("nav > p:not(:first-of-type)").slideUp();
        }
    });
});
