//Video Transitioning
$(document).ready(function(){
    //Section One Video
    $('#video1').on('ended',function(){
      $("#text1").toggleClass('d-none col-lg-6 col-md-6 col-sm-12 col-xs-12');
      $("#motion1").toggleClass('col col-lg-6 col-md-6 col-sm-12 col-xs-12');
    });
    
    //Section Two Video
    $('#video2').on('ended',function(){
      $("#text2").toggleClass('d-none col-lg-6 col-md-6 col-sm-12 col-xs-12');
      $("#motion2").toggleClass('col col-lg-6 col-md-6 col-sm-12 col-xs-12');
    });
    
    //Section Three Video
    $('#video3').on('ended',function(){
      $("#text2").toggleClass('d-none col-lg-6 col-md-6 col-sm-12 col-xs-12');
      $("#motion3").toggleClass('col col-lg-6 col-md-6 col-sm-12 col-xs-12');
    });
    
    //Section Four Video
    $('#video4').on('ended',function(){
      $("#text4").toggleClass('d-none col-lg-6 col-md-6 col-sm-12 col-xs-12');
      $("#motion4").toggleClass('col col-lg-6 col-md-6 col-sm-12 col-xs-12');
    });
    
  });