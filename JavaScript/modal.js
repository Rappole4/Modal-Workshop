	setTimeout(function(){
		document.getElementById("modal").style.display="block";
	},3000);

document.addEventListener("DOMContentLoaded",function(){
	document.getElementById("submit").onclick = function(){
		if(document.getElementById("email").value.includes("@")){
			document.getElementById("modal").style.display="none";
	}}
	document.getElementById("button1").onclick = function(){
		document.getElementById("modal").style.display="none";
	}
});