var height = window.innerHeight;
var width = window.innerWidth;
// var height = height-753;
var width = width*.8;

// splash page
$('.intro-button').on('click', function(event) {
  $(this).closest('.intro').addClass('intro-offscreen');
});

// setting up main page stuff
$(function(){
	// $('#anotherdiv').css("top",height);
	// $('#mainbody').hide();
	
	$('#globe').css("top",(height-100));
	$('#bigtick').css("top",(height-100));


	setTimeout(function () {
		$('#globe').css("width","800px");

		// $('#mainbody').delay(2000).show(0);	

		$('#mainbody')
		  .delay(2000)
		  .queue( function(next){ 
		    $(this).css("opacity","1")
		    next(); 
		  });

		// $('#mainbody').delay(4000).css("opacity","1");
		// $('ul#ticker01').html("<li><p>Breaking news... </p><p>WKCD news at 6, Awesome Dude arrives at the scene of a fire on 31st street...</p> <p>Also on the scene is fellow hero Brian McJungleman...</p><p>We await on the scene as events unfold...</p></li>");
		// $('ul#ticker01').html("<li><span>10/10/2007</span><a href='#'>The code that you ...</a></li><li><span>10/10/2007</span><a href='#'>The code that you ...</a></li>");	
		$("ul#ticker01").liScroll({travelocity: 0.1});	
	}, 3000);
});

// the news globe thing
$('#globe').click(function() {
	var gw = $('#globe').width();	

	if(gw == 800){
		$('#globe').delay(500)
		  .queue( function(next){ 
		    $(this).css("width","80px")
		    next(); 
		});

		$('#mainbody').css("opacity","0");
		// $('#mainbody').hide();
	}
	else{
		$('#globe').css("width","800px");

	
		// setTimeout(function () {
		// 	$('#mainbody').delay(2000).show(0);
		// 	$('#mainbody').css("display","inline-block");
		// }, 2000);

		$('#mainbody')
		  .delay(2000)
		  .queue( function(next){ 
		    $(this).css("opacity","1")
		    next(); 
		});
		
		// $("ul#ticker01").liScroll({travelocity: 0.1});	
	}

});

// different messages
// var breakingnews = function(){
// if on first page, ticker reads x, if on a different page, it reads y
// }





$('#myParallax').parallax({
	width: 836,  
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
	height: 400,
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


// moving using the arrows
function loopleft(){
    $('#wholeshebang').animate({scrollLeft:'-=200'}, 1000, 'linear', loopleft);
}  

function loopright(){
    $('#wholeshebang').animate({scrollLeft:'+=200'}, 1000, 'linear', loopright);
}        

function stop(){
    $('#wholeshebang').stop();
}

$("#arrowright img").hover(function () {
   loopright();
},function () {
   stop();
});

$("#arrowleft img").hover(function () {
   loopleft();
},function () {
   stop();
});

		