const keyboard = (() => {
    const drawKeys = () => {
        let divContent = "";
        const alphabet = 35;
        for (i = 0; i < alphabet; i++) {

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