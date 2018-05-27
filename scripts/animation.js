//Video Transitioning
$(document).ready(function () {
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
});

// Section Animations
    $(document).ready(function () {
        $window = $(window);

        $window.scroll(function () {
            var distance1 = $("#sec_one").offset().top - 120;
            if ($window.scrollTop() >= distance1) {
                
                if ($(window).width() >= 768) {
                    $("#motion1").delay(500).addClass("col-lg-6 col-md-6 col-sm-12 col-xs-12", 2500, "linear").removeClass("col", 300, "linear");
                    $("#text1").delay(3000).addClass("col-lg-6 col-md-6 col-sm-12 col-xs-12", 200, "linear");
                    $("#text1").removeClass("noheight", 200);
                    $("#text1").delay(200).removeClass("hidetext", 1000);
                    
                } else {
                    $("#text1").delay(1000).removeClass("noheight", 1000);
                    $("#text1").addClass("col-sm-12").delay(200).removeClass("hidetext", 1000);
                }

            }
        });
    });

    $(document).ready(function () {
        $window = $(window);

        $window.scroll(function () {
            var distance2 = $("#sec_two").offset().top - 120;
            console.log($window.scrollTop());
            if ($window.scrollTop() >= distance2) {
                
                if ($(window).width() >= 768) {
                    $("#motion2").delay(500).addClass("col-lg-6 col-md-6 col-sm-12 col-xs-12", 2500, "linear").removeClass("col", 300, "linear");
                    $("#text2").delay(3000).addClass("col-lg-6 col-md-6 col-sm-12 col-xs-12", 200, "linear");
                    $("#text2").removeClass("noheight", 200);
                    $("#text2").delay(200).removeClass("hidetext", 1000);
                    
                } else {
                    $("#text2").delay(1000).removeClass("noheight", 1000);
                    $("#text2").addClass("col-sm-12").delay(200).removeClass("hidetext", 1000);
                }

            }
        });
    });

    $(document).ready(function () {
        $window = $(window);

        $window.scroll(function () {
            var distance3 = $("#sec_three").offset().top - 120;

            if ($window.scrollTop() >= distance3) {
                
                if ($(window).width() >= 768) {
                    $("#motion3").delay(500).addClass("col-lg-6 col-md-6 col-sm-12 col-xs-12", 2500, "linear").removeClass("col", 300, "linear");
                    $("#text3").delay(3000).addClass("col-lg-6 col-md-6 col-sm-12 col-xs-12", 200, "linear");
                    $("#text3").removeClass("noheight", 200);
                    $("#text3").delay(200).removeClass("hidetext", 1000);
                    
                } else {
                    $("#text3").delay(1000).removeClass("noheight", 1000);
                    $("#text3").addClass("col-sm-12").delay(200).removeClass("hidetext", 1000);
                }

            }
        });
    });