$(document).ready(function(){

	$(".portfolio_item").mouseenter(function(){

		$(this).children("*").children(".block").css("opacity", "0.8");

	});

	$(".portfolio_item").mouseleave(function(){

		$(this).children("*").children(".block").css("opacity", "1");

	});

}); 
