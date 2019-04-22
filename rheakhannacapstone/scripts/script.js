console.log ("hello");

$(document).ready(function(e) { 



$(".begin").click(function() {
  $(".titleinfo").fadeOut(2000);
  $(".begin").fadeOut(2000);
  $(".menuright, .menuleft").delay(1000).fadeIn(3000);
  $(".wfirst, .wone").delay(1000).fadeIn(3000);
  $(".wfirst").animate ({
          top: '83%'},2000);
  $(".wone").animate ({
          top: '85%'},2000);
    $(".box").delay(4000).fadeIn(3000);
    $(".dive").delay(5000).fadeIn(3000);

  $('html, body').css('overflow','visible');


});

$(".about").click(function() {
    $(".box").delay(5000).fadeIn(3000);
    $('html,body').animate({
        scrollTop: $("#pageone").offset().top},
        2000,'linear');


});



$(".home").click(function() {
  $(".home").css('opacity', '1');
  $(".twilight, .midnight, .abyssal, .hadal, .sunlight, .about").css('opacity', '0.4');
  $(".titleinfo").fadeIn(2000);
  $(".begin").fadeIn(2000);
  $(".menuright, .menuleft").fadeOut(2000);
  $(".wfirst, .wone").fadeOut(2000);
  $(".wfirst").fadeOut(2000);
  $(".wone").fadeOut(2000);
    $(".box").fadeOut(2000);
    $(".dive").fadeOut(2000);
    $('html,body').animate({
        scrollTop: $("#pageone").offset().top},
        2000,'linear');

});

$(".about").click(function() {
  $(".about").css('opacity', '1');
  $(".twilight, .midnight, .abyssal, .hadal, .sunlight, .home").css('opacity', '0.4');

});

 
 $(".dive").click(function() {
    $('html,body').animate({
        scrollTop: $("#pagetwo").offset().top},
        2100,'linear');
    $("#lineone, #linetwo, #linethree, #linefour").css('border-color','#D93A54');


});

 $(".sunlight").click(function() {
    $('html,body').animate({
        scrollTop: $("#pagetwo").offset().top},
        2000,'linear');
  $(".sunlight").css('opacity', '1');
  $(".twilight, .midnight, .abyssal, .hadal, .home, .about").css('opacity', '0.4');

});


 $(".twilight").click(function() {
    $('html,body').animate({
        scrollTop: $("#pagethree").offset().top},
        2000,'linear');
    $(".twilight").css('opacity', '1');
    $(".sunlight, .midnight, .abyssal, .hadal, .home, .about").css('opacity', '0.4');


});

  $(".midnight").click(function() {
    $('html,body').animate({
        scrollTop: $("#pagefour").offset().top},
        2000,'linear');

    $(".midnight").css('opacity', '1');
    $(".sunlight, .twilight, .abyssal, .hadal, .home, .about").css('opacity', '0.4');

});

   $(".abyssal").click(function() {
    $('html,body').animate({
        scrollTop: $("#pagefive").offset().top},
        2000,'linear');

    $(".abyssal").css('opacity', '1');
    $(".sunlight, .midnight, .twilight, .hadal, .home, .about").css('opacity', '0.4');

});

    $(".hadal").click(function() {
    $('html,body').animate({
        scrollTop: $("#pagesix").offset().top},
        2000,'linear');

    $(".hadal").css('opacity', '1');
    $(".sunlight, .midnight, .abyssal, .twilight, .home, .about").css('opacity', '0.4');

});




$(".start").click(function() {
 	$(".infocontainer").fadeOut(1500);
 	$(".infoconttwo").show();
 	$(".infoconttwo").delay(1000).animate ({
          top: '42.5%'},1300);
 	$(".ray_box").delay(1500).fadeIn(2500);
 	$(".continue").delay(3000).fadeIn(2000);



});

$(".continue").click(function() {
	$(".ray_box").fadeOut(2500);
 	$(".infoconttwo").delay(1000).animate ({
          top: '-90%'},1300);
 	
 	$(".infocontthree").show();
 	$(".infocontthree").delay(1500).animate ({
          top: '42.5%'},1300);
 	$(".sunplants").delay(2600).fadeIn(4000);
 	$(".sundol").delay(3000).fadeIn(3000);
 	$(".sundoltwo").delay(3500).fadeIn(3000);
 	$(".smallplant").delay(3500).fadeIn(3000);


 	$(".continue").fadeOut(1000);
	$(".next").delay(5000).fadeIn(2000);


});

$(".next").click(function() {
 	$(".infocontthree").delay(1000).animate ({
          top: '-90%'},1300);
 	$(".sunplants, .sundol, .sundoltwo, .smallplant").fadeOut(2000);


 	$(".infocontfour").show();
 	$(".infocontfour").delay(1500).animate ({
          top: '46.5%'},1300);
 	$(".wgreen").delay(2500).animate ({
          top: '-20%'},4000);
 	
 
 	$(".next").fadeOut(1000);
	$(".nexttwo").delay(6000).fadeIn(2000);


});


$(".nexttwo").click(function() {
	
	$(".infocontfour").delay(1000).animate ({
          top: '-90%'},1300);
	$(".wgreen").fadeOut(2000);

	$(".infocontfive").show();
 	$(".infocontfive").delay(1500).animate ({
          top: '42.5%'},1300);

 	$(".warning").delay(3000).fadeIn(3000);

 
 	$(".nexttwo").fadeOut(1000);
	$(".nextthree").delay(3500).fadeIn(2000);


});

$(".nextthree").click(function() {
	
	$(".infocontfive").delay(1000).animate ({
          top: '-90%'},1300);

 	$(".warning").fadeOut(1300);

	$(".infocontsix").show();
 	$(".infocontsix").delay(1500).animate ({
          top: '42.5%'},1300);

	$(".redfiller").delay(3500).fadeIn(3000);
	$(".blood").delay(4500).fadeIn(3400);

 
 	$(".nextthree").fadeOut(1000);
	$(".totwi").delay(5500).fadeIn(2000);


});

$(".totwi").click(function() {
	
	$(".infocontsix").delay(1000).animate ({
          top: '-90%'},1300);
	$(".redfiller").fadeOut(1000);
	$(".blood").fadeOut(1000);

 	$('html,body').animate({
        scrollTop: $("#pagethree").offset().top},
        4000,'linear');

 
 	$(".totwi").fadeOut(1000);

});



$(".twistart").click(function() {
 	$(".twiinfocontainer").fadeOut(1500);
 	$(".twiinfoconttwo").show();
 	$(".twiinfoconttwo").delay(1000).animate ({
          top: '42.5%'},1300);
 	$(".ray_boxtwo").delay(1500).fadeIn(2500);
 	$(".twicontinue").delay(3000).fadeIn(2000);



});


$(".twicontinue").click(function() {
 	$(".twiinfoconttwo").delay(1000).animate ({
          top: '-90%'},1300);
 	$(".ray_boxtwo").fadeOut(2500);
 	$(".twiinfocontthree").show();
 	$(".twiinfocontthree").delay(2000).animate ({
          top: '42.5%'},1300);
 	$(".biomass").delay(3000).fadeIn(3000);
 	$(".biomasstwo").delay(3000).fadeIn(5000);

 	$(".twicontinue").fadeOut(1000);
	$(".twinext").delay(4000).fadeIn(2000);
 	



});

$(".twinext").click(function() {
 	$(".twiinfocontthree").delay(1000).animate ({
          top: '-90%'},1300);
 	$(".biomass").fadeOut(2000);
 	$(".biomasstwo").fadeOut(1500);

 	$(".twiinfocontfour").show();
 	$(".twiinfocontfour").delay(2000).animate ({
          top: '46%'},1300);
 	$(".freedive, .freemove").delay(2000).fadeIn(3000);

 	$(".twinext").fadeOut(1000);
	$(".twinexttwo").delay(4000).fadeIn(2000);
 	

});


$(".twinexttwo").click(function() {
 	$(".twiinfocontfour").delay(1000).animate ({
          top: '-90%'},1300);
 	$(".freedive").animate({
 		top: '130%'}, 1500)
 	$(".freemove").animate({
 		top: '130%'}, 1300)
 	$(".freedive, .freemove").fadeOut(2000);

 	$(".twiinfocontfive").show();
 	$(".twiinfocontfive").delay(2000).animate ({
          top: '42.5%'},1300);
 	$(".eiffel").delay(3300).animate ({
          top: '-33%'},2000);

 	$(".twinexttwo").fadeOut(1000);
	$(".twinextthree").delay(4000).fadeIn(2000);
	

});



$(".twinextthree").click(function() {
 	$(".twiinfocontfive").delay(1000).animate ({
          top: '-90%'},1300);
 	$(".eiffel").animate ({
          top: '-200%'},1300);

 	$(".twiinfocontsix").show();
 	$(".twiinfocontsix").delay(2000).animate ({
          top: '42.5%'},1300);
 	$(".bluewhale").delay(3500).animate ({
          top: '230%'},2500);

 	$(".twinextthree").fadeOut(1000);
	$(".twinextfour").delay(5000).fadeIn(2000);
	

});


$(".twinextfour").click(function() {
 	$(".twiinfocontsix").delay(1000).animate ({
          top: '-90%'},1300);

 	$(".twiinfocontseven").show();
 	$(".twiinfocontseven").delay(2000).animate ({
          top: '46%'},1300);
 	$(".dolph").delay(3000).animate({left: '+=90%', top: '+=-120%'}, 5000);
 	$(".dolphtwo").delay(5000).animate({left: '+=-85%', top: '+=-100%'}, 5000);
 	$(".dolphthree").delay(7000).animate({left: '+=-86%', top: '+=130%'}, 5000);


 	$(".twinextfour").fadeOut(1000);
	$(".tomid").delay(5000).fadeIn(2000);
	

});



$(".tomid").click(function() {
 	$(".twiinfocontseven").delay(1000).animate ({
          top: '-90%'},1300);

 	$('html,body').animate({
        scrollTop: $("#pagefour").offset().top},
        4000,'linear');


 	$(".tomid").fadeOut(1000);
	

});




$(".midstart").click(function() {
 	$(".midinfocontainer").fadeOut(1500);
 	$(".midinfoconttwo").show();
 	$(".midinfoconttwo").delay(1000).animate ({
          top: '42.5%'},1300);
 	$(".light_beam").delay(3000).fadeIn(4500);
 	$(".midcontinue").delay(4500).fadeIn(2000);


});

$(".midcontinue").click(function() {
 	$(".midinfoconttwo").delay(1000).animate ({
          top: '-90%'},1300);
 	$(".light_beam").fadeOut(2500);
 	$(".midinfocontthree").show();
 	$(".midinfocontthree").delay(2100).animate ({
          top: '42.5%'},1300);
 	$(".midsub").delay(2500).animate ({
          top: '43%'},4000);
 	$(".midsubtwo").delay(3500).animate ({
          top: '12%'},4000);
 	$(".midsubthree").delay(3900).animate ({
          top: '8%'},4000);
 	$(".midsubc").delay(4000).animate ({
          top: '-50%'},4000);
 	$(".midsubtwoc").delay(4500).animate ({
          top: '-130%'},4000);
 	$(".midsubthreec").delay(5000).animate ({
          top: '-50%'},4000);

 	$(".midcontinue").fadeOut(1000);
	$(".midnext").delay(5000).fadeIn(2000);
 

});


$(".midnext").click(function() {
 	$(".midinfocontthree").delay(1000).animate ({
          top: '-90%'},1300);
 	$(".midsub").delay(2000).animate ({
          top: '-50%'},1300);
 	$(".midsubtwo").delay(2200).animate ({
          top: '-120%'},1300);
 	$(".midsubthree").delay(2400).animate ({
          top: '-320%'},1300);
 	$(".midsubc").delay(2000).animate ({
          top: '-420%'},1300);
 	$(".midsubtwoc").delay(2200).animate ({
          top: '-420%'},1300);
 	$(".midsubthreec").delay(2200).animate ({
          top: '-420%'},1300);

 	$(".midinfocontfour").show();
 	$(".midinfocontfour").delay(3500).animate ({
          top: '42.5%'},1300);
 	$(".blackfiller").delay(4000).fadeIn(3000);
 	$(".oil").delay(6000).fadeIn(3000);

 	$(".midnext").fadeOut(1000);
	$(".midnexttwo").delay(5000).fadeIn(2000);
 	

});


$(".midnexttwo").click(function() {
 	$(".midinfocontfour").delay(1000).animate ({
          top: '-90%'},1300);
 	$(".blackfiller").fadeOut(1000);
 	$(".oil").fadeOut(1000);

 	$(".midinfocontfive").show();
 	$(".midinfocontfive").delay(2100).animate ({
          top: '45%'},1300);
 	$(".squid").delay(3000).animate ({
          top: '-34%'},5000);
 	$(".squidtwo").delay(4000).animate ({
          top: '-30%'},5000);


 	$(".midnexttwo").fadeOut(1000);
	$(".midnextthree").delay(5000).fadeIn(2000);
 	

});


$(".midnextthree").click(function() {
 	$(".midinfocontfive").delay(1000).animate ({
          top: '-90%'},1300);
 	$(".squid").delay(1000).animate ({
          top: '-234%'},2000);
 	$(".squidtwo").delay(1500).animate ({
          top: '-130%'},2000);

 	$(".midinfocontseven").show();
 	$(".midinfocontseven").delay(2000).animate ({
          top: '42.5%'},1300);


 	$(".midnextthree").fadeOut(1000);
	$(".toabyss").delay(5000).fadeIn(2000);
 	

});


$(".toabyss").click(function() {
 	$(".midinfocontseven").delay(1000).animate ({
          top: '-90%'},1300);

 	$('html,body').animate({
        scrollTop: $("#pagefive").offset().top},
        4000,'linear');


 	$(".toabyss").fadeOut(1000);
	

});


$(".abstart").click(function() {
 	$(".abinfocontainer").fadeOut(1500);
 	$(".abinfoconttwo").show();
 	$(".abinfoconttwo").delay(1000).animate ({
          top: '42.5%'},1300);
    $(".overlay").delay(1000).fadeIn(2000);
  $(".flashlight2").delay(4000).fadeIn(3000);

 	$(".abcontinue").delay(2000).fadeIn(2000);



});

$(".abcontinue").click(function() {
 	$(".abinfoconttwo").delay(1000).animate ({
          top: '-90%'},1300);
 	$(".abinfocontthree").show();
 	$(".abinfocontthree").delay(2000).animate ({
          top: '42.5%'},1300);

 	$(".abcontinue").fadeOut(1000);
	$(".abnext").delay(2000).fadeIn(2000);
 

});


$(".abnext").click(function() {
 	$(".abinfocontthree").delay(1000).animate ({
          top: '-90%'},1300);

 	$(".abinfocontfour").show();
 	$(".abinfocontfour").delay(2000).animate ({
          top: '42.5%'},1300);

 	$(".abnext").fadeOut(1000);
	$(".abnexttwo").delay(3000).fadeIn(2000);
 	

});


$(".abnexttwo").click(function() {
 	$(".abinfocontfour").delay(1000).animate ({
          top: '-90%'},1300);

 	$(".abinfocontfive").show();
 	$(".abinfocontfive").delay(2000).animate ({
          top: '42.5%'},1300);


 	$(".abnexttwo").fadeOut(1000);
	$(".tohadal").delay(3000).fadeIn(2000);
 	

});


$(".tohadal").click(function() {
 	$(".abinfocontfive").delay(1000).animate ({
          top: '-90%'},1300);

 	$('html,body').animate({
        scrollTop: $("#pagesix").offset().top},
        4000,'linear');


 	$(".tohadal").fadeOut(1000);
	

});

$(".hadstart").click(function() {
 	$(".hadinfocontainer").fadeOut(1500);
 	$(".hadinfoconttwo").show();
 	$(".hadinfoconttwo").delay(3000).animate ({
          top: '42.5%'},1300);
 	$(".overlay").delay(1000).fadeIn(2000);
 	$(".flashlight").delay(4000).fadeIn(3000);
 	$(".hadcontinue").delay(3500).fadeIn(2000);



});

$(".hadcontinue").click(function() {
 	$(".hadinfoconttwo").delay(1000).animate ({
          top: '-90%'},1300);
 	$(".hadinfocontthree").show();
 	$(".hadinfocontthree").delay(2000).animate ({
          top: '42.5%'},1300);

 	$(".hadcontinue").fadeOut(1000);
	$(".hadnext").delay(6000).fadeIn(2000);
 

});


$(".hadnext").click(function() {
 	$(".hadinfocontthree").delay(1000).animate ({
          top: '-90%'},1300);

 	$(".hadinfocontfour").show();
 	$(".hadinfocontfour").delay(2000).animate ({
          top: '42.5%'},1300);

 	$(".hadnext").fadeOut(1000);
	$(".hadnexttwo").delay(5000).fadeIn(2000);
 	

});


$(".hadnexttwo").click(function() {
 	$(".hadinfocontfour").delay(1000).animate ({
          top: '-90%'},1300);

 	$(".hadinfocontfive").show();
 	$(".hadinfocontfive").delay(2000).animate ({
          top: '42.5%'},1300);


 	$(".hadnexttwo").fadeOut(1000);
	$(".hadnextthree").delay(5000).fadeIn(2000);
 	

});


$(".hadnexthree").click(function() {
 	$(".hadinfocontfive").delay(1000).animate ({
          top: '-90%'},1300);

 	$(".hadinfocontsix").show();
 	$(".hadinfocontsix").delay(2000).animate ({
          top: '42.5%'},1300);


 	$(".hadnextthree").fadeOut(1000);
	$(".totop").delay(5000).fadeIn(2000);
 	

});

$(".totop").click(function() {
 	$(".hadinfocontsix").delay(1000).animate ({
          top: '-90%'},1300);

 	$('html,body').animate({
        scrollTop: $("#pagetwo").offset().top},
        4000,'linear');

 	$(".totop").fadeOut(1000);
 	

});

$("body").mousemove(function(e){
$('.flashlight').css('top', e.clientY-100).css('left', e.clientX-100);
});

$("body").mousemove(function(e){
$('.flashlight2').css('top', e.clientY-100).css('left', e.clientX-100);
});


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 110;
  document.getElementById("myBar").style.width = scrolled + "%";
}






});











