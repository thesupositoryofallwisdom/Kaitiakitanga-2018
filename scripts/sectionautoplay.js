//Section Autoplay
$(document).ready(function () {

    var viddistance = $("#sec_one").offset().top - 100;
    $window = $(window);
    
    var viddistance2 = $("#sec_two").offset().top - 100;
    $window = $(window);
    
    var viddistance3 = $("#sec_three").offset().top - 100;
    $window = $(window);
    
    var viddistance4 = $("#sec_four").offset().top - 100;
    $window = $(window);
    
    $window.scroll(function () {
        if ($window.scrollTop() >= viddistance) {
            document.getElementById("video1").play();
        }
        if ($window.scrollTop() >= viddistance2) {
            document.getElementById("video2").play();
        }
        if ($window.scrollTop() >= viddistance3) {
            document.getElementById("video3").play();
        }
        if ($window.scrollTop() >= viddistance4) {
            document.getElementById("video4").play();
        }
    });
});
