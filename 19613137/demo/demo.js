// TODO: write the script for the demo <19-04-21, Redari-Es> //
// 
function changeColor(){
	var cC = document.getElementById("changeColor").value;
	document.getElementById("content").style.color = cC;

}
function changefontSize(){
	var fS = document.getElementById("changefontSize").value;
	document.getElementById("content").style.fontSize = parseInt(fS) + "px";

}
function shownow(){
	var now=document.getElementById("changeColor");
	cC = now.value;
	var fS=document.getElementById("changefontSize").value;


	alert("您选的颜色是:" + cC + " 您选的字体大小为：" + fS + "px");
}
function addcolor(){
		var aCV = document.getElementById("addColorValue").value;
		var aCT = document.getElementById("addColorText").value;
		alert("您增加的颜色是：" + aCT + "!!")
		var select = document.getElementById("changeColor");
		var newoption = document.createElement("option");
		newoption.value=aCV;
		newoption.innerText=aCT;
		select.appendChild("newoption");
}
function showtime(){
	//document.write(Date());
	alert(Date());
}
function changetext(){
	document.getElementById("ccontent").innerHTML = document.getElementById("addtext").value;

}
function addtext(){
	document.getElementById("ccontent").append(document.getElementById("addtext").value)
}
