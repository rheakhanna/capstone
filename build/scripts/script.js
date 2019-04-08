console.log ("hello");

$(document).ready(function(e) {    
 
 $(".dive").click(function() {
 	$("#pageonetext, #pageonevid, #vidtwo").delay(1000).fadeOut(3100);
    $('html,body').animate({
        scrollTop: $("#pagetwo").offset().top},
        8000,'linear');

});


$(".start").click(function() {
 	$(".infocontainer").fadeOut(2000);



});

});