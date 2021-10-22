// fuction that set the height of the header
$(document).ready(function(){
 $('.header').height($(window).height());
});


// fuction that acknowledge submitted user inputs
function acknowledgeResponse() {
	alert("Thank you for your response. May the odds be ever in your favor!");
	document.getElementById("survey-form").reset();
	
}