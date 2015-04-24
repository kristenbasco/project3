// parallax
$('#myParallax1').parallax({
	width: 449,  
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


   

$('#myParallax2').parallax({
	width: 412,  
	height: 359,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 0.4,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 

$('#myParallax2a').parallax({
	width: 278,  
	height: 203,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 0,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 


$('#myParallax3a').parallax({
	width: 214,  
	height: 193,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 0.7,
	sensitivityY: 0,
	easingCoefficient: 8,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 


$('#myParallax2').hover(
	function() {
		$('#blush').css('opacity','1');
		$('#heart_group').css('opacity', '1');

		$('#changeMan').attr('src', 'img/scream/am-back.png');
        $('#smile').attr('src', 'img/scream_2a/monster-front-smile.png');

       
 	}, function() {
        $('#smile').attr('src','img/scream_2a/monster-front.png');
       	$('#changeMan').attr('src', 'img/scream/am-lookfront.png');
        $('#blush').css('opacity','0');
        $('#heart_group').css('opacity', '0');
   
    }
);



$('#wrap-these').hover(
	function() {
		$('#uh').css('opacity','1');
		console.log('yes it works');
	
       
 	}, function() {
      	$('#uh').css('opacity','0');
     
});

$('#myParallax3a').hover(
	function() {
		$('#hefailed').html("<p>...he fails.</p>");

       
 	}, function() {
        $('#hefailed').html("<p>...and is chased.</p>");
   
    }
);


var glow = $('.end');
setInterval(function(){
    glow.toggleClass('glow');
}, 900);




