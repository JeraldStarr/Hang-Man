class Key {
    constructor() {
        this.alphabetHTML = document.querySelector("#alphabet");
        this.boardHTML = document.querySelector("#board");
        this.hangmanImage = document.querySelector("#szubienica");
    }
    createKey(id, index) {
        const divHTML = document.createElement("div");
        let figures = null;
        divHTML.classList.add("letter");
        divHTML.id = id;
        figures = game.keyboard.getFigures();
        divHTML.textContent = figures[index];
        return divHTML;
    }
    createCuttingDiv() {
        const divHTML = document.createElement("div");
        divHTML.setAttribute("style", "clear: both");
        return divHTML;
    }
    addKeysToView(id, index, alphabetContainer) {
        alphabetContainer.appendChild(this.createKey(id, index));
    }
    addCuttingDivToView(alphabetContainer) {
        alphabetContainer.appendChild(this.createCuttingDiv());
    }
    setID(i) {
        return "fig" + i;   
    }
    buildKeys(keyboard) {
        const alphabetLenght = game.keyboard.getFigures().length;
        for (let i = 0; i < alphabetLenght; i++) {
            keyboard.arrangeKeys(i, this.setID(i));
        }
    }
}