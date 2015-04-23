var height = window.innerHeight;
var width = window.innerWidth;
// var arrowheight = $('#arrows').height();
// var difheight = height - arrowheight;

var height = height-753;
var width = width*.8;

$('.intro-button').on('click', function(event) {
  $(this).closest('.intro').addClass('intro-offscreen');
});

$(function(){
	$('#anotherdiv').css("top",height);
});

// reading mouseout even if I just started hovering
// $('#globe img').mouseenter(function() {
// 	$('#globe').css("width",width);
// 	$("ul#ticker01").liScroll({travelocity: 0.05});
// 	$('ul#ticker01').css("opacity","1");
// });
$('#globe').mouseenter(function() {
	$('#globe').css("width",width);
	// $('#mainbody').css("display","block");
	$('#mainbody').css("opacity","1");

	var w = $('#globe').css("width");
	if(	w <= width ) {
		$('#globe').css("background-color","blue");
		// $('ul#ticker01').html("<div class='tickercontainer'><li><span>10/10/2007</span><p>The first thing ...</p></li><li><span>10/10/2007</span><p>End up doing is ...</p></li><li><span>10/10/2007</span><p>The code that you ...</p></li></div>");
		$("ul#ticker01").liScroll({travelocity: 0.05});	
		$('ul#ticker01').css("opacity","1");
	}

});
$('#globe').click(function() {
	$('#globe').css("width","80px");
	// if($('#globe').width()==width){
		$('#mainbody').css("opacity","0");
		// $('#mainbody').css("display","none");
		// $('#mainbody').css("display","block");
		// $('#mainbody').empty();

	// }
});

