$(function (){

	var context = {name: "Anti-Man"};
	var source = $("#hero-template").html();

	var htmlthere = "<div id='superhero'>"+
					"<img src='img/Anti.png' alt='pic of hero'/>"+
					"<h3>{{name}}</h3>"+
				"</div>";

	var template = Handlebars.compile(source);

	$("#superhero").append(template(context));

});