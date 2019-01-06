const keyboard = (() => {
    const drawKeys = () => {
        let divContent = "";
        const alphabet = new Figures();
        const alphabetLength = alphabet.figuresLength;
        const figures = alphabet.figures;
        for (i = 0; i < alphabetLength; i++) {

            let element = "fig" + i;
            divContent = divContent + `<div class="litera" onclick="check('${i}')" id="${element}">${figures[i]} </div>`;
            if ((i + 1) % 7 == 0) divContent = divContent + `<div style="clear: both;"></div>`;
        }
        return divContent;
    }

    return {
        drawKeys: drawKeys
    }
})()