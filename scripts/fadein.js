$(document).ready(function () {
    var distance2 = $("#sec1").offset().top -100,
        $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance2) {
            // add a for here to stop it repeating
            $("#content1").removeClass("fadeout", 2000);
        }
    });
});

$(document).ready(function () {
    var distance2 = $("#sec2").offset().top -100,
        $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance2) {
            // add a for here to stop it repeating
            $("#content2").removeClass("fadeout", 2000);
            $("#content2").addClass("fadein", 2000);
        }
    });
});

$(document).ready(function () {
    var distance2 = $("#sec3").offset().top -100,
        $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance2) {
            // add a for here to stop it repeating
            $("#content3").removeClass("fadeout", 2000);
            $("#content3").addClass("fadein", 2000);
        }
    });
});