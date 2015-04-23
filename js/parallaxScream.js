// parallax
$('#myParallax1').parallax({
	width: 337,  
	height: 215,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 0,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

$('#myParallax2').parallax({
	width: 587,  
	height: 256,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 0.3,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

$('#myParallax2').hover(function(){
	$('#catman img').css("opacity","1");
	$('#text3').css("opacity","1");
});

$('#allthethings').hover(function(){
	$('#poof').css("width","200px");
	$('#poof').css("opacity","0");
	$('#poof').css("left","1400px");
	$('#bradcircle').css("opacity","0");
	$('.big').css("opacity","0.8");
	$('#catcircle').css("opacity","0");
	$('#newthings').css("opacity","1");
});

$('#myParallax3').parallax({
	width: 372,  
	height: 219,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 1,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

var glow = $('.end');
setInterval(function(){
    glow.toggleClass('glow');
}, 900);