//Video Transitioning
$(document).ready(function () {
    //Section One Video
    $('#video1').one('ended', function () {
        $("#text1").toggleClass("check col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500, "linear");
        $("#text1").css("opacity", "100", 3000);
        $("#motion1").toggleClass("col col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500);
    });

    //Section Two Video
    $('#video2').one('ended', function () {
        $("#text2").toggleClass("check col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500, "linear");
        $("#text2").css("opacity", "100", 3000);
        $("#motion2").toggleClass("col col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500);
    });

    //Section Three Video
    $('#video3').one('ended', function () {
        $("#text3").toggleClass("check col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500, "linear");
        $("#text3").css("opacity", "100", 3000);
        $("#motion3").toggleClass("col col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500);
    });

    //Section Four Video
    $('#video4').one('ended', function () {
        $("#text4").toggleClass("check col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500, "linear");
        $("#text4").css("opacity", "100", 3000);
        $("#motion4").toggleClass("col col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500);
    });

    //topvid cancel blur and remove Appreciape and Play
    $("#topvid").on("click", function () {
        $("#overlay").css("opacity", "0", 3000);
        //Remove Appreciape Logo and Play Button
        setTimeout(function () {
            document.getElementById("topvid").play();
        }, 500);
    });
    $("#topvid").on("ended", function(){
        $("#overlay").delay(500).css("opacity", "100", 3000);
        var aid = $("#link1").attr("href");
        $('html,body').delay(1000).animate({scrollTop: ($(aid).offset().top -70)},1500);
    });
});