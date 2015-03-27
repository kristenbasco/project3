$(function (){
	// I don't know, here instead of 'anti-man' we'd have <php? echo $hero['FirstName']?>
	// before we'd have generated a random number, connected to db, and querried for id=num
	var context = {name: "Anti-Man", src:"img/Anti.png"};
	var source = $("#hero-template").html();

	var htmlthere = "<div id='superhero'>"+
					"<img src='img/Anti.png' alt='pic of hero'/>"+
					"<h3>{{name}}</h3>"+
				"</div>";

	var template = Handlebars.compile(source);

	$("#superhero").append(template(context));

});