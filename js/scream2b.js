// parallax
$('#myParallax1').parallax({
	width: 673,  
	height: 296,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 1,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

$('#myParallax2').parallax({
	width: 386,  
	height: 278,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 1,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

$('#panel2').hover(function(){
	$('#text3').css("opacity","1");
	$('#panel2 img').css("-webkit-transform","rotate(-10deg)");
	$('#panel2 img').css("transform","rotate(-10deg)");
	$('#moveit img').css("left","350px");
});

$('#myParallax3').parallax({
	width: 484,  
	height: 314,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 1,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

$('#myParallax3').hover(function(){
	$('#heart').css("opacity","0");
	$('#brokenheart').css("opacity","1");
	$('#tears').css("opacity","1");
});

$('#myParallax4').parallax({
	width: 587,  
	height: 256,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 0,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

$('#myParallax4').hover(function(){
	$('#flyingspeech').css("opacity","1");
	$('#flying').css("opacity","1");
});

var glow = $('.end');
setInterval(function(){
    glow.toggleClass('glow');
}, 900);