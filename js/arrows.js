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
	
	// $('#arrows').css("top",(height-100));


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
	}
	else{
		$('#globe').css("width","800px");

		$('#mainbody')
		  .delay(2000)
		  .queue( function(next){ 
		    $(this).css("opacity","1")
		    next(); 
		});
	}

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

// function clickright(){
// 	$('#wholeshebang').animate({scrollLeft:'+=836'}, 1000, 'linear', clickright);
// }

$(".arrowright img").hover(function () {
   loopright();
},function () {
   stop();
});


$(".arrowleft img").hover(function () {
   loopleft();
},function () {
   stop();
});