$(document).ready(function () {
    var distance = $("#sec1").offset().top,
        $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance) {
            // add a for here to stop it repeating
            $("#content1").toggleClass("fadeout fadein", 2000);
        }
    });
});

$(document).ready(function () {
    var distance2 = $("#sec2").offset().top,
        $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance2) {
            // add a for here to stop it repeating
            $("#content2").toggleClass("fadeout fadein", 2000);
        }
    });
});

$(document).ready(function () {
    var distance3 = $("#sec3").offset().top,
        $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance3) {
            // add a for here to stop it repeating
            $("#content3").toggleClass("fadeout fadein", 2000);
        }
    });
});