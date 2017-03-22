function handlePortfolio() {

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
		case "":
			openSection("Code");
			break;
	}


	$(".section_option").click(function(){

		openSection(this.innerHTML)

	});

	function openSection(sectionName) {
    var x = document.getElementsByClassName("portfolio_section");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    
    document.getElementById(sectionName).style.display = "block";

    var y = $('a[class*=section_option]');
		
		for (var i = 0; i < y.length; i++) {
			if(y[i].innerHTML == sectionName){

				y[i].className = "section_option current";

			} else {

				y[i].className = "section_option";

			}
		}
	}	
}

$(document).ready(function(){
	
	handlePortfolio();

});