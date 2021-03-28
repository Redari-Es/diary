
var myvar = setlnterval(function(){myTimer(),1000});
function myTimer(){
	var d=new Date();
	var t=d.toLocaleTimeString();
	alert("Welcome!")
	document.getElementsById("footer").innerHTML = "Welcome!" + t;
}

