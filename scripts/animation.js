//Video Transitioning
$(document).ready(function () {
    //Section One Video
    $('#video1').one('ended', function () {
        if ($(window).width() >= 768) {
            $("#motion1").toggleClass("col col-lg-6 col-md-6 col-sm-12 col-xs-12", 3000);
            $("#text1").delay(3000).toggleClass("col-lg-6 col-md-6 col-sm-12 col-xs-12", 200, "linear");
            $("#text1").removeClass("noheight", 200);
            $("#text1").delay(200).removeClass("hidetext", 1000);
        } else {
            $("#text1").removeClass("noheight", 1000);
            $("#text1").addClass("col-sm-12");
            $("#text1").delay(200).removeClass("hidetext", 1000);
        }
    });

    //Section Two Video
    $('#video2').one('ended', function () {
        if ($(window).width() >= 768) {
            $("#motion2").toggleClass("col col-lg-6 col-md-6 col-sm-12 col-xs-12", 3000);
            $("#text2").delay(3000).toggleClass("col-lg-6 col-md-6 col-sm-12 col-xs-12", 200, "linear");
            $("#text2").removeClass("noheight", 200);
            $("#text2").delay(200).removeClass("hidetext", 1000);
        } else {
            $("#text2").removeClass("noheight", 1000);
            $("#text2").addClass("col-sm-12");
            $("#text2").delay(200).removeClass("hidetext", 1000);
        }
    });

    //Section Three Video
    $('#video3').one('ended', function () {
        if ($(window).width() >= 768) {
            $("#motion3").toggleClass("col col-lg-6 col-md-6 col-sm-12 col-xs-12", 3000);
            $("#text3").delay(3000).toggleClass("col-lg-6 col-md-6 col-sm-12 col-xs-12", 200, "linear");
            $("#text3").removeClass("noheight", 200);
            $("#text3").delay(200).removeClass("hidetext", 1000);
        } else {
            $("#text3").removeClass("noheight", 1000);
            $("#text3").addClass("col-sm-12");
            $("#text3").delay(200).removeClass("hidetext", 1000);
        }
    });


    //topvid cancel blur and remove Appreciape and Play
    $("#overlay").on("click", function () {
        $("#overlay").removeClass("opaque");
        $("#overlay").addClass("transparent");
        $("#topvid").removeClass("blur");
        $("#topvid").addClass("notblur");
        setTimeout(function () {
            document.getElementById("topvid").play();
        }, 500);
    });

    $("#topvid").on("ended", function () {
        $("#overlay").delay(500).removeClass("transparent").addClass("opaque");
        $("#topvid").removeClass("notblur");
        $("#topvid").addClass("blur");
        var aid = $("#sec_one");
        $('html,body').delay(1000).animate({
            scrollTop: ($(aid).offset().top - 70)
        }, 1500);
    });
    
    
    
   // Section One Custom Play Button
    $("#overlay2").on("click", function () {
        $("#overlay2").removeClass("opaque");
        $("#overlay2").addClass("transparent");
        setTimeout(function () {
            document.getElementById("video1").play();
        }, 500);
    });
    
    // Section Two Custom Play Button
    $("#overlay3").on("click", function () {
        $("#overlay3").removeClass("opaque");
        $("#overlay3").addClass("transparent");
        setTimeout(function () {
            document.getElementById("video2").play();
        }, 500);
    });
    
    // Section Three Custom Play Button
    $("#overlay4").on("click", function () {
        $("#overlay4").removeClass("opaque");
        $("#overlay4").addClass("transparent");
        setTimeout(function () {
            document.getElementById("video3").play();
        }, 500);
    });
});