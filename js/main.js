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

window.addEventListener("load", start);