$('#myParallax').parallax({
	width: 836,  
	height: 600,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 0,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

$('#myParallax').mousemove(function(){
	var position = $('#hddi').offset();
	if(position.left > 400){
		$('#hddi').attr("src","resources/transparent/GreenHood_colorcorrect.png");
		$('#text').html("<p>I'm Awesome Man, and I'm proud to call you my sidekick.</p>");
	}else if(position.left <= 400){
		$('#hddi').attr("src","resources/transparent/GreenHood_colorcorrect.png");
		$('#text').html("<p>Greetings my young hero.</p>");
	}
});

/*
$('#myParallax').mouseout(function(){
	$('#hddi').css("left","300px");
	var position = $('#hddi').offset();
	if(position.left>400){
		$('#text').html("<p>And fail completely.</p>");
	}else{
		$('#text').html("<p>As the villain slowly approaches the explosive you attempt to reason with him.</p>");
	}
});
*/

/*
$('#myParallax').mousemove(function(){
	var position = $('#hddi').offset();
	if(position.left > 400){
		$('#hddi').attr("src","parallax/hddi_4.png");
		$('#text').html("<p>DAMNIT BRIAN!</p>");
		$('#splode').attr("src","parallax/explosion.png").css("display","block");
	}else if(position.left <= 400 && position.left > 200){
		$('#hddi').attr("src","parallax/hddi_3.png");
		$('#text').html("<p>Hoe, don't do it.</p>");
		$('#splode').css("display","none");
	}else if(position.left <= 200 && position.left > 100){
		$('#hddi').attr("src","parallax/hddi_2.png");
		$('#text').html("<p>You're being a child, Brian.</p>");
	}else if(position.left <= 100){
		$('#hddi').attr("src","parallax/hddi_1.png");
		$('#text').html("<p>Stop it.</p>");
		// .css("border","1px solid black");
	}
});

$('#myParallax').mouseout(function(){
	$('#hddi').attr("src","resources/transparent/GreenHood_colorcorrect.png");
	$('#hddi').css("left","300px");
	var position = $('#hddi').offset();
	if(position.left>400){
		$('#text').html("<p>And fail completely.</p>");
	}else{
		$('#text').html("<p>As the villain slowly approaches the explosive you attempt to reason with him.</p>");
	}
});
*/

$('#myParallax2').parallax({
	width: 836,  
	height: 600,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 1,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

$('#myParallax2').mousemove(function(){
	var position2 = $('#panel2').offset();
	if(position2.left > 450){
		$('#text2').html("<p>NOT RIGHT NOW!</p>");
		$('#text3').html("<p>Oh, uh... Sorry about that that!</p>");
		/*$('#splode').attr("src","parallax/explosion.png").css("display","block");*/
	}else if(position2.left <= 450){
		$('#text2').html("<p>First things first-</p>");
		$('#text3').html("<p>Is this the new guy? Hi, I'm --</p>");
	}
});

$('#myParallax3').parallax({
	width: 836,  
	height: 600,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 1,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

$('#myParallax3').mousemove(function(){
	var position2 = $('#panel3').offset();
	if(position2.left > 425){
		$('#text4').html("<p>Let's check out the city!</p>");
		/*$('#splode').attr("src","parallax/explosion.png").css("display","block");*/
	}else if(position2.left <= 425){
		$('#text4').html("<p>Nevermind whatever I was about to say.</p>");
	}
});

$('#myParallax4').parallax({
	width: 300,  
	height: 300,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 1,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

$('#myParallax4').mousemove(function(){
	var position2 = $('#panel3').offset();
	if(position2.left > 425){
		$('#text4').html("<p>AWAAAAAAAY</p>");
		/*$('#splode').attr("src","parallax/explosion.png").css("display","block");*/
	}else if(position2.left <= 425){
		$('#text4').html("<p>Nice to meet ya sidekick, let's check out the city!</p>");
	}
});

$('#myParallax5').parallax({
	width: 836,  
	height: 600,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 0,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

$('#myParallax5').mousemove(function(){
	var position = $('#panel3').offset();
	if(position.left > 150 && position.left <= 500){
		$('#panel3').attr("src","resources/transparent/RedHood.png");
		$('#text').html("<p>Looks like we made it.</p>");
		$('#splode').attr("src","parallax/explosion.png").css("display","block");
	}else if(position.left <= 150){
		$('#panel3').attr("src","resources/transparent/Flame_002.png");
	}
	else if(position.left > 500){
		$('#text').html("<p>And so have evildoers...</p>");
	}
});

$('#myParallax6').parallax({
	width: 636,  
	height: 400,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 0,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 	

$('#myParallax6').mousemove(function(){
	var position2 = $('#panel4').offset();
	if(position2.left > 500){
		$('#text2').html("<p>Quick! Make a decision!</p>");
		/*$('#splode').attr("src","parallax/explosion.png").css("display","block");*/
	}else if(position2.left <= 500){
		$('#text2').html("<p>Our city needs us...</p>");
	}
});

function loopleft(){
    $('#wholeshebang').animate({scrollLeft:'-=200'}, 1000, 'linear', loopleft);
}  

function loopright(){
    $('#wholeshebang').animate({scrollLeft:'+=200'}, 1000, 'linear', loopright);
}        

function stop(){
    $('#wholeshebang').stop();
}

// $(window).mousemove(function(){
$("#arrowright img").hover(function () {
   loopright();
},function () {
   stop();
});


	// left
	// if(position.left <= 100){
	// 	loopleft();
	// }
$("#arrowleft img").hover(function () {
   loopleft();
},function () {
   stop();
});


// });

// var globestuff = function(){
	// $("#globe").hover(function () {
	// 	$('#globetext').text("Breaking news from KXCY newsfloor, Awesome Man has teamed up with a sidekick by the name of Sidekick");
	// 	$('#globetext').css("display","block");
	// 	$('#globetext').css("opacity","1");
	// });
	// $("#globe").mouseeenter(function () {
	// 	$('#globetext').text("Breaking news from KXCY newsfloor, Awesome Man has teamed up with a sidekick by the name of Sidekick");
	// });
	// $("#mainbody").hover(function () {
	// 	$('#globetext').text("Breaking news from KXCY newsfloor, Awesome Man has teamed up with a sidekick by the name of Sidekick");
	// 	$('#globetext').css("display","block");
	// 	$('#globetext').css("opacity","1");
	// });
	// $("#globetext").hover(function () {
	// 	$('#globetext').text("Breaking news from KXCY newsfloor, Awesome Man has teamed up with a sidekick by the name of Sidekick");
	// 	$('#globetext').css("display","block");
	// 	$('#globetext').css("opacity","1");
	// });
	// $("#globe").mouseout(function () {
	// 	$('#globetext').css("opacity","0");
	// 	$('#globetext').css("display","none");
	// 	$('#globetext').empty();
	// });
// }
		