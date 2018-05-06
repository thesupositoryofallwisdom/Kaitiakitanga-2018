//Video Transitioning
$(document).ready(function(){
    //Section One Video
    $('#video1').on('ended',function(){
        $("#text1").toggleClass("check col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500, "linear");
        $("#text1").css("opacity", "100", 3000);
        $("#motion1").toggleClass("col col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500);
    });
    
    //Section Two Video
    $('#video2').on('ended',function(){
        $("#text2").toggleClass("check col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500, "linear");
        $("#text2").css("opacity", "100", 3000);
        $("#motion2").toggleClass("col col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500);
    });
    
    //Section Three Video
    $('#video3').on('ended',function(){
        $("#text3").toggleClass("check col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500, "linear");
        $("#text3").css("opacity", "100", 3000);
        $("#motion3").toggleClass("col col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500);
    });
    
    //Section Four Video
    $('#video4').on('ended',function(){
        $("#text4").toggleClass("check col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500, "linear");
        $("#text4").css("opacity", "100", 3000);
        $("#motion4").toggleClass("col col-lg-6 col-md-6 col-sm-12 col-xs-12", 4500);
    });
    
  });