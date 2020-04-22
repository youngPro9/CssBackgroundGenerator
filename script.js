var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".btn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

document.onreadystatechange = function () {
	if(document.readyState === 'complete')
		setGradient()
}

document.addEventListener('readystatechange', function () {
	if(document.readyState === 'complete')
		setGradient()
});

btn.onclick = function() {
	var rand = [];
	color1.value = generateRandomColorCode();
	color2.value = generateRandomColorCode();
	setGradient();
}

function generateRandomColorCode() {
	let hexVal = '012345678ABCDEF';
	let colorCode = '#';
	for(let i = 0; i < 6; i++) {
		let rand = Math.floor((Math.random() *hexVal.length));
		colorCode += hexVal[rand]
	}
	return colorCode;
}