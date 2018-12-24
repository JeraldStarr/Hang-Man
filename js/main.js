let randomStatement = Math.floor(Math.random() * statements.length);
let statement = statements[randomStatement];
let hiddenStatement = "";
let fails = 0;
const statementLength = statement.length;

const draw = () => {
	return () => {
		statement = statement.toUpperCase();
		if (randomStatement > statements.length - 1) randomStatement = 1;
		for (i = 0; i < statementLength; i++) {
			if (statement.charAt(i) === " ") hiddenStatement = hiddenStatement + " ";
			else hiddenStatement = hiddenStatement + "-";
		}

	}
}

const drawHiddenStatement = draw();
const displayStatement = () => {
	document.getElementById("board").innerHTML = hiddenStatement;
}

const figures = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ż", "Ź"];


window.addEventListener("load", start);