console.log ("hello");

$(document).ready(function(e) {    
 
 $(".dive").click(function() {
 	$("#pageonetext, #pageonevid, #vidtwo").delay(1000).fadeOut(3100);
    $('html,body').animate({
        scrollTop: $("#pagetwo").offset().top},
        4000,'linear');

});


$(".start").click(function() {
 	$(".infocontainer").fadeOut(1500);
 	$(".infoconttwo").show();
 	$(".infoconttwo").delay(1000).animate ({
          top: '42.5%'},1300);
 	$(".ray_box").delay(1500).fadeIn(2500);
 	$(".continue").delay(3500).fadeIn(2000);



});

$(".continue").click(function() {
	$(".ray_box").fadeOut(2500);
 	$(".infoconttwo").delay(1000).animate ({
          top: '-90%'},1300);
 	
 	$(".infocontfour").show();
 	$(".infocontfour").delay(1500).animate ({
          top: '45%'},1300);
 	$(".wgreen").delay(2500).animate ({
          top: '-20%'},4000);
 // 	$(".jellyfish").delay(2500).fadeIn(2000);
 // 	$(".starfish").delay(3000).fadeIn(2000);
 // 	$(".fish").delay(3500).fadeIn(2000);
 // 	$(".shark").delay(4000).fadeIn(2000);
 // 	$(".coral").delay(4500).fadeIn(2000);
 // 	$(".seal").delay(5000).fadeIn(2000);
 // 	$(".plankton").delay(5500).fadeIn(2000);
 // 	$("#headerinfoanimals").delay(6000).fadeIn(2000);
 	$(".continue").fadeOut(1000);
	$(".next").delay(6000).fadeIn(2000);


});

// $(".jellyfish").click(function() {
// 	$("#headerinfoanimals, #starinfo, #fishinfo, #sharkinfo, #coralinfo, #sealinfo, #planktoninfo").fadeOut(1500);
// 	$("#jellyinfo").delay(1500).fadeIn(2000);


// });

// $(".starfish").click(function() {
// 	$("#headerinfoanimals, #jellyinfo, #fishinfo, #sharkinfo, #coralinfo, #sealinfo, #planktoninfo").fadeOut(1500);
// 	$("#starinfo").delay(1500).fadeIn(2000);


// });

// $(".fish").click(function() {
// 	$("#headerinfoanimals, #jellyinfo, #starinfo, #sharkinfo, #coralinfo, #sealinfo, #planktoninfo").fadeOut(1500);
// 	$("#fishinfo").delay(1500).fadeIn(2000);


// });

// $(".shark").click(function() {
// 	$("#headerinfoanimals, #jellyinfo, #fishinfo, #starinfo, #coralinfo, #sealinfo, #planktoninfo").fadeOut(1500);
// 	$("#sharkinfo").delay(1500).fadeIn(2000);


// });

// $(".coral").click(function() {
// 	$("#headerinfoanimals, #jellyinfo, #fishinfo, #starinfo, #sharkinfo, #sealinfo, #planktoninfo").fadeOut(1500);
// 	$("#coralinfo").delay(1500).fadeIn(2000);


// });

// $(".seal").click(function() {
// 	$("#headerinfoanimals, #jellyinfo, #fishinfo, #starinfo, #sharkinfo, #coralinfo, #planktoninfo").fadeOut(1500);
// 	$("#sealinfo").delay(1500).fadeIn(2000);


// });

// $(".plankton").click(function() {
// 	$("#headerinfoanimals, #jellyinfo, #fishinfo, #starinfo, #sharkinfo, #coralinfo, #sealinfo").fadeOut(1500);
// 	$("#planktoninfo").delay(1500).fadeIn(2000);


// });


$(".next").click(function() {
	$(".ray_box").fadeOut(2500);
 	$(".infocontfour").delay(1000).animate ({
          top: '-90%'},1300);
 	$(".wgreen").fadeOut(1000);
 	$(".next").fadeOut(900);

 		$(".infocontfive").show();
 	$(".infocontfive").delay(1500).animate ({
          top: '47%'},1300);
 	$(".diver").show();
 	$(".diver").delay(2000).animate ({
          top: '-20%'},2000);
 	
 
 	$(".nexttwo").fadeOut(1000);
	$(".nextthree").delay(5000).fadeIn(2000);


});


$(".nextthree").click(function() {
	
	$(".infocontfive").delay(1000).animate ({
          top: '-90%'},1300);

	$(".infocontsix").show();
 	$(".infocontsix").delay(1500).animate ({
          top: '47%'},1300);

 	$(".redfiller").delay(3500).fadeIn(1800);

 
 	$(".nextthree").fadeOut(1000);
	$(".totwi").delay(3500).fadeIn(2000);


});


$(".totwi").click(function() {
	
	$(".infocontsix").delay(1000).animate ({
          top: '-90%'},1300);
	$(".redfiller").fadeOut(1000);

 	$('html,body').animate({
        scrollTop: $("#pagethree").offset().top},
        4000,'linear');

 
 	$(".totwi").fadeOut(1000);
	$(".nextfour").delay(3500).fadeIn(2000);


});


$(".twistart").click(function() {
 	$(".twiinfocontainer").fadeOut(1500);
 	$(".twiinfoconttwo").show();
 	$(".twiinfoconttwo").delay(1000).animate ({
          top: '42.5%'},1300);
 	$(".ray_boxtwo").delay(1500).fadeIn(2500);
 	$(".twicontinue").delay(3500).fadeIn(2000);



});

$(".twicontinue").click(function() {
 	$(".twiinfoconttwo").delay(1000).animate ({
          top: '-90%'},1300);
 	$(".ray_boxtwo").fadeOut(2500);
 	$(".twiinfocontthree").show();
 	$(".twiinfocontthree").delay(2000).animate ({
          top: '42.5%'},1300);

 		$(".twicontinue").fadeOut(1000);
	$(".twinext").delay(6000).fadeIn(2000);
 	



});

$(".twinext").click(function() {
 	$(".twiinfocontthree").delay(1000).animate ({
          top: '-90%'},1300);

 	$(".twiinfocontfour").show();
 	$(".twiinfocontfour").delay(2000).animate ({
          top: '42.5%'},1300);

 		$(".twinext").fadeOut(1000);
	$(".twinexttwo").delay(5000).fadeIn(2000);
 	



});

$(".twinexttwo").click(function() {
 	$(".twiinfocontfour").delay(1000).animate ({
          top: '-90%'},1300);

 	$('html,body').animate({
        scrollTop: $("#pagefour").offset().top},
        6000,'linear');


 		$(".twinexttwo").fadeOut(1000);
	$(".midstart").delay(5000).fadeIn(2000);
 	



});

$(".midstart").click(function() {
 	$(".midinfocontainer").fadeOut(1500);
 	$(".midinfoconttwo").show();
 	$(".midinfoconttwo").delay(1000).animate ({
          top: '42.5%'},1300);
 	$(".midcontinue").delay(3500).fadeIn(2000);



});

$(".midcontinue").click(function() {
 	$(".midinfoconttwo").delay(1000).animate ({
          top: '-90%'},1300);
 	$(".midinfocontthree").show();
 	$(".midinfocontthree").delay(2000).animate ({
          top: '42.5%'},1300);

 		$(".midcontinue").fadeOut(1000);
	$(".midnext").delay(6000).fadeIn(2000);
 	



});

$(".midnext").click(function() {
 	$(".midinfocontthree").delay(1000).animate ({
          top: '-90%'},1300);

 	$(".midinfocontfour").show();
 	$(".midinfocontfour").delay(2000).animate ({
          top: '42.5%'},1300);

 		$(".midnext").fadeOut(1000);
	$(".midnexttwo").delay(5000).fadeIn(2000);
 	



});

$(".midnexttwo").click(function() {
 	$(".midinfocontfour").delay(1000).animate ({
          top: '-90%'},1300);

 	$('html,body').animate({
        scrollTop: $("#pagefour").offset().top},
        6000,'linear');


 		$(".midnexttwo").fadeOut(1000);
	$(".midstart").delay(5000).fadeIn(2000);
 	



});


});











