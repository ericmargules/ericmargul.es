$(document).ready(function(){

	$(".portfolio_item").mouseenter(function(){

		$(this).children("*").children(".block").css("opacity", "0.8");

	});

	$(".portfolio_item").mouseleave(function(){

		$(this).children("*").children(".block").css("opacity", "1");

	});

	
	switch(location.search){
		case "?category=code":
			openSection("Code");
			break;
		case "?category=copy":
			openSection("Copy");
			break;
		case "?category=design":
			openSection("Design");		
			break;
	}


	$(".section_option").click(function(){

		openSection(this.innerHTML)

	});

	function openSection(sectionName) {
    var i;
    var x = document.getElementsByClassName("portfolio_section");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(sectionName).style.display = "block"; 
	}

}); 
