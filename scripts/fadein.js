$(document).ready(function () {
    var distance2 = $("#sec1").offset().top -100;
        $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance2) {
            $("#content1").removeClass("fadeout", 1000);
        }
    });
});

$(document).ready(function () {
    var distance2 = $("#sec2").offset().top -100;
        $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance2) {
            $("#content2").removeClass("fadeout", 1000);
        }
    });
});

$(document).ready(function () {
    var distance2 = $("#sec3").offset().top -100;
        $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance2) {
            $("#content3").removeClass("fadeout", 1000);
        }
    });
});