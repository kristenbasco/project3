// parallax
$('#panel-1').parallax({
	width: 365,  
	height: 275,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 1,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

$('#panel-2').parallax({
	width: 354,  
	height: 339,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 1,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 


var $smoke = $('.smoke_overlay img');

$smoke.hover(
    function() {
        $(this).css('opacity','0.7');
    }, function() {
        $(this).css('opacity','0.5');
    }
);

$('#panel-3').parallax({
	width: 320,  
	height: 232,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 0.7,
	easingCoefficient: 10,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

var glow = $('.end');
setInterval(function(){
    glow.toggleClass('glow');
}, 900);



