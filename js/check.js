const check = nr => {
    let isGuessed = false;
    const alphabet = new Figures();
    const figures = alphabet.figures;
    for (i = 0; i < statementLength; i++) {
        if (statement.charAt(i) === figures[nr]) {
            hiddenStatement = hiddenStatement.setFigure(i, figures[nr]);
            isGuessed = true;
        }
    }

    // change figure's look - not possible to use it again
    const displayUsedFigure = CSSclass => {
        const element = "fig" + nr;
        const usedFigure = document.getElementById(element);
        return () => {
            usedFigure.classList.add(CSSclass);
            usedFigure.setAttribute("onclick", ".");
        }
    }

    displayGuessed = displayUsedFigure("guessed");
    displayNotGuessed = displayUsedFigure("notGuessed");

    if (isGuessed) {
        audio.yes.play();
        displayGuessed();
        displayStatement();
    } else {
        audio.no.play();
        displayNotGuessed();

        // fail
        fails++;
        var picture = `img/s${fails}.png`;
        document.getElementById("szubienica").innerHTML = `<img src="${picture}" alt=""/>`;
    }
    // win
    if (statement === hiddenStatement)
        document.getElementById("alphabet").innerHTML = `Tak jest! Podano prawidłowe hasło: ${statement} <br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>`;
    // loss
    if (fails >= 9)
        document.getElementById("alphabet").innerHTML = `Przegrana! Prawidłowe hasło: ${statement} <br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>`;
}