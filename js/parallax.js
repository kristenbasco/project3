$('#myParallax').parallax({
	width: 836,  
	height: 700,
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
	$('#hddi').attr("src","parallax/hddi_3.png");
	$('#hddi').css("left","300px");
	var position = $('#hddi').offset();
	if(position.left>400){
		$('#text').html("<p>And fail completely.</p>");
	}else{
		$('#text').html("<p>As the villain slowly approaches the explosive you attempt to reason with him.</p>");
	}
});


$('#myParallax2').parallax({
	width: 836,  
	height: 700,
	enableMouse: true,
	activateOnClick: false,
	sensitivityX: 1,
	sensitivityY: 1,
	easingCoefficient: 7,
	autoZCoordinate: true,
	useCustomZ: true,
	focusZ: 100
}); 


// instead of brian stick name here. if the value of name is null, because nothing was input, brian is default
$('#clickme').click(function(){
	//dynamic stuff
	var name = $('#supername').val();
	$('#namehere').html("<p>"+name+"</p>");
});

function loopleft(){
    $('#colwrap').animate({scrollLeft:'-=75'}, 1000, 'linear', loopleft);
}  

function loopright(){
    $('#colwrap').animate({scrollLeft:'+=75'}, 1000, 'linear', loopright);
}        

function stop(){
    $('#colwrap').stop();
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


		